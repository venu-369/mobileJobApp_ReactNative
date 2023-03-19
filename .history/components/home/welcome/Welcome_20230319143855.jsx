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

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View styles={styles.container}>
        <Text style={styles.userName}>Hello Venu</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Search for jobs?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
           source={icons.search}
           resizeMode="contain"
           style={styles.searchBtnImage}
          />
        </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList 
           data = {jobTypes}
           renderItem = {({item}) => (
              <TouchableOpacity style={styles.tabBtn}>
                <Text>
                  {item}
                </Text>
           
          />

        </View>
    </View>
  )
}

export default Welcome