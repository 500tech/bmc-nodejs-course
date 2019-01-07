const fs = require("fs");
const fsPromise = require("./fs-promise");
const directory = require("./exercise/create-directory");
directory.createFolder('data')
const moment = require("moment");
// const m = require("./node_modules/moment")

console.log(`This is ${process.env.NODE_ENV} env`);

require("./files")('./data')



setInterval(()=>{
    console.log('I am node!')
}, 5000)

// fs.writeFileSync('example.json', JSON.stringify({
//     data: true
// }));

// fs.writeFile('example3.txt', 'native-fs', function (err, data) {
//     console.log("native fs write file")
//     console.log(err + " " + data);
// })

// fs.readFile('example.json', function (error, content) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(content.toString('utf8'));
//         ///
//     }
// });


// console.log(1)
// fsPromise.readFilePromise("example.json")
//     .then((data) => {
//         console.log(2)
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// console.log(3)

// // .catch(generalError)


// fsPromise.writeFilePromise("example.txt", "123");


// (async function () {
//     console.log('before')
//     let fileContent;

//     try {
//         fileContent = await fsPromise.readFilePromise("example.json")
//         handleFile(fileContent);
//         console.log(fileContent);
//     } catch (err) {
//         console.error(err);
//     }

//     console.log(fileContent)
//     console.log('after')
// })();


// function handleFile(content) {

// }

// console.log('last')
