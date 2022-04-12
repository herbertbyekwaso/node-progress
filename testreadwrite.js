const fs = require("fs");
const prompt = require("prompt-sync")();

const FILE_LOCATION = "./mynewfile1.txt";

function ask() {
  filename = prompt("What is your filename? ");
  console.log("File name: " + filename);
  if (filename === "done") {
    console.log("We are done.");
  } else {
    fs.readFile(FILE_LOCATION, function (err, content) {
      if (err) {
        throw err;
      }
      if (content.indexOf(filename) <= -1) {
        fs.writeFile(filename, "You are awesome", (err) => {
          if (err) throw err;
          fs.appendFile(FILE_LOCATION, "\n" + filename, function (err) {
            if (err) throw err;
            console.log("Saved!");
          });
        });
      } else {
        console.log("Filename already exists, try again");
        ask();
      }
    });
  }
}

ask();
