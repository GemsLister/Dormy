import AuthContainer from "@/components/container/AuthContainer";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import SecondaryButton from "@/components/ui/button/SecondaryButton";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginView() {
  return (
    <AuthContainer>
      <SafeAreaView>
        <Image
          source={require("../../assets/dormy-logo-text.png")}
          style={{ height: 90, width: 140 }}
          contentFit="contain"
        />
      </SafeAreaView>
      {/* Inputs */}
      <View className="w-[80%] gap-10">
        <View className="gap-5">
          <View className="gap-2">
            <Text className="text-lg font-nunito-bold text-gray-600">
              Phone no.
            </Text>
            <TextInput
              keyboardType="number-pad"
              className="font-nunito-semi-bold text-lg border-b border-b-gray-400 text-gray-600"
              placeholder="Enter Your Phone Number"
              maxLength={11}
            />
          </View>
          <View className="gap-2">
            <Text className="text-lg font-nunito-bold text-gray-600">
              Password
            </Text>
            <TextInput
              keyboardType="default"
              className="font-nunito-semi-bold text-lg border-b border-b-gray-400 text-gray-600"
              placeholder="Enter Your Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View className="gap-5">
          <PrimaryButton title="Login" />
          <Link href={"/register"} asChild>
            <SecondaryButton title="Register" />
          </Link>
        </View>
      </View>
    </AuthContainer>
  );
}
