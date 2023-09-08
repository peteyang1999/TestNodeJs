
// use to pull a file into another file
//const xyz = require ('./PeopleArray');

//importing a file does not directly give you access to the file. you must export first
//look at the PeopeArray File
//console.log (xyz); // this is for importing one


//so the first line will pull in file values
//second line pulls in exports



const { People,ages} = require ('./PeopleArray');
console.log (People,ages);

//gets the operating system
const os = require ('os')
console.log (os.platform(),os.homedir());