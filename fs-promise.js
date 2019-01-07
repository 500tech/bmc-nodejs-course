const fs = require("fs")
const util = require("util");

fs.writeFile = util.promisify(fs.writeFile);


function readFilePromise(path) {
    return new Promise((resolve, reject) => {

        fs.readFile(path, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

module.exports = {
    readFilePromise,
    writeFilePromise: fs.writeFile
}