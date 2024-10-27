import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// Components
import Header from '@components/_core/header';
import Main from '@components/main';

// Styles
import { colors } from '@styles/themes';
import { margin } from '@styles/spacing';
import { fontsSize } from '@styles/fonts';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.title}>React Native Masterclass App</Text>
        <Main />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.main.primary
  },
  title: {
    fontSize: fontsSize.L,
    margin: margin.M,
    color: colors.fonts.secondary
  }
})

