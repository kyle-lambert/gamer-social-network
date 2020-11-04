import React from "react";
import "./login-form.scss";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import { useAuthContext } from "../../contexts/AuthContext";

const initState = {
  email: "",
  password: "",
};

function LoginForm(props) {
  const [state, setState] = React.useState(initState);
  const { loginUser } = useAuthContext();

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
    const { email, password } = state;

    if (email && password) {
      loginUser({ email, password });
      setState(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
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
