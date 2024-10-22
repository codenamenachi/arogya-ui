import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PidSearch from "./PidSearch";
import MnSearch from "./MnSearch";
import DoConSearch from "./DoConSearch";
import NcdSearch from "./NcdSearch";

export const SearchPage = () => {
  const [buttonClicked, setButtonClicked] = useState("");

  function getSearchPageInfo(text) {
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
          {text === "ncd" ? (
            <>
              Search by Next Consultation date
              <br />
              is coming soon
            </>
          ) : (
            <>
              Patient data can be fetched based on
              <br />
              one of the parameters on the left.
            </>
          )}
        </h5>
      </div>
    );
  }

  return (
    <>
      <div className="justify-self-start">
        <div className="row">
          <div className="col-1">
            <SearchBar setButtonClick={setButtonClicked} />
          </div>
          {buttonClicked === "pid" ? (
            <div className="col-11">
              <PidSearch />
            </div>
          ) : buttonClicked === "mn" ? (
            <div className="col-11">
              <MnSearch />
            </div>
          ) : buttonClicked === "docon" ? (
            <div className="col-11">
              <DoConSearch />
            </div>
          ) : buttonClicked === "ncd" ? (
            getSearchPageInfo(buttonClicked)
          ) : (
            getSearchPageInfo("")
          )}
        </div>
      </div>
    </>
  );
};
