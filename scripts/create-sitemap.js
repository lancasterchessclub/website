const fs = require('fs')
const path = require('path')

const buildDir = path.resolve(process.cwd(), 'build')

const sitemap = []

const getFiles = (dir) => {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const name = dir.replace(buildDir, '')
    if (file.endsWith('index.html') && !sitemap.includes(name)) sitemap.push(name)
    else if (fs.lstatSync(path.join(dir, file)).isDirectory()) getFiles(path.join(dir, file))
  }
}

getFiles(buildDir)

const output = sitemap.map((current) => `https://lancasterchessclub.co.uk${current}/`).sort().join('\n')

fs.writeFileSync(path.join(buildDir, 'sitemap.txt'), output)
