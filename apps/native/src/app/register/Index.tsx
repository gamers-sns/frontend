// LoginPage.js
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from "expo-router";
import { Button } from 'ui';

const RegisterPage = () => {
  return (
    <View>
      <Link
        href={{
          pathname: "/"
        }}  
      >
        トップページへ遷移
      </Link>
      <Text>ユーザー登録</Text>
    </View>
  );
};

export default RegisterPage;