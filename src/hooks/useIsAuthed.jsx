import React, {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

export default function useIsAuthed() {
  const [initializing, setInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    function onAuthStateChanged(userData) {
      if (userData) {
        setIsAuthenticated(true);
        setInitializing(false);
      }
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  return {initializing, isAuthenticated};
}
