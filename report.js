

const newman = require('newman');

newman.run({
    collection: './collections/dmoney_api.json', // Collection URL from a public link or the Postman API can also be used
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './report.html',
            
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});