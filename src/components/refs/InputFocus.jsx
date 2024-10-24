import React, { useRef, useEffect } from "react";

const LoginPage = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Automatically focus on the username input when the component mounts
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., form validation, API call)
    console.log("Logging in with:", {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            ref={usernameRef}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
