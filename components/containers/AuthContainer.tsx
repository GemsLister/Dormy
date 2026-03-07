import { Image } from "expo-image";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthContainer({ children }: PropsWithChildren) {
  return (
    <View className="flex-1 bg-slate-100 justify-center items-center">
      <SafeAreaView>
        <Image
          source={require("../../assets/dormy-logo-text.png")}
          style={{ height: 90, width: 210 }}
          contentFit="contain"
        />
      </SafeAreaView>
      {children}
    </View>
  );
}
