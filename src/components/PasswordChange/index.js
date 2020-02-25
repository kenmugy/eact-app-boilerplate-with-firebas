import React from 'react';

const PasswordChange = () => {
  return (
    <div className='PasswordChange'>
      <h1>Change Password</h1>
      <form className="card-panel" >
        <div className="input-field">
          <input type="password" id='pw'/>
          <label htmlFor="pw">Password</label>
        </div>
        <div className="input-field">
          <input type="password" id='cnpw'/>
          <label htmlFor="cnpw">Confirm NewPassword</label>
        </div>
        <button className="btn green accent-2">Update Password</button>
      </form>
    </div>
  );
};

export default PasswordChange;
