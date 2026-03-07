import { Pressable, Text, View } from "react-native";

type PrimaryButtonProps = {
  title: string;
};

export default function PrimaryButton({ title, ...props }: PrimaryButtonProps) {
  return (
    <View>
      <Pressable
        {...props}
        className="bg-charming-orange p-4 items-center active:opacity-80 rounded-full"
      >
        <Text className="text-slate-100 font-nunito-bold text-[20px]">
          {title}
        </Text>
      </Pressable>
    </View>
  );
}
