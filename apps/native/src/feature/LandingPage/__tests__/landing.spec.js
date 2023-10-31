import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../LandingPage';  // 適切なパスを指定してください

const Stack = createStackNavigator();

test('renders correctly and navigates on button press', () => {
  const { getByText } = render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // 画面のレンダリングを確認
  expect(getByText('登録する')).toBeTruthy();
  expect(getByText('ログイン')).toBeTruthy();

  // ボタンのクリックイベントをシミュレート
  fireEvent.press(getByText('登録する'));
  expect(getByText('登録する')).toBeTruthy();  // 'Register Screen' は登録画面のテキストを示していると仮定

  fireEvent.press(getByText('ログイン'));
  expect(getByText('ログイン')).toBeTruthy();  // 'Login Screen' はログイン画面のテキストを示していると仮定
});
