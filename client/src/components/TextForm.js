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
<div>
    
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
    <button type="button" className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lower Case</button>
</div>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter Text here"
}
