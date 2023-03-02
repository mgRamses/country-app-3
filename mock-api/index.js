import express from "express";
import fs from "fs";
import path from "path";

const countries = JSON.parse(fs.readFileSync(
  path.join('./mock-api/', "countries.json")
));

const app = express();
const port = 8999;

function getCountries(query, page, page_size) {
  const country_list = [];

  for (var i = 0; i < countries.length; i++) {
      console.log(countries[i])
    if (query === "" || countries[i].name.toLowerCase().includes(query.toLowerCase())) {
      country_list.push(countries[i]);
    }
  }

  return country_list.slice((page - 1) * page_size, page * page_size);
}

app.use("/flags", express.static("mock-api/flags"));
app.get("/countries", (req, res) => {
  // get the query parameters and set defaults if not defined
  const { query = "", page = 1, page_size = 10 } = req.query;

  // return the filtered list
  res.json(getCountries(query, page, page_size));
});

app.listen(port, () => {
  console.log(`mock server listening on port ${port}`);
});
