import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Moment from "moment";
import axios from "axios";

function DoConSearch() {
  const [data, setData] = useState();
  const [doc, setDoc] = useState();
  const [showResult, setShowResult] = useState(false);
  const [dataFound, setDataFound] = useState(false);
  const url = "http://localhost:8080/patient/doc/";
  const date_format = "DD MMM YYYY";

  const handleChange = (e) => {
    console.log(e);
    setDoc(e.target.value);
  };

  const fetchSearchResults = (e) => {
    e.preventDefault();
    console.log(url.concat(doc));
    axios
      .get(url.concat(doc), {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
        if (res.status === 200 && res.data.length > 0) {
          setShowResult(true);
        } else {
          setShowResult(false);
        }
      });
  };

  const formatDate = (date) => {
    Moment.locale("en");
    return Moment(date).format(date_format);
  };
  return (
    <>
      <div className="justify-self-start">
        <div className="row">
          <div className="col-10 text-start p-lg-3">
            <form onSubmit={fetchSearchResults}>
              <label className="pe-6">
                <h3>Enter Date of Consultation</h3>
              </label>
              <br />
              <input
                className="form-input m-2"
                type="date"
                placeholder="Date of Consultation"
                value={doc}
                onChange={doc !== null && handleChange}
              />
              <input type="submit" className="btn btn-secondary" />
              <br />
              {showResult && (
                <span className="small m-2">
                  PatientId | PatientName | DateOfConsultation
                </span>
              )}
              <div className="row">
                <div className="search-results">
                  <div className="col-8">
                    <div className=" ps-3 pt-4">
                      {showResult && data.length > 0 && (
                        <span className="small" style={{ color: "blue" }}>
                          {data.length} records found!
                        </span>
                      )}
                      {showResult &&
                        data.length > 0 &&
                        data.map((details, i) => {
                          return (
                            <div className="pt-2">
                              <button
                                class="btn btn-success text-start"
                                style={{ width: "80vw" }}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#collapseExample".concat(i)}
                              >
                                {showResult &&
                                  details.patientId !== null &&
                                  details.patientId !== "" && (
                                    <> {details.patientId} | </>
                                  )}
                                {showResult &&
                                  details.name !== null &&
                                  details.name !== "" && <>{details.name} | </>}
                                {showResult &&
                                  details.dateOfConsultation !== null &&
                                  details.dateOfConsultation !== "" && (
                                    <>
                                      {" "}
                                      {formatDate(details.dateOfConsultation)}
                                    </>
                                  )}
                              </button>
                              <div
                                className="collapse"
                                id={"collapseExample".concat(i)}
                              >
                                <div
                                  className="card card-body"
                                  style={{
                                    width: "80vw",
                                    backgroundColor: "#31664e",
                                  }}
                                >
                                  <div className="container text-light">
                                    <div className="row align-items-start">
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Id:{" "}
                                        </span>
                                        {" " + details.patientId}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Name:{" "}
                                        </span>
                                        {" " + details.name}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Date of Consultation:
                                        </span>
                                        {" " +
                                          formatDate(
                                            details.dateOfConsultation
                                          )}
                                      </div>
                                    </div>
                                    <div className="row align-items-center">
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Age:
                                        </span>{" "}
                                        {details.age}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Date of Birth:
                                        </span>
                                        {" " + formatDate(details.dateOfBirth)}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Email Id:
                                        </span>
                                        {" " + details.contactDetails.emailId}
                                      </div>
                                    </div>
                                    <div className="row align-items-end">
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Mobile Number:
                                        </span>
                                        {" " +
                                          details.contactDetails.mobileNumber}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Symptoms:
                                        </span>{" "}
                                        {" " + details.symptoms}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Existing Comobidities:
                                        </span>
                                        {" " + details.existingComorbidities}
                                      </div>
                                    </div>
                                    <div className="row align-items-end">
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Existing Medication:
                                        </span>
                                        {" " + details.existingMedication}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Diagnosis:
                                        </span>{" "}
                                        {" " + details.diagnosis}
                                      </div>
                                      <div className="col">
                                        <span className="fst-italic fw-bold lh-lg">
                                          Next consultation advised?
                                        </span>
                                        {" " + details.followUpRequired}
                                      </div>
                                    </div>
                                    <div className="row align-items-end lh-lg">
                                      <div className="col">
                                        <span className="fst-italic fw-bold">
                                          Next consultation on:
                                        </span>
                                        {" " + details.followUpSchedule}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoConSearch;
