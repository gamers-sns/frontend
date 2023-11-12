// LoginPage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from "expo-router";
import { Button } from 'ui';

const LoginPage = () => {
  return (
    <View>
      <Link
        href={{
          pathname: "/"
        }}  
      >
        トップページへ遷移
      </Link>
      <Text>ログイン</Text>
    </View>
  );
};

export default LoginPage;