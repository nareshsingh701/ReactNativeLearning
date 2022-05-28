import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const ActivityIndicator1 = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("number");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
       // autoCorrect={true}
       // clearTextOnFocus={false}
    inlineImagePadding={38}
          editable={true}
        autoFocus={true}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ActivityIndicator1;

