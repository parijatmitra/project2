import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleUpClick = ()=>{
        console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("handleOnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Upper Case</button>
    <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to Lower Case</button>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words {text.length} letters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter Text here"
}
