import React from "react";
import { View } from "react-native";

export default function AuthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View className="flex-1 bg-slate-200 justify-center items-center">
      {children}
    </View>
  );
}
