import React, { useState } from "react";
import FormInput from "./FormInput";
import SaveBar from "./SaveBar";
import axios from "axios";
import NewSave from "./NewSave";
import OldSave from "./OldSave";

export const SavePage = () => {
  const [buttonClicked, setButtonClicked] = useState("");

  function setClicked(value) {
    setButtonClicked(value);
  }

  function getSavePageInfo() {
    return (
      <div className="col-4">
        <h5
          className="position-relative top-50 start-20"
          style={{
            backgroundColor: "#86d8b4",
            color: "#595959",
            fontStyle: "italic",
          }}
        >
          Save patient information for each consultation by
          <br />
          selecting one of the options on the left.
        </h5>
      </div>
    );
  }
  return (
    <div className="justify-self-start">
      <div className="row">
        <div className="col-1">
          <SaveBar setButtonClick={setButtonClicked} />
        </div>

        {buttonClicked === "new" ? (
          <div className="col-11">
            <NewSave />
          </div>
        ) : buttonClicked === "old" ? (
          <div className="col-11">
            <OldSave />
          </div>
        ) : (
          getSavePageInfo()
        )}
      </div>
    </div>
  );
};
