import sharp from 'sharp'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <!-- Sky background -->
  <rect width="512" height="512" fill="#2C3E6B"/>

  <!-- Rising sun -->
  <circle cx="256" cy="340" r="145" fill="#C0392B"/>

  <!-- Mt. Fuji silhouette -->
  <polygon points="256,118 -10,496 522,496" fill="#F7F5F0"/>

  <!-- Snow cap -->
  <polygon points="256,118 208,216 304,216" fill="#2C3E6B" opacity="0.18"/>
</svg>`

const buf = Buffer.from(svg)

await sharp(buf).resize(512, 512).png().toFile('public/pwa-512x512.png')
await sharp(buf).resize(192, 192).png().toFile('public/pwa-192x192.png')
await sharp(buf).resize(180, 180).png().toFile('public/apple-touch-icon.png')

console.log('Icons generated.')
