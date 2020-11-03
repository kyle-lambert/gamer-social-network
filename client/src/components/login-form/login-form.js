import React from "react";
import "./login-form.scss";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

function LoginForm(props) {
  const [state, setState] = React.useState({
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
    <form className="login-form">
      <div className="login-form__email">
        <FormInput
          label="Email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          type="email"
          placeholder="mark.zuckerburg@facebook.com"
        />
      </div>
      <div className="login-form__password">
        <FormInput
          label="Password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          type="password"
        />
      </div>
      <div className="login-form__submit">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
