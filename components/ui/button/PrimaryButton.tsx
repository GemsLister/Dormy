import { Pressable, Text, View } from "react-native";

type PrimaryButtonProps = {
  title: string;
};

export default function PrimaryButton({ title, ...props }: PrimaryButtonProps) {
  return (
    <View>
      <Pressable
        {...props}
        className="bg-charming_orange p-4 items-center active:opacity-80 rounded-full"
      >
        <Text className="text-slate-100 text-xl font-nunito-bold">{title}</Text>
      </Pressable>
    </View>
  );
}
