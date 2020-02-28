var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/zhadaev/another-react-slider'
}, function() {});