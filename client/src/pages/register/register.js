import React from "react";
import "./register.scss";

import LandingLayout from "../../layout/landing-layout/landing-layout";
import RegisterForm from "../../components/register-form/register-form";

function Register(props) {
  return (
    <LandingLayout register>
      <div className="register">
        <RegisterForm />
      </div>
    </LandingLayout>
  );
}

export default Register;
