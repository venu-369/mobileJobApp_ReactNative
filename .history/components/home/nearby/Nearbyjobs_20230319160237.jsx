
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants'
import PopularJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'


const Nearbyjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })
  
  return (
    <View style = { styles.container}>
      <View style = { styles.header}>
        <Text style = { styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Something went wrong</Text>
        ): (
          data?.map((job) => (
            <NearbyJobCard />
          ))
        )}


      </View>
    </View>
  )
}

export default Nearbyjobs