import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <Image source={require("./assets/clock.png")}></Image>
      </View>
      <View>
        <Text>
          지금 내<strong>시간표</strong>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#080D1B",
  },
  clock: {
    flex: 1,
    marginTop: 150,
  },
});
