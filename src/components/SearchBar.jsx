import { Component } from "react";

class SearchBar extends Component {
  state = {};
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
                Search by
              </h5>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-black searchby-label"
                onClick={() => {
                  this.props.setButtonClick("pid");
                }}
              >
                PatientId
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-black searchby-label"
                onClick={() => {
                  this.props.setButtonClick("mn");
                }}
              >
                Mobile number
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-black searchby-label"
                onClick={() => {
                  this.props.setButtonClick("docon");
                }}
              >
                Date of consultation
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-black searchby-label disable-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Coming soon"
                // href="/ncd"
                onClick={() => {
                  this.props.setButtonClick("ncd");
                }}
              >
                Next consutation date
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default SearchBar;
