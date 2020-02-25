import React from 'react';

const PasswordForget = () => {
  return (
    <div className='PasswordForget'>
      <h1>Reset Password</h1>
      <form className="card-panel" >
        <div className="input-field">
          <input type="email" id='em'/>
          <label htmlFor="em">Email Address</label>
        </div>
        
        <button className="btn green accent-2">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordForget;
