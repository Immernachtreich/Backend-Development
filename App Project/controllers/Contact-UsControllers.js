const rootDir = require('../util/path'); // Local Import for root directory where app.js is
const path = require('path') // Node js path Import

exports.getContactUsPage = (request, response, next) => {

    response.sendFile(path.join(rootDir, 'views', 'Contact-Us.html'));
}