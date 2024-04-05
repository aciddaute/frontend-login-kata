import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../components/SignUpForm";

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <main className="signup-container">
      <SignUpForm onSuccess={() => navigate("/success")} />
    </main>
  );
};
