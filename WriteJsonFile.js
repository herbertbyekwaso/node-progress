const fs = require("fs");

const series = {
  title: "Harry potter and chamber of secrets",
  author: "J.K. Rowling",
};

const data = JSON.stringify(series);
fs.writeFile("jsondata.json", data, (err, data) => {
  if (err) throw err;
  console.log("printed");
});
