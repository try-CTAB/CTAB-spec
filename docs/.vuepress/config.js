module.exports = {
  title: 'Draft Specifcation for Contribution Tables',
  description: 'The draft specification for better disclosure of contributions in scientific publications',
  themeConfig: {
    nav: [
      { text: 'Motivation', link: 'https://try-ctab.github.io/' },
      { text: 'Build a table', link: 'https://try-ctab.github.io/#/editor' }
    ],
    logo: '/favicon.png',
    sidebar: [
      '/specification/',
      '/for-journals/',
      '/export-formats/'
    ],
    displayAllHeaders: true, // Default: false
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'try-CTAB/spec',
    repoLabel: 'Contribute!',
  },
  base: '/spec/'
}
