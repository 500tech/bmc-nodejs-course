const fs = require("fs");
const util = require("util");
const bluebird = require("bluebird");


// let readdirPromise = util.promisify(fs.readdir);
// let readFilePromise = util.promisify(fs.readFile);

bluebird.promisifyAll(fs, { suffix: 'Promise' });

async function readDir(path) {

    try {
        console.time('Read all files');
        // const dataFromFiles = [];

        const filesNames = await fs.readdirPromise(path);

        let readFilesPromises = []

        // for (let i = 0; i < filesNames.length; i++) {
            // readFilesPromises.push(fs.readFilePromise(`${path}/${filesNames[i]}`));
        // }

        const dataFromFiles = 
            await bluebird.map(filesNames, (fileName)=>{
               return fs.readFilePromise(`${path}/${fileName}`)
            }, {
                concurrency:600
            })


        // filesNames.forEach(async (fileName) => {
        // })

        console.timeEnd('Read all files');
        console.log(dataFromFiles.length);


    } catch (e) {
        console.timeEnd('Read all files');
        console.error(e);
    }

}

module.exports = readDir;