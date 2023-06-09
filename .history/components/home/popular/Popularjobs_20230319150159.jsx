import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Ac } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'


const Popularjobs = () => {
  const router = useRouter();
  return (
    <View style = { styles.container}>
      <View style = { styles.header}>
        <Text style = { styles.headerTitle}>Popular Jobs</Text>

      </View>
    </View>
  )
}

export default Popularjobs