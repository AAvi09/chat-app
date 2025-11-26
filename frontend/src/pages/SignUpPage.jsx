import { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [signUp, isSigningUp] = useStoreAuth((state) => [
    state.signUp,
    state.isSigningUp,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
  };
  return <div>SignUpPage</div>;
};

export default SignUpPage;
