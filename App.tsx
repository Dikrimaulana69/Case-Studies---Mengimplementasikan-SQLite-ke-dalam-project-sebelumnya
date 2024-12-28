import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  // Membuat ref untuk animasi
  const position = useRef(new Animated.Value(0)).current; // Inisialisasi posisi awal dengan nilai 0

  useEffect(() => {
    // Membuat animasi yang bergerak dari kiri ke kanan
    Animated.loop(
      Animated.sequence([
        // Animasi bergerak ke kanan
        Animated.timing(position, {
          toValue: 300, // Bergerak ke kanan sejauh 300
          duration: 2000, // Durasi animasi 2 detik
          useNativeDriver: true, // Memungkinkan penggunaan driver native untuk performa lebih baik
        }),
        // Animasi bergerak ke kiri
        Animated.timing(position, {
          toValue: 0, // Kembali ke posisi awal
          duration: 2000, // Durasi animasi 2 detik
          useNativeDriver: true,
        }),
      ])
    ).start(); // Mulai animasi
  }, [position]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Moving Box Animation</Text>
      <Animated.View style={[styles.box, { transform: [{ translateX: position }] }]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
});

export default App;