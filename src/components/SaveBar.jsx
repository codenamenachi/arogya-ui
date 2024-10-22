import { Component } from "react";

class SaveBar extends Component {
  render() {
    return (
      <>
        <div className="col">
          <ul className="nav flex-column align-content-start">
            <li className="nav-item">
              <h5
                className="searchby-heading"
                style={{
                  fontStyle: "bold",
                  opacity: "70%",
                }}
              >
                Save for
              </h5>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-black searchby-label"
                onClick={() => {
                  this.props.setButtonClick("new");
                }}
              >
                New patient
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-black searchby-label"
                onClick={() => {
                  this.props.setButtonClick("old");
                }}
              >
                Existing patient
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default SaveBar;
