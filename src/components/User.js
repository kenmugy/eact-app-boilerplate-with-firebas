import React from 'react';

export default function User({ match }) {
  return (
    <div className='container'>
      <h1 className='pink-text'>Welcome {match.params.username}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ullam
        dolores nobis? Sint iure ad saepe, nostrum optio error accusamus fugit
        itaque ea praesentium quo nisi officia eligendi deserunt officiis!
      </p>
    </div>
  );
}
