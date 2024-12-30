if (typeof global.ReadableStream === 'undefined') {
    global.ReadableStream = require('stream-browserify').ReadableStream;
}
