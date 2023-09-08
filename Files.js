//import core module fs module

//fs is filestyem
 const fs = require ('fs');

 //Read File

//  fs.readFile ('./docs/TextExample.txt',(err,data) => {
// //you can test error by giving the filepath an improper path
//     if (err) {
//         console.log(err);
//     }
//     //console.log(data);
//     //buffer is just package of data
//     console.log (data.toString())
// });

//Write to File replaces what's in current file
//if the file doesn't exist it will create it

// fs.writeFile ('./docs/TextExample.txt', 'Jess is super cool', ()=> {
//     console.log('File is written');
// }
// );


//Directories

//!fs.existsSync will check if it already exist
// if (!fs.existsSync('./CreateFile')) {

//     fs.mkdir ('./CreateFile',(err) =>  {
//         if (err) {
//             console.log (err);
//         }
//         console.log ('Folder Created');
//     });
//     } else {
//         fs.rmdir('./CreateFile', (err) => {
//         if (err) {
//                 console.log (err)
//         }
//         console.log ('Folder Deleted');
//         })
//     }


if (!fs.existsSync('./DeleteMe.txt')) {
    fs.unlink('./DeleteMe.txt'), (err) => {
        console.log (err)
    }
    console.log ('File Deleted');
}
