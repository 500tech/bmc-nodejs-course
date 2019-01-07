/*
    1) check if exists - data
    2) create folder
    3) async await    
*/

const fs = require("fs");
const util = require("util");

accessPromise = util.promisify(fs.access);
// statPromise = util.promisify(fs.stat);
mkdirPromise = util.promisify(fs.mkdir);

async function createFolder(folderName) {
    try {
        await accessPromise(folderName)
        console.log('Already exists');
    } catch (err) {
        try {
            await mkdirPromise(folderName)
            console.log('Folder created');
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = {
    createFolder
}