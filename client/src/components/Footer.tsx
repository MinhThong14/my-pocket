import React from 'react';
import {
  isLoggedIn,
  getUsername,
  handleLogout as logout,
} from '../services/auth';

function Footer() {
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return isLoggedIn() ? (
    <div className="fixed bottom-0 w-full text-sm font-semibold text-center p-4 bg-white border-t">
      Signed in as <span className="text-blue-500">{getUsername()}</span>.{' '}
      <button
        type="button"
        onClick={handleLogout}
        className="font-semibold text-black hover:text-blue-500"
      >
        Click here to sign out.
      </button>
    </div>
  ) : (
    <div className="fixed bottom-0 w-full text-sm font-semibold text-center p-4 bg-white border-t">
      <span className="block sm:inline">
        Made by{' '}
        <a
          href="https://github.com/MinhThong14"
          className="font-semibold text-blue-500 hover:text-blue-700"
        >
          Tom Mai.{' '}
        </a>
      </span>
      <span className="block sm:inline">
        Fork me on{' '}
        <a
          href="https://github.com/MinhThong14/my-pocket"
          className="font-semibold text-blue-500 hover:text-blue-700"
        >
          GitHub
        </a>
      </span>
    </div>
  );
}

export default Footer;
