import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Alert, StyleSheet, Image, Text, Pressable } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      router.replace('/(tabs)/home');
    } catch (error: any) {
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <Image source={require('./my-icon.png')} />; */}
      <Image style={styles.image} source={{ uri: 'https://img.freepik.com/free-vector/people-welcoming-concept-with-foliage-background_52683-23790.jpg?w=826&t=st=1684686509~exp=1684687109~hmac=09e659da92045e399bc4fa9b2a57df039f7d8c1d7073ab0b36b41cf0d5dcbafc' }} />
      <View style={styles.container}>
        <Text style={styles.heading}>Masuk</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          // placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.textInput}
          // placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={signIn}>
          <Text>LOGIN</Text>
        </Pressable>
        {/* <Button style={styles.button} title="Login" onPress={signIn} /> */}
        <Text>Belum mempunyai akun ?
          <Link href="/register" asChild>
            <Pressable>
              <Text>Buat akun</Text>
            </Pressable>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "red",
    padding: 0,
    margin: 0
  },
  container: {
    relative: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    height: "100%"
  },
  image: {
    width: "100%",
    height: 270
  },
  heading: {
    fontSize: 28,
    fontWeight: "800"
  },
  label: {
    fontSize: 20
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "grey",
    fontSize: 16,
    borderRadius: 15
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
    borderRadius: 15
  }
});