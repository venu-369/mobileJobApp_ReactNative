import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = () => {
  return (
    <TouchableOpacity>
      <Image source={iconUrl} />
      </TouchableOpacity>
  )
}

export default ScreenHeaderBtn