import express from "express";

const webServer = express();
const port = 3001;

const companyList = [
  {
    companyId: "comp-01",
    name: "Mock Company 01",
    taxId: "tax-000",
    employees: [],
  },
];

webServer.use(express.json());

webServer.listen(port, "127.0.0.1", () => {
  console.log(`Server has started at 127.0.0.1:${port}`);
});

webServer.get("/", (req, res) => {
  res.send("Hello, World!");
});

webServer.get("/company", (req, res) => {
  res.send(companyList);
});

webServer.post("/company", (req, res) => {
  const name = req.body.name;
  const taxId = req.body.taxId;
  const companyId = companyList.length + 1;
  const employees = [];
  const newCompany = {
    companyId: `comp-0${companyId}`,
    name: name,
    taxId: taxId,
  };
  companyList.push(newCompany);
  res.send("Success: Created new company on the list");
});
