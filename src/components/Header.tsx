import { View, Image, StyleSheet}from 'react-native';
import Logo from '../assets/images/Logo.png'

export function Header(){

  return(
    <View style={styles.container}>
      <Image source={Logo}/>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    height: 173,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
