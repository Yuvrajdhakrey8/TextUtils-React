import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("")

    // UpperCase
    function upperCase() {
        if (text.length === 0) {
            props.showAlert("Enter Some Text in TextBox", "danger")
        }
        let newText = text.toUpperCase();
        setText(newText)
    }

    // LowerCase
    function LowerCase() {
        if (text.length === 0) {
            props.showAlert("Enter Some Text in TextBox", "danger")
        }
        let newText = text.toLowerCase();
        setText(newText);
    }

    // ClearBtn
    function ClearText() {
        let newText = ("");
        setText(newText);
    }

    // SentenceCase
    function SentenceCase() {
        if (text.length === 0) {
            props.showAlert("Enter Some Text in TextBox", "danger")
        }
        let newText1 = text.toLowerCase();
        let newText2 = newText1.split('. ')
        let newText3 = newText2.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
        let newText = newText3.join('. ');
        setText(newText);
    }

    // Copy to Clipboard
    function handelCopy() {
        if(text.length === 0){
            props.showAlert("Enter Some Text in TextBox","danger")
        }else{
            props.showAlert("Copied to clipBoard","success")
            }

        let newText = document.getElementById("myBox");
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }


    // Style Variable
    let myStyle = {
        backgroundColor: props.mode === "light" ? "white" : props.txtArea,
        color: props.mode === "light" ? "black" : "white",
    }

    // onChange function
    function onChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <div style={{ color: props.mode === "light" ? "black" : "white" }}>
                <div className='"d-flex flex-column'>
                    <h3 className='float-start'>{props.heading}</h3>
                    <div className="mb-3" >
                        <textarea className="form-control" style={myStyle} id="myBox" rows="9" value={text} onChange={onChange}></textarea>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <button className={`btn btn-${props.btnColor} mx-2`} onClick={upperCase}>Convert to UPPERCASE</button>
                        <button className={`btn btn-${props.btnColor} mx-2`} onClick={LowerCase}>Convert to lowercase</button>
                        <button className={`btn btn-${props.btnColor} mx-2`} onClick={SentenceCase}>SentenceCase</button>
                        <button className={`btn btn-${props.btnColor} mx-2`} onClick={handelCopy}>Copy</button>
                        <button className={`btn btn-${props.btnColor} mx-2`} onClick={ClearText}>ClearText</button>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-start my-3 mx-3">
                    <h2>Your Text Summary</h2>
                    <p>{text.split(' ').length -1} words and {text.length} charaters</p>
                    <p>{0.008 * text.split(' ').length} Minuts to read</p>
                    <h3>Preview</h3>
                    <p className='text-wrap text-start'>{text.length > 0 ? text : "Please enter Text Above to Preview it here"}</p>
                </div>
            </div>
            
        </>
    )
}
