import { TextInput, View } from "react-native";

type PlaceholderProps = {
  placeholder: string;
};

export default function Password({ placeholder }: PlaceholderProps) {
  return (
    <View>
      <TextInput
        keyboardType="default"
        className="font-nunito-semi-bold text-[18px] border-b border-b-gray-400 text-gray-600"
        secureTextEntry={true}
        placeholder={placeholder}
      />
    </View>
  );
}
