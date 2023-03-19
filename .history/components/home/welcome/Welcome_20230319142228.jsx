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


import styles from './welcome.style'
import { icons, SIZES, COLORS } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View styles={styles.container}>
        <text style={styles.userName}>Hello Venu</text>
        <text style={styles.welcomeMessage}>Find your perfect job</text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput />

        </View>
        </View>
    </View>
  )
}

export default Welcome