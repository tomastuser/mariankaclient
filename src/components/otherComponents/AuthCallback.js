import React, { useEffect } from 'react';
import { useAuth } from 'react-use-auth';

const AuthCallback = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);
  return <h1>OVĚŘOVÁNÍ...</h1>;
};

export default AuthCallback;
