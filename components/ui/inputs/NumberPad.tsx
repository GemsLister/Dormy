import { TextInput, View } from "react-native";

export default function NumberPad() {
  return (
    <View>
      <TextInput
        keyboardType="number-pad"
        className="font-nunito-semi-bold text-lg border-b border-b-gray-400 text-gray-600"
        placeholder="Enter Your Phone Number"
        maxLength={11}
      />
    </View>
  );
}
