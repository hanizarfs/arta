import { SafeAreaView, View, ScrollView, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = FIREBASE_AUTH.currentUser;
    setUser(currentUser);
  }, []);


  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerScreen}>
            <Text style={styles.heading}>Hi, {user && user.email}</Text>
            <Text>HomePage</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Cari dokumen"
          />
          <View style={styles.mainScreen}>
            <View style={styles.fiturSection}>
              <Text style={styles.heading}>Fitur</Text>
              <View style={styles.fitur}>
                <Pressable style={styles.fiturCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Smart Scan</Text>
                  <Text style={styles.subHeading}>Berbasis OCR</Text>
                </Pressable>
                <Pressable style={styles.fiturCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Dokumen</Text>
                  <Text style={styles.subHeading}>Konverter</Text>
                </Pressable>
              </View>
              <View style={styles.fitur}>
                <Pressable style={styles.fiturCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Impor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
                <Pressable style={styles.fiturCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.arsipTerkiniSection}>
              <Text style={styles.heading}>Arsip Terkini</Text>
              <View style={styles.arsip}>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.arsipTerkiniSection}>
              <Text style={styles.heading}>Arsip Terkini</Text>
              <View style={styles.arsip}>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.arsipTerkiniSection}>
              <Text style={styles.heading}>Arsip Terkini</Text>
              <View style={styles.arsip}>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.arsipTerkiniSection}>
              <Text style={styles.heading}>Arsip Terkini</Text>
              <View style={styles.arsip}>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.arsipTerkiniSection}>
              <Text style={styles.heading}>Arsip Terkini</Text>
              <View style={styles.arsip}>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
                <Pressable style={styles.arsipCard}>
                  <Text style={styles.heading}>ICON</Text>
                  <Text style={styles.heading}>Ekspor</Text>
                  <Text style={styles.subHeading}>Arsip</Text>
                </Pressable>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerScreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
  },
  subHeading: {
    fontSize: 24,
    fontWeight: '600',
  },
  textInput: {
    height: 50,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: "grey",
    fontSize: 16,
    borderRadius: 15,
    marginBottom: 20
  },
  mainScreen: {
  },
  fiturSection: {
    marginBottom: 20
  },
  fitur: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  fiturCard: {
    position: 'relative',
    backgroundColor: "red",
    width: '49%',
    padding: 20,
    borderRadius: 15,
    height: 180,
    flex: 1,
    justifyContent: 'center',
  },
  arsipTerkiniSection: {
  },
  arsip: {
    display: 'flex',
    rowGap: 8
  },
  arsipCard: {
    backgroundColor: "grey",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
  },
  buatArsip: {
    flex: 2,
    backgroundColor: "green",
    padding: 10,
    fontSize: 45,
    fontWeight: 900,
    width: 65,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
});