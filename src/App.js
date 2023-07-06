import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { useState } from 'react';
// import About from './components/About'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [btnColor, setBtnColor] = useState("info")
  const [txtArea, settxtArea] = useState("white")

  // Toggle Function
  function toggleBlue() {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white"
      setBtnColor("info")
      showAlert("Light mode has been Enabled.", "success")
    } else {
      setMode("dark")
      setBtnColor("primary")
      document.body.style.backgroundColor = "#00274a"
      settxtArea("#0a4a82")
      showAlert("Dark mode has been Enabled.", "success")
    }
  }

  // toggleGreen
  function toggleGreen() {
    if (mode === "success") {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been Enabled.", "success")
      setBtnColor("info")
    } else {
      setMode("success")
      document.body.style.backgroundColor = "#0a6a2a"
      settxtArea("#0a8211")
      setBtnColor("success")
      showAlert("Green mode has been Enabled.", "success")
    }
  }

  // togglePurple
  function toggleOrange() {
    if (mode === "warning") {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been Enabled.", "success")
      setBtnColor("info")
    } else {
      setMode("warning")
      document.body.style.backgroundColor = "#c29408"
      settxtArea("#9e990e")
      setBtnColor("warning")
      showAlert("Orange mode has been Enabled.", "success")
    }
  }

  // Alert Function
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  return (
    // <Router>
    <div className="App">
      <Header mode={mode} toggleBlue={toggleBlue} toggleGreen={toggleGreen} toggleOrange={toggleOrange} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />}/>  */}

        {/* <Route path="/" element={<TextForm showAlert={showAlert} btnColor={btnColor} heading="Enter your text to analyze" mode={mode} txtArea={txtArea} />}/>  */}

        <TextForm showAlert={showAlert} btnColor={btnColor} heading="Enter your text to analyze" mode={mode} txtArea={txtArea} />

        {/* </Routes> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
