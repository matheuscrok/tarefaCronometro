import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStopwatch, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function app() {


  const [startStop, setStartStop]= useState("Start");

  const [timer, setTimer] = useState(null);

  const [numbers, setNumber] = useState(0);

  
 
  function startStopButton() {
    if (timer === null) {
      setStartStop("Stop");
      let a=numbers;
      
      setTimer(
        setInterval(()=> {
          setNumber(a+=0.1);
      }, 100)
      ); 
      
    } else {
      clearInterval(timer);
      setStartStop("Start");
      setTimer(null);
    }
    
  }

  function zerar() {

    clearInterval(timer);
    setStartStop("Start");
    setNumber(0);
    setTimer(null)
  }


  return (
    <View style={styles.container}>

      <Text style={styles.counter}>{`${numbers.toFixed(1)}`}</Text>

      <View style={styles.header}>
        <TouchableOpacity style={styles.botao} onPress={()=>startStopButton()}>
          <FontAwesomeIcon icon={faStopwatch} color={'#009159'} size={50} />
          <Text>{startStop}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={()=>zerar()}>
          <FontAwesomeIcon icon={faPlus} color={'#009159'} size={50} />
          <Text>Zerar</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fffff2',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }, botao: {
    width: 65,
    height: 85,
    borderWidth: 2,
    borderColor: '#009159',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }, btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, header: {
    flexDirection: 'row',
  }, counter: {
    fontWeight: 'bold',
    fontSize: 40
  },

})