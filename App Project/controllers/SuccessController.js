const path = require('path'); // Node js core module allows us to work with file paths

const rootDir = require('../util/path'); // Local Import for root directory where app.js is

exports.getSuccessPage = (request, response, next) => {

    response.sendFile(path.join(rootDir, 'views', 'Success.html'));
}