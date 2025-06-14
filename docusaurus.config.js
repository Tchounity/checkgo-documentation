// Ce fichier fait partie de Docusaurus, pas de MkDocs.
// Il n'est pas utilisé et peut être supprimé en toute sécurité ou laissé vide.

presets: [
  [
    '@docusaurus/preset-classic',
    ({
      blog: {
        showReadingTime: true,
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],
], 