import { PropsWithChildren } from "react";
import { View } from "react-native";

export default function AuthContainer({ children }: PropsWithChildren) {
  return (
    <View className="flex-1 bg-slate-100 justify-center items-center">
      {children}
    </View>
  );
}
