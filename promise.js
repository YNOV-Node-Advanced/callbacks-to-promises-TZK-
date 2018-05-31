const { promisify } = require('util');

function resizeImages (source, dest, width, height) {
    return getFiles(source)
        .then(files => {
            return Promise.all(files.map(file => resize(file)));
        })
}

function getFiles(source) {
    return promisify(fs.readdir)(source);
}

function resize(source, file) {
    return new Promise((resolve, reject) => {
        gm(source + filename)
            .resize(width, height)
            .write(
                dest + "w" + width + "_" + filename,
                (err, values) => {
                    if (err) {
                        reject(err);
                    } else if (fileIndex == files.length - 1) {
                        resolve();
                    }
                }
            );
    });
}
