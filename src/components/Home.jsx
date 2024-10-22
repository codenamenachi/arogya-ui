import React from "react";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-8">
            <div
              className="position-relative top-50 start-20"
              style={{
                backgroundColor: "#86d8b4",
                color: "#595959",
                fontStyle: "italic",
              }}
            >
              <h5>
                Click 'Save' to save patient details for every patient
                consultation, new or follow-up.
              </h5>
              <hr />
              <h5>
                Click 'Search' to search for existing patient details based on
                different parameters.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
