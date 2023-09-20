import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/roundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focuse on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton  title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    flexDirection: "row",
    padding: spacing.lg,
    justifyContent: "top",
  },
  text: {
    color: colors.white,
  },
});
