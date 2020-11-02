import React from "react";
import "./form-input.scss";

function FormInput({ label, error, success, handleChange, value, ...rest }) {
  return (
    <>
      <label className="form-input__label">{label}</label>
      <input
        {...rest}
        value={value}
        onChange={(e) => handleChange(e)}
        data-success={success ? true : false}
        data-error={error ? true : false}
        className="form-input__input"
      />
    </>
  );
}

export default FormInput;
