import React from 'react';
import app from './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';

const LoginButton = () => {
  const handleGoogleLogin = async () => {
  	const auth = getAuth();
  	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const idToken = await user.getIdToken();
    const res = await fetch(
    	'http://localhost:8000/api/users/register-social',
    	{
    		method: "POST",
    		body: JSON.stringify({"id_token": idToken})
    	}
	);
	console.log(res);
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginButton;
