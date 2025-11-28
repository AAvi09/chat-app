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
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Image Section */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12"></div>
    </div>
  );
};

export default SignUpPage;
