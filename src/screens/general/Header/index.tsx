import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { ROUTES } from '../../../shared/utils/routes';

const { width } = Dimensions.get('window');
const Header = () => {
    const navigation:any=useNavigation()
  return (
    <View>
       <View style={styles.container}>
       <Pressable onPress={()=>navigation.navigate(ROUTES.Home_Screen)}>
      <Image source={require('../../../assets/images/Home.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={()=>navigation.navigate(ROUTES.Location_Screen)}>
      <Image source={require('../../../assets/images/Location.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={()=>navigation.navigate(ROUTES.EditProfile_Screen)}>
      <Image source={require('../../../assets/images/User.png')} style={styles.icon} />
      </Pressable>
      <Pressable onPress={()=>navigation.navigate(ROUTES.Notifications_Screen)}>
      <Image source={require('../../../assets/images/notification.png')} style={styles.icon} />
      </Pressable>   
      <Pressable onPress={()=>navigation.navigate(ROUTES.Message_Screen)}>
      <Image source={require('../../../assets/images/Message.png')} style={styles.icon} />
      </Pressable>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FE3D3D',
        paddingHorizontal: 20,
        height: 80,
        width: width,
       

        
      },
      icon: {
        tintColor:'white',
        width: 33,
        height: 37,
      },
})