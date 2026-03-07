import { PropsWithChildren } from "react";
import { View } from "react-native";

export default function AuthForm({ children }: PropsWithChildren) {
  return (
    <View className="w-full px-5">
      <View className="p-12 gap-8 rounded-[25px] bg-pale-peach shadow-12 shadow-slate-400">
        {children}
      </View>
    </View>
  );
}
