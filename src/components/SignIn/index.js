import React from 'react';
import './signin.css'

const SignIn = () => {
  return (
    <div className='SignIn container'>
      <h4 className="center green-text ">SignIn</h4>
      <form className="card-panel" >
        <div className="input-field">
          <input type="email" id='em'/>
          <label htmlFor="em">Email</label>
        </div>
        <div className="input-field">
          <input type="password" id='pw'/>
          <label htmlFor="pw">Password</label>
        </div>
        <button className="btn green accent-2">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
