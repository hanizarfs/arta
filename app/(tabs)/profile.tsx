import { SafeAreaView, View, ScrollView, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const auth = FIREBASE_AUTH;

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = FIREBASE_AUTH.currentUser;
    setUser(currentUser);
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      router.replace('/');
    }).catch(err => console.log(err.message));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "yellow" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.heading}>PROFIL</Text>
          <Text style={styles.heading}>{user && user.email}</Text>
          <Text style={styles.subHeading}>Admin Kearsipan</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.dataDiriSection}>
            <Text style={styles.heading}>Data Diri</Text>
            <View style={styles.dataDiri}>
              <View style={styles.dataDiriCard}>
                <Text style={styles.textHeading}>Email</Text>
                <Text style={styles.textBody}>{user && user.email}</Text>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <Text style={styles.textHeading}>Email</Text>
                <Text style={styles.textBody}>{user && user.email}</Text>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <Text style={styles.textHeading}>Email</Text>
                <Text style={styles.textBody}>{user && user.email}</Text>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.dataDiriSection}>
            <Text style={styles.heading}>Privasi & Kemanan</Text>
            <View style={styles.dataDiri}>
              <View style={styles.dataDiriCard}>
                <Text style={styles.textHeading}>Email</Text>
                <Text style={styles.textBody}>{user && user.email}</Text>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <Text style={styles.textHeading}>Email</Text>
                <Text style={styles.textBody}>{user && user.email}</Text>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <Text style={styles.textHeading}>Email</Text>
                <Text style={styles.textBody}>{user && user.email}</Text>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
              </View>
            </View>
          </View>
          <Pressable style={styles.button} onPress={handleSignOut}>
            <Text>KELUAR</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "orange"
  },
  headerSection: {
    height: 250,
    backgroundColor: "blue",
    padding: 20,
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
  },
  textHeading: {
    fontSize: 18,
    fontWeight: '800',
  },
  textBody: {
    fontSize: 16,
    fontWeight: '600',
  },
  dataDiriSection: {

  },
  dataDiri: {
    backgroundColor: "yellow",
    display: 'flex',
    rowGap: 8,
    marginBottom: 20
  },
  dataDiriCard: {
    backgroundColor: "grey",
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    borderRadius: 15,
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    borderRadius: 15
  }
});