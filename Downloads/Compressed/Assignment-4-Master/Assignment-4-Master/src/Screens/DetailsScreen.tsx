
import { useColorScheme } from 'nativewind';
import { StyleSheet, Switch, Text, View , StatusBar, Button } from 'react-native';

export default function App( props: any) {
    
 
    const goToStart = () => {
        props.navigation.navigate('StartScreen');
    }

  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorScheme=="dark"? '#333': '#fff'}}>
      <StatusBar barStyle={colorScheme=='dark'?'light-content':'dark-content'} />
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10}}>
        <Text style={{fontSize: 20, color: colorScheme=='dark'? '#fff': '#000'}}>Dark Mode</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
      
      <Text style={{marginHorizontal: 4, textAlign: 'justify', color: colorScheme=='dark'? '#fff': '#000'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </Text>
      <View style={{height: 48, width: '100%', backgroundColor: colorScheme=='dark'? '#008000': '#87ceeb'}} />
      <Button title="Go to Start" onPress={goToStart} ></Button> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWhite: {
      color: 'white'
    },
    textBlack: {
      color: 'black'
    }
  });