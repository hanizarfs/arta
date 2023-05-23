import { SafeAreaView, View, ScrollView, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';

const tools = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "yellow" }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.alatSection}>
            <Text style={styles.heading}>Scan</Text>
            <View style={styles.alat}>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>Smart Scan OCR</Text>
              </View>
            </View>
          </View>
          <View style={styles.alatSection}>
            <Text style={styles.heading}>Konversi</Text>
            <View style={styles.alat}>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>PDF to DOCX</Text>
              </View>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>DOCX to PDF</Text>
              </View>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>Gambar to PDF</Text>
              </View>
            </View>
          </View>
          <View style={styles.alatSection}>
            <Text style={styles.heading}>Lainnya</Text>
            <View style={styles.alat}>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>PDF to DOCX</Text>
              </View>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>DOCX to PDF</Text>
              </View>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>Gambar to PDF</Text>
              </View>
            </View>
          </View>
          <View style={styles.alatSection}>
            <Text style={styles.heading}>Subjek Folder</Text>
            <View style={styles.alat}>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>PDF to DOCX</Text>
              </View>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>DOCX to PDF</Text>
              </View>
              <View style={styles.alatCard}>
                <Text style={styles.textHeading}>ICON</Text>
                <Text style={styles.textBody}>Gambar to PDF</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default tools;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "orange"
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
  alatSection: {
    backgroundColor: "yellow",
    display: 'flex',
    rowGap: 8,
    marginBottom: 20
  },
  alat: {
    backgroundColor: "red",
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  alatCard: {
    backgroundColor: "grey",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    borderRadius: 15
  }
});