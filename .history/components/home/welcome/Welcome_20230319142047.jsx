import { useRouter } from 'expo-router';
import {useState} from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native';
 import { useRouter} from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES, COLORS } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View styles={styles.container}>
        <text style={styles.userName}>Hello Venu</text>

      </View>
    </View>
  )
}

export default Welcome