import { SafeAreaView, Text, Linking } from 'react-native';
import { useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { useEffect } from 'react';
import HomePage from './(tabs)/home';
import LoginPage from './login';
import { useRouter } from 'expo-router';

const mainScreen = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = FIREBASE_AUTH.currentUser;
    setUser(currentUser);
  }, []);
  if (user) {
    return router.replace('./(tabs)/home')
  } else {
    return (<LoginPage />)
  }
};

export default mainScreen;