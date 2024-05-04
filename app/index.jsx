import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link} from "expo-router";

export default function App() {
    return (
        <View className="flex">
            <Text>This is out new app is good</Text>
            <StatusBar style="auto" />
            <Link href='/profile' className={'pink-200'} >go to web</Link>
        </View>
    );
}

