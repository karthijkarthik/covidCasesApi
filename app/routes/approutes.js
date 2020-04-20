'use strict';
module.exports = app => {
  const covidcases = require("../controller/appController.js");

  // Create a new Covid Case
  app.post("/cases", covidcases.createNewCase);

  // Retrieve all Covid Cases
  app.get("/cases", covidcases.findAllCases);

  // Retrieve a single Covid Case with caseId
  app.get("/cases/:caseId", covidcases.findCaseById);

  // Update a Covid Case with caseId
  app.put("/cases/:caseId", covidcases.modifyCaseById);

  // Delete a Covid Case with caseId
  app.delete("/cases/:caseId", covidcases.deleteCaseById);
};
