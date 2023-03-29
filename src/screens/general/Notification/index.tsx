import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ROUTES } from '../../../shared/utils/routes'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../Header'

const Notifications = ({navigation}:any) => {
  
    const data=[
        {
            img:require('../../../assets/images/notification.png'),
            name:"Dear User Ali Raza posted on urgent blood needed in GHQ Hospital Gujranwala",
        },   {
            img:require('../../../assets/images/notification.png'),
            name:"Dear User Ali Raza posted on urgent blood needed in GHQ Hospital Gujranwala",
        },   {
            img:require('../../../assets/images/notification.png'),
            name:"Dear User Ali Raza posted on urgent blood needed in GHQ Hospital Gujranwala",
        },   {
            img:require('../../../assets/images/notification.png'),
            name:"Dear User Ali Raza posted on urgent blood needed in GHQ Hospital Gujranwala",
        },   {
            img:require('../../../assets/images/notification.png'),
            name:"Dear User Ali Raza posted on urgent blood needed in GHQ Hospital Gujranwala",
        },   {
            img:require('../../../assets/images/notification.png'),
            name:"Dear User Ali Raza posted on urgent blood needed in GHQ Hospital Gujranwala",
        },  
    ]

  return (
    <>
    <Header/>
    <View style={{flex:1,backgroundColor:'#f7f7f7'}}>   
    <ScrollView showsVerticalScrollIndicator={false}
    style={{marginLeft:20,marginRight:20,marginTop:5,flex:1}}>
       

       <SafeAreaView style={styles.container}>
<FlatList
          data={data}
          renderItem={({item}) => (
        <View style={styles.list}>
       <View  style={{flexDirection:'row',flex:0.29}}>
        <Image   style={styles.img} source={item.img}/>
        </View> 
     
       <View style={{flexDirection:'row',flex:0.85}}>
        <View style={{flexDirection:'column'}}>
        {/* <Text style={styles.txt}>{item.title}</Text> */}
        <Text  style={styles.txt1}>{item.name}</Text>
        
        </View>
        </View>

       </View>
         )}
         />
    </SafeAreaView>
  
      </ScrollView>
 
    </View>
    </>
  )
}

export default Notifications

const styles = StyleSheet.create({
    list:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        marginTop:10,
        paddingVertical:7,
        paddingBottom:20,
        borderRadius:8,
        borderBottomWidth: 1,
         borderBottomColor: '#C4C4C4'
         
      },
      container:{

      },
      txt:{flexDirection:'row',alignItems:'center',flex:1,fontSize:20,fontWeight:'600',color:'black'},
      txt1:{flexDirection:'row',alignItems:'center',flex:1,fontSize:12,fontWeight:'400',color:'#7A7A7A'},
      account: {
        color: 'white',
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 20,
      marginLeft:90,
      },
      img:{
        
        height:25,
        width:25,
        borderRadius:50,
        marginLeft:20,
        alignSelf:'center',
        
              },
 
})