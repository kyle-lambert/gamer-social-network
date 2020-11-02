import React from "react";
import "./register-form.scss";

import FormInput from "../form-input/form-input";

function RegisterForm(props) {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form className="register-form">
      <div className="register-form__fname">
        <FormInput
          label="First Name"
          name="firstName"
          value={state.firstName}
          handleChange={handleChange}
          type="text"
          placeholder="Mark"
        />
      </div>
      <div className="register-form__lname">
        <FormInput
          label="Last Name"
          name="lastName"
          value={state.lastName}
          handleChange={handleChange}
          type="text"
          placeholder="Zuckerburg"
        />
      </div>
      <div className="register-form__email">
        <FormInput
          label="Email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          type="email"
          placeholder="mark.zuckerburg@facebook.com"
        />
      </div>
      <div className="register-form__password">
        <FormInput
          label="Password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          type="password"
        />
      </div>
      <div className="register-form__submit">{/* Submit button */}</div>
    </form>
  );
}

export default RegisterForm;
