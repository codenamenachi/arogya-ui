import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Moment from "moment";
import axios from "axios";

function MnSearch() {
  const [data, setData] = useState();
  const [mobile, setMobile] = useState();
  const [showResult, setShowResult] = useState(false);
  const url = "http://localhost:8080/patient/mobile/";
  const date_format = "DD MMM YYYY";

  const handleChange = (e) => {
    console.log(e);
    setMobile(e.target.value);
  };

  const fetchSearchResults = (e) => {
    e.preventDefault();
    axios
      .get(url.concat(mobile), {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
        if (res.status === 200 && res.data !== null) {
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
                <h3>Enter MobileNumber</h3>
              </label>
              <br />
              <input
                className="form-input m-2"
                type="text"
                placeholder="Mobile number"
                name="mobile"
                value={mobile}
                onChange={mobile !== null && handleChange}
              />
              <input type="submit" className="btn btn-secondary" />
            </form>
            {showResult && (
              <span className="small m-2 fw-bold">
                PatientId | PatientName | DateOfConsultation
              </span>
            )}
            <div className="row">
              <div className="search-results">
                <div className="col-8">
                  <div className=" ps-3 pt-4">
                    {showResult && data !== null && (
                      <>
                        <span className="small" style={{ color: "blue" }}>
                          1 record found!
                        </span>
                        <button
                          className="btn btn-success text-start"
                          style={{ width: "80vw" }}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                        >
                          {showResult &&
                            data.patientId !== null &&
                            data.patientId !== "" && <>{data.patientId} | </>}
                          {showResult &&
                            data.name !== null &&
                            data.name !== "" && <>{data.name} | </>}
                          {showResult &&
                            data.dateOfConsultation !== null &&
                            data.dateOfConsultation !== "" && (
                              <>{formatDate(data.dateOfConsultation)}</>
                            )}
                        </button>
                        <div className="collapse" id="collapseExample">
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
                                  {" " + data.patientId}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Name:{" "}
                                  </span>
                                  {" " + data.name}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Date of Consultation:
                                  </span>
                                  {" " + formatDate(data.dateOfConsultation)}
                                </div>
                              </div>
                              <div className="row align-items-center">
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Age:
                                  </span>{" "}
                                  {data.age}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Date of Birth:
                                  </span>
                                  {" " + formatDate(data.dateOfBirth)}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Email Id:
                                  </span>
                                  {" " + data.contactDetails.emailId}
                                </div>
                              </div>
                              <div className="row align-items-end">
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Mobile Number:
                                  </span>
                                  {" " + data.contactDetails.mobileNumber}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Symptoms:
                                  </span>{" "}
                                  {" " + data.symptoms}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Existing Comobidities:
                                  </span>
                                  {" " + data.existingComorbidities}
                                </div>
                              </div>
                              <div className="row align-items-end">
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Existing Medication:
                                  </span>
                                  {" " + data.existingMedication}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Diagnosis:
                                  </span>{" "}
                                  {" " + data.diagnosis}
                                </div>
                                <div className="col">
                                  <span className="fst-italic fw-bold lh-lg">
                                    Next consultation advised?
                                  </span>
                                  {" " + data.followUpRequired}
                                </div>
                              </div>
                              <div className="row align-items-end lh-lg">
                                <div className="col">
                                  <span className="fst-italic fw-bold">
                                    Next consultation on:
                                  </span>
                                  {" " + data.followUpSchedule}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MnSearch;
