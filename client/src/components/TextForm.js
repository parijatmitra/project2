import React, { useState } from 'react';
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "Success");
    }
    const handleUpClick = ()=>{
        console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "Success");
    }
    const handleOnChange = (event)=>{
        console.log("handleOnChange");
        setText(event.target.value);
    }
    const clearText = ()=>{
        setText('');
        props.showAlert("Cleared Text", "Success");
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Upper Case</button>
    <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to Lower Case</button>
    <button type="button" className="btn btn-primary mx-3 my-3" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}} >
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words </p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:"Enter something to preview here"}</p>
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
