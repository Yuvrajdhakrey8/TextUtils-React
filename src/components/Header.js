import React from 'react'
// import { Link } from 'react-router-dom'

function header(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} >
        <div className="container-fluid" >
          {/* <Link className="navbar-brand" to="/">Text Utils</Link> */}
          <a className="navbar-brand" href="#">Text Utils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/About">About</Link> */}
              </li>
            </ul>
            <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleBlue} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === "light" ? "dark" : "light"} mode`}</label>
            </div>

            <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleGreen} role="switch" id="flexSwitchCheckDefault1" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">{`Enable ${props.mode === "light" ? "Green" : "light"} mode`}</label>
            </div>

            <div className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleOrange} role="switch" id="flexSwitchCheckDefault2" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">{`Enable ${props.mode === "light" ? "Orange" : "light"} mode`}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default header