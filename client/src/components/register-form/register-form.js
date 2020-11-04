import React from "react";
import "./register-form.scss";

import FormInput from "../form-input/form-input";
import Button from "../../components/button/button";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function RegisterForm({ registerNewAccount }) {
  const [state, setState] = React.useState(initState);

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = state;

    if (firstName && lastName && email && password) {
      registerNewAccount({ firstName, lastName, email, password });
      setState(initState);
    } else {
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
      <div className="register-form__submit">
        <Button type="submit">Create Account</Button>
      </div>
    </form>
  );
}

export default RegisterForm;
