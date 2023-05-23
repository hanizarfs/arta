import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import { Link, useRouter } from 'expo-router';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  setTimeout(() => {
    router.replace('/startScreen');
  }, 2500);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView
        style={{
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
        }}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
          LOGO
        </Text>
      </FadeInView>
    </View>
  );
};