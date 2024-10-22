import React, { useState } from "react";
import FormInput from "./FormInput";
import SaveBar from "./SaveBar";
import axios from "axios";

export const NewSave = () => {
  const [age, setAge] = useState(0);
  const [dupErrMsg, setDupErrMsg] = useState("");
  const [dataSavedFlag, setDataSavedFlag] = useState(true);
  const [showDupErrMsg, setShowDupErrMsg] = useState(false);
  const url = "http://localhost:8080/patient/new";

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

  const saveData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    value.name = value.firstName + " " + value.lastName;
    value.age = age;
    const contactDetails = {
      mobileNumber: data.get("mobileNumber"),
      emailId: data.get("emailId"),
    };
    value.contactDetails = contactDetails;
    value.symptoms = data.get("symptoms");
    value.existingComorbidities = data.get("existingComorbidities");
    value.existingMedication = data.get("existingMedication");
    value.diagnosis = data.get("diagnosis");
    value.followUpRequired = data.get("followUpRequired");
    value.followUpSchedule = data.get("followUpSchedule");

    console.log(value);

    axios
      .post(url, {
        headers: {
          Accept: "application/json",
          ContentType: "application/json",
        },
        value,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          setDataSavedFlag(true);
        } else {
          alert("Something went wrong. Try again");
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.toString().includes("duplicate")) {
          console.log("msg set");
          alert("Mobile Number exists!");
        }
      });
  };

  return (
    <div className="justify-self-start">
      <div className="row">
        {/* <div className="col-1">
          <SaveBar />
        </div> */}
        <div className="col-8">
          <div className="save-page align-items-start">
            <span className="save-page-text">Enter patient details below</span>
            <form onSubmit={saveData}>
              <div className="row">
                <div className="col-6">
                  <FormInput
                    id="firstName"
                    label="First name"
                    type="text"
                    required="true"
                  />
                  <FormInput
                    id="lastName"
                    label="Last name"
                    type="text"
                    required="true"
                  />
                  <div className="form-group">
                    <label>Date of birth</label>
                    <input
                      id="dob"
                      className="form-input m-2"
                      name="dateOfBirth"
                      type="date"
                      onChange={handleChange}
                      required="true"
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
                      {age}
                    </button>
                  </div>
                  <div>
                    <FormInput
                      id="mobileNumber"
                      label="Mobile number"
                      type="text"
                      required="true"
                    />
                  </div>
                  <FormInput id="emailId" label="Email ID" type="text" />
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
                      />
                      True
                      <input
                        id="followUpRequired"
                        name="followUpRequired"
                        className="m-2"
                        value={false}
                        type="radio"
                        defaultChecked
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
                    />
                  </div>
                </div>
                <div
                  class="modal fade"
                  id="dataSaved"
                  tabindex="-1"
                  aria-labelledby="dataSavedLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div
                        class="modal-header"
                        style={{ backgroundColor: "#86d8b4" }}
                      >
                        <h5 class="modal-title" id="dataSavedLabel">
                          Success!
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        Patient consultation details saved
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
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

export default NewSave;
