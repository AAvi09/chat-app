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
  return <div className="min-h-screen grid lg:grid-cols-2"></div>;
};

export default SignUpPage;
