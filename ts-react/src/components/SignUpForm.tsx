import { FormEvent, useEffect, useState } from "react";
import "./SignUpForm.css";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { translateError } from "../utils/translateError.js";
import { login } from "../useCases/login";
import { FormField } from "./FormField";

type SignUpFormProps = {
  onSuccess: () => void;
};

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(email, password)
      .then(onSuccess)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  return (
    <form className="signup-form" onSubmit={handleOnSubmit}>
      <Title>Sign up with email</Title>
      <p>Enter your email address to create an account.</p>

      <FormField
        id="email"
        type="email"
        labelText="Your email"
        value={email}
        onChange={setEmail}
      />
      <FormField
        id="password"
        type="password"
        labelText="Your password"
        value={password}
        onChange={setPassword}
      />
      {errorMessage && <p>{translateError(errorMessage)}</p>}
      <Button title="Signup" />
    </form>
  );
};
