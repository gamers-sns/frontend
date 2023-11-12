import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'ui';
import { Link } from "expo-router";

const Index = () => {
    return (
        <View>
            <Text>Expo Router Test</Text>
            <Link  
                href={{
                    pathname: "/login/Index",
                }}
            >
                <Text>ログイン画面へ遷移</Text>
            </Link>
            <Link  
                href={{
                    pathname: "/register/Index",
                }}
            >
                <Text>ユーザー登録画面へ遷移</Text>
            </Link>
        </View>
    )
}

export default Index