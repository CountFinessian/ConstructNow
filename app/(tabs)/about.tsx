import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Made by Jacob Williams and Max Williams</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#99a196",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
