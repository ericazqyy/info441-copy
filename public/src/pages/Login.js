import React from 'react';

const Login = () => (
  <div className="login-page">
    <img src="../logo512.png" alt="Wordle 1v1" />
    <button>Login</button>
    <button>Register</button>
    <div className="azure-auth-interface">
      {/* connect to azure login */}
    </div>
  </div>
);

export default Login;
