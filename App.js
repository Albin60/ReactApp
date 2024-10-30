import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import MenuScreen from './MenuScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ExerciseScreen></ExerciseScreen>
      <TestingApp></TestingApp>
      <ButtonScreen></ButtonScreen>
      <MenuScreen></MenuScreen>
    </View>
  );
}

const navigator = createStackNavigator({
    // Main: MainScreen,
    // Test: TestScreeen,
    Exercise: ExerciseScreen,
    Button: ButtonScreen,
    Menu: MenuScreen
},
{
  intialRouteName: 'Menu',
  defaultNavigationOptions: {
    title: 'App'
  }
}
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
