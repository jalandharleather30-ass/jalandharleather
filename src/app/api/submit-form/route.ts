import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/client'
import nodemailer from 'nodemailer'

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map()

// Spam protection configuration
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW || '900000') // 15 minutes
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '5') // 5 submissions per window
const HONEYPOT_FIELD = process.env.HONEYPOT_FIELD_NAME || 'website_url'

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userRequests = rateLimitStore.get(ip) || []
  
  // Filter out old requests
  const recentRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW)
  
  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false // Rate limit exceeded
  }
  
  // Add current request
  recentRequests.push(now)
  rateLimitStore.set(ip, recentRequests)
  
  return true
}

// Spam detection function
function detectSpam(body: any): string[] {
  const spamIndicators = []
  
  // Check honeypot field
  if (body[HONEYPOT_FIELD] && body[HONEYPOT_FIELD].trim() !== '') {
    spamIndicators.push('honeypot_filled')
  }
  
  // Check for suspicious patterns
  const message = (body.message || '').toLowerCase()
  const name = (body.name || '').toLowerCase()
  
  const spamKeywords = [
    'bitcoin', 'crypto', 'investment', 'loan', 'viagra', 'casino',
    'free money', 'click here', 'limited time', 'congratulations',
    'winner', 'lottery', 'inheritance', 'prince', 'urgent'
  ]
  
  spamKeywords.forEach(keyword => {
    if (message.includes(keyword) || name.includes(keyword)) {
      spamIndicators.push(`spam_keyword_${keyword}`)
    }
  })
  
  // Check for excessive links
  const linkCount = (message.match(/http[s]?:\/\//g) || []).length
  if (linkCount > 2) {
    spamIndicators.push('excessive_links')
  }
  
  // Check for suspicious email patterns
  const email = body.email || ''
  if (email.includes('+') && email.split('+')[1].includes('@')) {
    spamIndicators.push('suspicious_email')
  }
  
  return spamIndicators
}

// Send email notification
async function sendEmailNotification(formData: any, submissionId: string) {
  try {
    const transporter = createTransporter()
    
    const emailTemplate = getEmailTemplate(formData, submissionId)
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
    })
    
    console.log('Email notification sent successfully')
  } catch (error) {
    console.error('Failed to send email notification:', error)
  }
}

// Email template generator
function getEmailTemplate(data: any, submissionId: string) {
  const { formType, name, email, phone, company, message, quantity, productType } = data
  
  if (formType === 'bulk-order') {
    return {
      subject: `🛍️ New Bulk Order Inquiry - ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🛍️ New Bulk Order Inquiry</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Jalandhar Leather - Premium Leather Goods</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #8B4513; margin-top: 0;">📋 Order Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f8f8f8;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Company:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Contact Person:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr style="background-color: #f8f8f8;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #8B4513;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${phone}" style="color: #8B4513;">${phone}</a></td>
              </tr>
              <tr style="background-color: #f8f8f8;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Product Type:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${productType}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Quantity:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><strong style="color: #8B4513;">${quantity}</strong></td>
              </tr>
            </table>
            
            <h3 style="color: #8B4513;">💬 Requirements:</h3>
            <div style="background-color: #f8f8f8; padding: 15px; border-radius: 8px; border-left: 4px solid #8B4513;">
              ${message || 'No additional requirements specified.'}
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #e8f4f8; border-radius: 8px; border: 1px solid #b3d9e8;">
              <h4 style="margin: 0 0 10px 0; color: #2c5aa0;">📌 Next Steps:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li>Respond within 24 hours with a detailed quote</li>
                <li>Schedule a call to discuss requirements</li>
                <li>Prepare product samples if needed</li>
                <li>Mark as "In Progress" in admin panel</li>
              </ul>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="https://jalandharleather.sanity.studio/" style="display: inline-block; background-color: #8B4513; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">📱 View in Admin Panel</a>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="text-align: center; color: #888; font-size: 12px;">Submission ID: ${submissionId}<br>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }
  } else {
    return {
      subject: `📧 New Contact Form Message - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📧 New Contact Message</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Jalandhar Leather - Premium Leather Goods</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #8B4513; margin-top: 0;">👤 Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f8f8f8;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 25%;">Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}" style="color: #8B4513;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="background-color: #f8f8f8;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${phone}" style="color: #8B4513;">${phone}</a></td>
              </tr>
              ` : ''}
            </table>
            
            <h3 style="color: #8B4513;">💬 Message:</h3>
            <div style="background-color: #f8f8f8; padding: 15px; border-radius: 8px; border-left: 4px solid #8B4513;">
              ${message || 'No message provided.'}
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #e8f4f8; border-radius: 8px; border: 1px solid #b3d9e8;">
              <h4 style="margin: 0 0 10px 0; color: #2c5aa0;">📌 Next Steps:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #555;">
                <li>Respond to customer inquiry</li>
                <li>Add to email list if interested</li>
                <li>Mark as "Responded" in admin panel</li>
              </ul>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <a href="https://jalandharleather.sanity.studio/" style="display: inline-block; background-color: #8B4513; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">📱 View in Admin Panel</a>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="text-align: center; color: #888; font-size: 12px;">Submission ID: ${submissionId}<br>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown'
    
    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }
    
    const body = await request.json()
    
    // Spam detection
    const spamIndicators = detectSpam(body)
    const isSpam = spamIndicators.length > 0
    
    // Create form submission document in Sanity
    const submission = {
      _type: 'formSubmission',
      type: body.formType || 'contact',
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message,
      quantity: body.quantity,
      productType: body.productType,
      submittedAt: new Date().toISOString(),
      status: isSpam ? 'spam' : 'new',
      ipAddress: ip,
      spamIndicators: isSpam ? spamIndicators : undefined,
      notes: isSpam ? `Automatically flagged as spam: ${spamIndicators.join(', ')}` : undefined
    }

    // Save to Sanity
    const result = await writeClient.create(submission)
    
    // Send email notification only if not spam
    if (!isSpam && process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendEmailNotification(body, result._id)
    }
    
    console.log('Form submission processed:', {
      id: result._id,
      type: body.formType,
      spam: isSpam,
      spamIndicators: spamIndicators
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully!',
      id: result._id 
    })
    
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
