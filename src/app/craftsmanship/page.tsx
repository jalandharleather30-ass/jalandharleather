import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Craftsmanship - Jalandhar Leather',
  description: 'Discover the traditional craftsmanship and attention to detail that goes into every Jalandhar Leather product.',
}

export default function CraftsmanshipPage() {
  const steps = [
    {
      step: '01',
      title: 'Material Selection',
      description: 'We carefully select the finest quality leather from trusted suppliers, ensuring each piece meets our high standards for durability and beauty.',
      image: '/images/craftsmanship/materials-1.png'
    },
    {
      step: '02',
      title: 'Design & Pattern',
      description: 'Our experienced designers create detailed patterns and templates, ensuring each product maintains consistent quality and aesthetic appeal.',
      image: '/images/craftsmanship/process-1.png'
    },
    {
      step: '03',
      title: 'Cutting & Preparation',
      description: 'Skilled artisans carefully cut each piece of leather using traditional techniques, paying attention to grain direction and natural characteristics.',
      image: '/images/craftsmanship/process-2.png'
    },
    {
      step: '04',
      title: 'Handcrafted Assembly',
      description: 'Each piece is meticulously assembled by hand, with every stitch placed with precision and care by our master craftspeople.',
      image: '/images/craftsmanship/process-3.png'
    },
    {
      step: '05',
      title: 'Finishing Touches',
      description: 'The final touches include edge finishing, hardware attachment, and quality polishing to ensure a premium finish.',
      image: '/images/craftsmanship/process-4.png'
    },
    {
      step: '06',
      title: 'Quality Inspection',
      description: 'Every product undergoes rigorous quality inspection to ensure it meets our exacting standards before reaching our customers.',
      image: '/images/craftsmanship/process-5.png'
    },
  ]

  const techniques = [
    {
      title: 'Hand Stitching',
      description: 'Traditional saddle stitching techniques ensure durability and add a distinctive handcrafted character to each piece.',
      icon: '🧵'
    },
    {
      title: 'Edge Painting',
      description: 'Meticulous edge painting and burnishing create smooth, refined edges that enhance both beauty and longevity.',
      icon: '🎨'
    },
    {
      title: 'Embossing',
      description: 'Custom embossing and stamping techniques add texture and branding while maintaining the leather\'s natural beauty.',
      icon: '🔨'
    },
    {
      title: 'Conditioning',
      description: 'Proper conditioning and treatment ensure the leather remains supple and develops a beautiful patina over time.',
      icon: '✨'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="/images/craftsmanship/workshop-1.png"
              alt="Jalandhar Leather Workshop - Traditional craftsmanship in action"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
          </div>
          <div className="relative mx-auto max-w-4xl text-center py-24 lg:py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
              Craftsmanship
            </h1>
            <p className="mt-6 text-xl leading-8 text-secondary-200">
              Every piece tells a story of skill, tradition, and dedication to excellence
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 font-serif">
              Where Tradition Meets Innovation
            </h2>
            <p className="text-lg text-secondary-600 leading-8">
              At Jalandhar Leather, we believe that true craftsmanship cannot be rushed. Each product is a testament to the time-honored techniques passed down through generations of skilled artisans, combined with modern design sensibilities to create pieces that are both timeless and contemporary.
            </p>
          </div>
        </div>

        {/* Craftsmanship Process */}
        <div className="mx-auto mt-24 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
              Our Craftsmanship Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              From raw material to finished masterpiece - discover the journey of creation
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 font-serif">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-secondary-600 leading-8">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-elegant">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Step ${step.step} of our craftsmanship process`}
                      fill
                      className="object-cover object-center"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="text-lg font-bold">{step.title}</div>
                      <div className="text-sm opacity-90">Step {step.step}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Techniques */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl font-serif">
              Traditional Techniques
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Master craftsmanship techniques that ensure quality and longevity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <div key={technique.title} className="bg-white rounded-2xl shadow-soft border border-secondary-100 p-8">
                <div className="text-4xl mb-6">{technique.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {technique.title}
                </h3>
                <p className="text-secondary-600 leading-7">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Artisan Spotlight */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="bg-secondary-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-serif">
                  Master Artisans
                </h2>
                <p className="text-lg text-secondary-600 leading-8 mb-6">
                  Our team of skilled artisans brings decades of experience to every piece they create. Each craftsperson has undergone years of training and continues to refine their skills, ensuring that the art of leather craftsmanship is preserved and enhanced.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-secondary-700">15+ years average experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-secondary-700">Continuous skill development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-secondary-700">Passion for traditional techniques</span>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-elegant">
                <Image
                  src="/images/craftsmanship/artisan-1.png"
                  alt="Master artisan crafting leather goods with traditional techniques"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-lg font-bold">Master Artisans</div>
                  <div className="text-sm opacity-90">Skilled craftspeople at work</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Promise */}
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <div className="bg-primary-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6 font-serif">
              Our Quality Promise
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-8">
              Every piece that leaves our workshop carries with it our commitment to excellence. We stand behind our craftsmanship with a guarantee of quality that reflects our dedication to the art of leather making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/collection" className="btn-accent text-lg px-8 py-4">
                See Our Craftsmanship
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4 bg-white text-primary-600 hover:bg-primary-50">
                Visit Our Workshop
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
