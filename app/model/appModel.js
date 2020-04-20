const sql = require('./db.js');

// constructor
const Cases = function(covidcase) {
  this.state= covidcase.state;
  this.totalaffectedcount = covidcase.totalaffectedcount;
  this.todaysCount = covidcase.todaysCount;
  this.recoveredCount = covidcase.recoveredCount;
  this.deathCount = covidcase.deathCount;
  this.updated_on = new Date();
};

Cases.createCase = (newCase, result) => {
  sql.query("INSERT INTO covidcases SET ?", newCase, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created case: ", { id: res.insertId });
    result(null, { id: res.insertId });
  });
};

Cases.getCaseById = (caseId, result) => {
  sql.query(`SELECT * FROM covidcases WHERE id = ${caseId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found case: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Case with the id
    result({ kind: "not_found" }, null);
  });
};

Cases.getAllCases = result => {
  sql.query("SELECT * FROM covidcases", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("cases: ", res);
    result(null, res);
  });
};

Cases.updateCaseById = (id, covidcase, result) => {
  sql.query(
    "UPDATE covidcases SET todaysCount = ?, recoveredCount = ?, deathCount = ?, updated_on = ? WHERE id = ?",
    [covidcase.todaysCount, covidcase.recoveredCount, covidcase.deathCount, new Date(), id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated case: ", { id: id });
      result(null, { id: id });
    }
  );
};

Cases.removeCaseById = (id, result) => {
  sql.query("DELETE FROM covidcases WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted case with id: ", id);
    result(null, res);
  });
};

module.exports = Cases;