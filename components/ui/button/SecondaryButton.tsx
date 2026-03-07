import { Pressable, Text, View } from "react-native";

type PrimaryButtonProps = {
  title: string;
};

export default function PrimaryButton({ title, ...props }: PrimaryButtonProps) {
  return (
    <View>
      <Pressable
        {...props}
        className="bg-slate-100 border border-charming-orange p-4 items-center active:opacity-80 rounded-full"
      >
        <Text className="text-charming-orange text-[20px] font-nunito-bold">
          {title}
        </Text>
      </Pressable>
    </View>
  );
}
