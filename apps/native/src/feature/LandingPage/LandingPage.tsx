import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'ui';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  Timeline: undefined
};

type LandingPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Landing'
>;

interface Props {
  navigation: LandingPageNavigationProp;
}
const LandingPage: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
          <Button text="登録する" onClick={() => navigation.navigate('Register')} style={{ marginVertical:10}}/>
            <Button text="ログイン" onClick={() => navigation.navigate('Login')}/>
            <Button text="タイムライン" onClick={() => navigation.navigate('Timeline')} style={{ marginVertical: 10 }}/>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
    },
  });
  

export default LandingPage;
  