const { Console } = require("console");
const fs = require("fs");
const prompt = require("prompt-sync")();

const FILE_LOCATION = "./lesson01/mynewfile1.txt";

var searchString = "";

let fileok = false;
while (!fileok) {
  
  searchString = prompt("What is your filename? ");
  if(searchString=='-1')
  {
    break;
  }
  fs.readFile(FILE_LOCATION, function (err, content) {
    if (err) {
      console.error(err);
      return;
    }
     //console.log(content.toString().indexOf(searchString) <= -1);

    /* if (content.toString().indexOf(searchString) <= -1) {
      fileok = true;
      console.log("Search string is ok");
    }
  }); */
  /* console.log("File contents are: " + contents);
  if (contents.indexOf(searchString) <= -1) {
    fileok = true;
    console.log("Search string is ok");
  } */
  fileok = true;
  //console.log(searchString);
  //console.log("File ok is " + fileok);
}
/*
fs.writeFile(searchString, "You are awesome", (err) => {
  if (err) throw err;
});
fs.appendFile(FILE_LOCATION, "\n" + searchString, function (err) {
  if (err) throw err;
  console.log("Saved!");
}); */
