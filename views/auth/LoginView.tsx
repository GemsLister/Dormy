import ScreenContainer from "@/components/container/ScreenContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  return (
    <ScreenContainer>
      <SafeAreaView>
        <Image
          source={require("../../assets/dormy-logo-text.png")}
          style={{ height: 180, width: 160 }}
          contentFit="contain"
        />
      </SafeAreaView>

      <View className="w-[70%] gap-4">
        <View>
          {/* Label */}
          <Text className="text-lg">Phone no.</Text>
          <TextInput keyboardType="phone-pad" className="text-lg" />
        </View>
        <PrimaryButton>Login</PrimaryButton>
      </View>
    </ScreenContainer>
  );
}
