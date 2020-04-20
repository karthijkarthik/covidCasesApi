const Cases = require("../model/appModel.js");

exports.createNewCase = (req, res) => {
  if (Object.keys(req.body).length === 0) {
  	console.log('Error :', "Request can not be empty!");
    res.status(400).send({
      message: "Request can not be empty!"
    });
    return;
  }

  // Create a Customer
  const newcase = new Cases({
    state: req.body.state,
    totalaffectedcount: req.body.totalaffectedcount,
    todaysCount: req.body.todaysCount,
    recoveredCount: req.body.recoveredCount,
    deathCount: req.body.deathCount
  });

  Cases.createCase(newcase, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Case."
      });
    else res.send(data);
  });
};

exports.findAllCases = (req, res) => {
  Cases.getAllCases((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cases."
      });
    else res.send(data);
  });
};

exports.findCaseById = (req, res) => {
  Cases.getCaseById(req.params.caseId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Case with id ${req.params.caseId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Case with id " + req.params.caseId
        });
      }
    } else res.send(data);
  });
};

exports.modifyCaseById = (req, res) => {
  if (Object.keys(req.body).length === 0) {
  	console.log('Error :', "Request can not be empty!");
    res.status(400).send({
      message: "Request can not be empty!"
    });
  }

  Cases.updateCaseById(
    req.params.caseId,
    new Cases(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Case with id ${req.params.caseId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating case with id " + req.params.caseId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteCaseById = (req, res) => {
  Cases.removeCaseById(req.params.caseId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found case with id ${req.params.caseId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete case with id " + req.params.caseId
        });
      }
    } else res.send({ message: `Case was deleted successfully!` });
  });
};
