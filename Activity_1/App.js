
import { StyleSheet, Text, View, Image } from 'react-native';
const picture = require("./assets/diane.jpg");



const App = () => {

  const Header = () => {
    return(
      <View style = {styles.headerpart}>
        <View style = {styles.profilepart}>
          <Image source={picture} style={styles.image}/>
          <Text style={styles.name}>Daisy Diane Eusalan</Text>
          <Text>Information Technology 3</Text>
        </View>
      </View>
    )
  }

  const MySub = () => {
    return(
      <View style = {styles.mySubject}>
        <Text style = {styles.subject}> My Subjects</Text>
      </View>
    )
  }

  const SubOffer = () => {
    return(
      <View>
        <View style = {styles.Container}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> GE 7 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Science Technology </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.Container}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 221 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Database System </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.Container}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> GEE 2 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Human Reproduction </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.Container}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 312 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Information Assurance and Security 2 </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.Container}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> GE 6 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Art Appreciation </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

      </View>
    )
  }

  const Footer = () => {
    return(
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Click here to see more</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Header/>
      <MySub/>     
      <SubOffer/>     
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  headerpart: {
    backgroundColor: '#c9184a',
    borderBottomRightRadius: '50px',
    borderTopRightRadius: '50px',
  },

  profilepart: {
    margin: '25px',
  },

  name: {
    fontSize: '20px',
  },


  image: {
    width: '80px', 
    height: '80px', 
    borderRadius: '50px',
  },

  mySubject: {
    height: 50,
    marginTop: 10,
    justifyContent: 'space-around',
    marginBottom: '10px',

  },

  subject: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  Container: {
    backgroundColor: '#feeafa',
    padding: '10px',
    marginBottom: '10px',
    flexDirection: 'row',
    borderRadius: '10px',
  },

  subCode: {
    padding: '10px',
    width: '70px'
    
  },

  txt: {
    fontWeight: 'bold',
  },

  code: {
    width: '77%',
    padding: '10px'
    
  },

  subtxt: {
    fontSize: '8px',
  },

  footer: { 
    alignItems: 'flex-end',  
    marginTop: '30px',
  },

  footerTxt: {
    color: '#023e8a'
  }

});

export default App;

