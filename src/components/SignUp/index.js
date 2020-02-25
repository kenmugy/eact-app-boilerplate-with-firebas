import React from 'react';
import './signup.css'

const SignUp = () => {
  return (
    <div className='SignUp'>
      <h1>SignUp</h1>
      <form className="card-panel">
        <div className="input-field">
          <input type="email" id='em'/>
          <label htmlFor="em">Email</label>
        </div>
        <div className="input-field">
          <input type="password" id='pw'/>
          <label htmlFor="pw">Password</label>
        </div>
        <div className="input-field">
          <input type="password" id='cpw'/>
          <label htmlFor="cpw">Confirm Password</label>
        </div>
        <button className="btn green accent-2">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
