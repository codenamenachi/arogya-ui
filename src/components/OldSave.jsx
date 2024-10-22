import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import SaveBar from "./SaveBar";
import axios from "axios";

export const OldSave = () => {
  const [age, setAge] = useState(0);
  const [data, setData] = useState();
  const [postData, setPostData] = useState();
  const [mobile, setMobile] = useState();
  let [dataSavedFlag, setDataSavedFlag] = useState(false);
  // let [followUpApptReq, setFollowUpApptReq] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const saveDetailsUrl = "http://localhost:8080/patient/new";
  const fetchDetailsFromMobUrl = "http://localhost:8080/patient/mobile/";

  function HandleMobInputChange(e) {
    e.preventDefault();
    setMobile(e.target.value);
  }

  function handleChange(e) {
    e.preventDefault();

    const today = new Date();
    const birthdateDate = new Date(e.target.value);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  }

  useEffect(() => {
    // console.log(postData + "-" + dataSavedFlag);
    postData ? setDataSavedFlag(true) : setDataSavedFlag(false);
  }, [postData, dataSavedFlag]);

  function SaveData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    value.name = data.name;
    value.age = data.age;
    value.dateOfBirth = data.dateOfBirth;
    value.contactDetails = data.contactDetails;
    value.symptoms = formData.get("symptoms");
    value.existingComorbidities = formData.get("existingComorbidities");
    value.existingMedication = formData.get("existingMedication");
    value.diagnosis = formData.get("diagnosis");
    value.followUpRequired = formData.get("followUpRequired");
    value.followUpSchedule = formData.get("followUpSchedule");

    axios
      .post(saveDetailsUrl, {
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
        },
        value,
      })
      .then((res) => {
        if (res.status === 204) {
          // console.log(res);
          setPostData(true);
          // console.log(dataSavedFlag);
        } else {
          setPostData((prev) => false);
        }
      })
      .catch((err) => {
        console.log(err);
        setPostData((prev) => false);
      });
  }

  function FetchDetailsFromMobNum(e) {
    e.preventDefault();
    // if (e.target.value == null || e.target.value == "") {
    //   alert("Enter valid mobile number");
    // }
    axios
      .get(fetchDetailsFromMobUrl.concat(mobile), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((res) => {
        setData(res.data);
        if (res.status === 200 && res.data !== null) {
          setData(res.data);
          setNoDataFound(false);
        } else {
          setNoDataFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const handleSelectTrue = (e) => {
  //   setFollowUpApptReq(e.target.value);
  //   console.log("follow true? " + followUpApptReq);
  // };

  // const handleSelectFalse = (e) => {
  //   setFollowUpApptReq(e.target.value);
  //   console.log("follow false? " + followUpApptReq);
  // };

  return (
    <div className="justify-self-start">
      <div className="row">
        {/* <div className="col-1"><SaveBar /> </div> */}
        <div className="col-8">
          <div className="save-page align-items-start">
            <span className="save-page-text">
              Enter patient and consultation details below
            </span>
            <form onSubmit={SaveData}>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-auto">
                      <FormInput
                        id="mobileNumber"
                        label="Mobile number"
                        type="text"
                        required="true"
                        value={mobile}
                        onChange={HandleMobInputChange}
                      />
                      {noDataFound && (
                        <span className="small" style={{ color: "blue" }}>
                          No records found
                        </span>
                      )}
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-primary"
                        label="Submit"
                        type="button"
                        onClick={FetchDetailsFromMobNum}
                      >
                        Get patient
                        <br />
                        details
                      </button>
                    </div>
                  </div>
                  <FormInput
                    id="fullName"
                    label="Full name"
                    type="text"
                    disabled="true"
                    value={!noDataFound && data != null ? data.name : ""}
                  />
                  <div className="form-group">
                    <label>Date of birth</label>
                    <input
                      id="dob"
                      className="form-input m-2"
                      name="dateOfBirth"
                      type="date"
                      onChange={handleChange}
                      disabled="true"
                      value={
                        !noDataFound && data != null ? data.dateOfBirth : ""
                      }
                    />
                  </div>
                  <div>
                    <label style={{ paddingRight: "10px" }}>Age</label>
                    <button
                      className="btn btn-secondary"
                      id="age"
                      label="age"
                      type="text"
                      disabled
                    >
                      {!noDataFound && data != null ? data.age : "0"}
                    </button>
                  </div>
                  <FormInput
                    id="emailId"
                    label="Email ID"
                    type="text"
                    disabled="true"
                    value={
                      !noDataFound && data != null
                        ? data.contactDetails.emailId
                        : ""
                    }
                  />
                  <div className="text-area">
                    <label style={{ paddingRight: "10px" }}>Symptoms</label>
                    <textarea
                      className="form-input"
                      id="symptoms"
                      name="symptoms"
                      label="symptoms"
                      placeholder="Mention the symptoms of the patient here"
                      required="true"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-area">
                    <label style={{ paddingRight: "10px" }}>
                      existingComorbidities
                    </label>
                    <textarea
                      className="form-input"
                      id="existingComorbidities"
                      name="existingComorbidities"
                      label="existingComorbidities"
                      placeholder="Mention the existing medical conditions of the patient here"
                    />
                  </div>
                  <div className="text-area form-group">
                    <label style={{ paddingRight: "10px" }}>
                      existingMedication
                    </label>
                    <textarea
                      className="form-input"
                      id="existingMedication"
                      name="existingMedication"
                      label="existingMedication"
                      placeholder="Medications being taken"
                    />
                  </div>
                  <div className="text-area form-group">
                    <label style={{ paddingRight: "10px" }}>diagnosis</label>
                    <textarea
                      className="form-input"
                      id="diagnosis"
                      name="diagnosis"
                      label="diagnosis"
                      placeholder="Current consultation diagnosis"
                      required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label>Follow up required?</label>
                    <>
                      <input
                        id="followUpRequired"
                        name="followUpRequired"
                        className="m-2"
                        value={true}
                        type="radio"
                        // onClick={handleSelectTrue}
                      />
                      True
                      <input
                        id="followUpRequired"
                        name="followUpRequired"
                        className="m-2"
                        value={false}
                        type="radio"
                        defaultChecked
                        // onClick={handleSelectFalse}
                      />
                      False
                    </>
                  </div>
                  <div className="form-group">
                    <label>Follow up schedule adviced</label>
                    <input
                      id="followUpSchedule"
                      name="followUpSchedule"
                      className="form-input m-2"
                      type="datetime-local"
                      // disabled={followUpApptReq}
                    />
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="dataSaved"
                  tabindex="-1"
                  aria-labelledby="dataSavedLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div
                        className="modal-header"
                        style={{ backgroundColor: "#86d8b4" }}
                      >
                        <h5 className="modal-title" id="dataSavedLabel">
                          Success!
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Patient consultation details saved
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      className="btn m-3 btn-secondary"
                      label="clear"
                      type="reset"
                    >
                      Clear
                    </button>
                    <button
                      className="btn btn-primary"
                      label="Submit"
                      type="submit"
                      data-bs-toggle={dataSavedFlag ? "modal" : null}
                      data-bs-target={dataSavedFlag ? "#dataSaved" : null}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldSave;
