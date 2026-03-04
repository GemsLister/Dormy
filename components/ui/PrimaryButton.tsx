import React from "react";
import { Pressable, Text, View } from "react-native";

export default function PrimaryButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        className="bg-charming_orange p-4 items-center active:opacity-80 rounded-full"
      >
        <Text className="text-slate-100 text-xl">{children}</Text>
      </Pressable>
    </View>
  );
}
