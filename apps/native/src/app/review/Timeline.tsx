import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '@rneui/themed';
import { Link } from "expo-router";

const TimelinePage = () => {
  return (
    <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text>タイムライン</Text>
      <Link
        href={{
          pathname: "/"
        }}  
      >
        トップページへ遷移
      </Link>
    </View>
  );
};

export default TimelinePage;