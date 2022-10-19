import React from 'react';
import '../App.css';

export default function User({ user }) {
  return (
    <div className="list">
      <h3>
        Name: {user.name}, Age: {user.age}, USername: {user.username}
      </h3>
      <p>Mogodg_ID: {user._id}</p>
    </div>
  );
}
