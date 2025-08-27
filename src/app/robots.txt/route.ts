export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://jalandharleather.com/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
