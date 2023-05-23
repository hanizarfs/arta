import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import React, { useEffect, useState } from 'react';
import { Alert, Image, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DocumentScanner from 'react-native-document-scanner-plugin';

export default () => {
  const [scannedImage, setScannedImage] = useState();
  const [nowScan, setNowScan] = useState(1);

  const scanDocument = async () => {
    if (Platform.OS === 'android' && await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    ) !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Error', 'User must grant camera permissions to use document scanner.')
      return
    }

    const { scannedImages } = await DocumentScanner.scanDocument()

    if (scannedImages.length > 0) {
      setScannedImage(scannedImages[0] as any)
    }
  }

  useEffect(() => {
    // call scanDocument on load
    scanDocument()
  }, [nowScan]);

  const handleSave = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status === 'granted') {
      const assert = await MediaLibrary.createAssetAsync(scannedImage);
      MediaLibrary.createAlbumAsync('Arta', assert);
    } else {
      Alert.alert('Error', 'User must grant Media Permission to save scanned image')
    }
  }

  const handleScan = () => {
    setNowScan((prev) => {
      return prev += 1;
    })
  }

  return (scannedImage ? (
    <View>
      <Text>Document Scanner</Text>
      <TouchableOpacity onPress={handleSave} style={styles.btnContainer}>
        <Text>Click to Download</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleScan} style={styles.btnContainer}>
        <Text>Scan Again</Text>
      </TouchableOpacity>
      <Image
        resizeMode="contain"
        style={{ width: '100%', height: '100%' }}
        source={{ uri: scannedImage }}
      />
    </View>) : (
    <View>
      <Text>Images</Text>
      <TouchableOpacity onPress={handleScan} style={styles.btnContainer}>
        <Text>Scan Now</Text>
      </TouchableOpacity>
    </View>
  )
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    height: 40,
    backgroundColor: "#FF7754",
    borderRadius: 12 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});