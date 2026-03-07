import { TextInput, View } from "react-native";

export default function Password() {
  return (
    <View>
      <TextInput
        keyboardType="default"
        className="font-nunito-semi-bold text-lg border-b border-b-gray-400 text-gray-600"
        placeholder="Enter Your password"
        secureTextEntry={true}
      />
    </View>
  );
}
