import { TextInput, View } from "react-native";

type PlaceholderProps = {
  placeholder: string;
};

export default function NumberPad({ placeholder }: PlaceholderProps) {
  return (
    <View>
      <TextInput
        keyboardType="number-pad"
        className="font-nunito-semi-bold text-[18px] border-b border-b-gray-400 text-gray-600"
        maxLength={11}
        placeholder={placeholder}
      />
    </View>
  );
}
