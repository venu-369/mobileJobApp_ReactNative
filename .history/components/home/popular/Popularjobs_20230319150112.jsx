import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Ac } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'


const Popularjobs = () => {
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs