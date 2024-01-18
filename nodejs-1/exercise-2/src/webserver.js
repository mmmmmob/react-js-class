import express from "express";

const webServer = express();
const port = 3001;

// this can be left as empty object
const companyList = [
  {
    companyId: "comp-01",
    name: "Mock Company 01",
    taxId: "tax-000",
    employees: [],
  },
];

// when you use it in your application, it enables your server to automatically parse JSON data from requests.
webServer.use(express.json());

// initialize web server with node webserver.js at specific port and ip
webServer.listen(port, "127.0.0.1", () => {
  console.log(`Server has started at 127.0.0.1:${port}`);
});

// create route and response
webServer.get("/", (req, res) => {
  res.send("Hello, World!");
});

// create route and response to get JSON data
webServer.get("/company", (req, res) => {
  res.send(companyList);
});

// create POST method
webServer.post("/company", (req, res) => {
  // call for req body and their value inside key pair
  const name = req.body.name;
  const taxId = req.body.taxId;
  // bonkers createId algorithm
  const companyId = companyList.length + 1;
  const employees = [];
  // set of data to be pushed to central JSON db on the server
  const newCompany = {
    companyId: `comp-0${companyId}`,
    name: name,
    taxId: taxId,
  };
  companyList.push(newCompany);
  // response back to client
  res.send("Success: Created new company on the list");
});
