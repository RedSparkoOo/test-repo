import React, { useState } from 'react';

export default function TextUtils(props) {
  const [state, setState] = useState('Enter words here');

  const Uppercase = () => {
    // Update the state to the uppercase version of the current state
    setState(state.toUpperCase());
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.Heading}</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={state} // Set the value of the textarea to the state
          onChange={(e) => setState(e.target.value)} // Update the state when the textarea changes
        ></textarea>

        <button type="button" className="btn btn-primary" onClick={Uppercase}>Click</button>
      </div>
    </div>
  );
}
