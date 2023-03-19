
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from './narbyjobs.style'
import { useRouter } from 'expo-router'
import { COLORS } from '../../../constants'
import PopularJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })
  console.log(data)
  return (
    <View style = { styles.container}>
      <View style = { styles.header}>
        <Text style = { styles.headerTitle}>Popular Jobs</Text>
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
          <FlatList 
           data={[1,2,3,4]}
           renderItem={({item}) => (
              <PopularJobCard 
                item={item}
              />
           )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}


      </View>
    </View>
  )
}

export default Popularjobs