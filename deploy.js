/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
const ghpages = require('gh-pages')

ghpages.publish('public', {
    branch: 'master',
}, callback);

function callback(arg) {
    console.log(arg);
    // console.log('Pushed dist to master branch')
}