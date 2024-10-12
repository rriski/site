import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default {
  siteTitle: 'Timo Riski',
  siteTitleShort: 'Timo Riski',
  siteDescription: 'Things about me.',
  siteUrl: 'https://timoriski.fi',
  themeColor: '#000',
  backgroundColor: '#fff',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/static/icon.png'),
}
