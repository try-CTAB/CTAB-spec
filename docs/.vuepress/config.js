module.exports = {
  title: 'Draft Specifcation for Contribution Tables',
  description: 'The draft specification for better disclosure of contributions in scientific publications',
  themeConfig: {
    nav: [
      { text: 'Motivation', link: 'https://nemoandrea.github.io/better-contributions/' },
      { text: 'Build a table', link: 'https://nemoandrea.github.io/better-contributions/editor' }
    ],
    logo: '/favicon.png',
    sidebar: [
      '/specification/',
      '/for-journals/',
      '/export-formats/'
    ],
    displayAllHeaders: true, // Default: false
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'NemoAndrea/contribution-heatmap-spec',
    repoLabel: 'Contribute!',
  },
  base: '/better-contributions-spec/'
}
