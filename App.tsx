/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Fragment, Component } from 'react';
 import { useDispatch,useSelector } from 'react-redux';
 import {PlusValue,MinusValue} from './Featurs/ActionsObjects/TestObj'
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Button,
   Text
 } from 'react-native';

 const  App =()=>{
   const dispatch = useDispatch();
   const state = useSelector(state=>state.reducer.counter);
     return (
       <SafeAreaView>
       <View styles={styles.container}>
            <Text>{JSON.stringify(state.value)}</Text>
            <Button title="increment" onPress={() => dispatch(PlusValue(1))}>
                +1
            </Button>
            <Button title="decrement" onPress={() => dispatch(MinusValue(1))}>
                -1
            </Button>
       
       </View>
       </SafeAreaView>
     );
   
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   }
 });
 
 export default App;