import { PropsWithChildren } from "react";
import { View } from "react-native";

export default function AuthForm({ children }: PropsWithChildren) {
  return <View className="w-full px-12 gap-10">{children}</View>;
}
