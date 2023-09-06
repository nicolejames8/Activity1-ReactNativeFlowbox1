
import { StyleSheet, Text, View, Image } from 'react-native';
const picture = require("./assets/dianne.jpg");

const App = () => {

  const Header = () => {
    return(
      <View style = {styles.head}>
        <View style = {styles.profile}>
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
        <View style = {styles.subjectContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> GE 7 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Science Technology </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subjectContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 213 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Introduction to Human Computer </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subjectContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 255 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> System Analysis </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subjectContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 312 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Information Assurance and Security 2 </Text>
            <Text style = {styles.subtxt}> Units: 3 </Text>
          </View>
        </View>

        <View style = {styles.subjectContainer}>
          <View style = {styles.subCode}>
            <Text style = {styles.txt}> IT 221 </Text>
          </View>
          <View style = {styles.code}>
            <Text style = {styles.subtxt}> Database System </Text>
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

  head: {
    backgroundColor: '#90e0ef',
    borderBottomRightRadius: '50px',
    borderTopRightRadius: '50px',
  },

  profile: {
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
    fontSize: '10',
  },

  subjectContainer: {
    backgroundColor: '#cae9ff',
    padding: '10px',
    marginBottom: '10px',
    flexDirection: 'row',
    borderRadius: '10px',
  },

  subCode: {
    padding: '10px',
    width: '70px',
    justifyContent: 'center'
    
  },

  txt: {
    fontWeight: 'bold',
  },

  code: {
    width: '77%',
    padding: '15px'
    
  },

  subtxt: {
    fontSize: '8px',
  },

  footer: { 
    alignItems: 'flex-end',  
    marginTop: '30px',
  },

  footerTxt: {
    color: '#03045e'
  }

});

export default App;

