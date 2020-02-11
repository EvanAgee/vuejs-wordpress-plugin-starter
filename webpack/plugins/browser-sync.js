const BrowserSync = require('browser-sync-webpack-plugin');

module.exports = new BrowserSync({
  files: ['*.php', 'inc/*.php', 'template-parts/*.php', 'dist'],
  notify: {
    styles: {
      top: 'auto',
      bottom: '1rem',
      left: '1rem',
      right: 'auto',
      backgroundColor: 'red',
      color: 'white',
      width: '300px',
    },
  },
});
