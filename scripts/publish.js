const gh = require('gh-pages');
gh.publish('dist', function(err) { console.log(err); });
