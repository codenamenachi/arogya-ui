import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Moment from "moment";
import axios from "axios";

function NcdSearch() {
  const [data, setData] = useState();
  const [pid, setPid] = useState();
  const [showResult, setShowResult] = useState(false);
  const url = "http://localhost:8080/patient/pid/";
  const date_format = "DD MMM YYYY";

  const handleChange = (e) => {
    console.log(e);
    setPid(e.target.value);
  };

  const fetchSearchResults = (e) => {
    e.preventDefault();
    axios
      .get(url.concat(pid), {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
        if (res.status === 201 && res.data !== null) {
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
          <div className="col-1 align-self-start">
            <SearchBar />
          </div>
          <div className="col-10 text-start p-lg-3">
            <form>
              <label className="pe-6">
                <h3>Enter Next Consultation Date</h3>
              </label>
              <br />
              <input
                className="form-input m-2"
                type="date"
                placeholder="Next Consultation date"
              />
              <input type="submit" className="btn btn-secondary" />
              <div className="row">
                <div className="search-results">
                  {showResult && data !== null && (
                    <div className="col-8">
                      <div className=" ps-lg-3 pt-lg-5">
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
                                      <>
                                        <span>PatientId:</span>{" "}
                                        {details.patientId} ||{" "}
                                      </>
                                    )}
                                  {showResult &&
                                    details.name !== null &&
                                    details.name !== "" && (
                                      <>
                                        <span>Patient Name:</span>{" "}
                                        {details.name} ||{" "}
                                      </>
                                    )}
                                  {showResult &&
                                    details.dateOfConsultation !== null &&
                                    details.dateOfConsultation !== "" && (
                                      <>
                                        <span>Date of consultation:</span>{" "}
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
                                    style={{ width: "80vw" }}
                                  >
                                    {JSON.stringify(details)}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NcdSearch;
