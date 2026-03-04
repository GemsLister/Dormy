import React from "react";
import { View } from "react-native";

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="flex-1 bg-slate-100 justify-self-center items-center">
      {children}
    </View>
  );
}
