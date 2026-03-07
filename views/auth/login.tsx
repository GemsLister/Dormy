import AuthContainer from "@/components/containers/AuthContainer";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import SecondaryButton from "@/components/ui/button/SecondaryButton";
import AuthForm from "@/components/ui/forms/AuthForm";
import NumberPad from "@/components/ui/inputs/NumberPad";
import Password from "@/components/ui/inputs/Password";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LoginView() {
  return (
    <AuthContainer>
      {/* Inputs */}
      <AuthForm>
        <View className="gap-5">
          {/* Inputs */}
          <View className="gap-2">
            <Text className="text-lg font-nunito-bold text-gray-600">
              Phone no.
            </Text>
            <NumberPad />
          </View>
          <View className="gap-2">
            <Text className="text-lg font-nunito-bold text-gray-600">
              Password
            </Text>
            <Password />
          </View>
        </View>
        {/* Remember Me and Forgot Password */}
        <View className="flex-row justify-between">
          <View className="flex-row gap-3">
            <Checkbox />
            <Text className="font-nunito-semi-bold text-[14px] text-gray-600">
              Remember Me
            </Text>
          </View>
          <View className="flex-row">
            <Text className=" font-nunito-semi-bold text-[14px] text-gray-600">
              Forgot Password
            </Text>
          </View>
        </View>
        {/* Buttons */}
        <View className="gap-5">
          <PrimaryButton title="Login" />
          <Link href={"/register"} asChild>
            <SecondaryButton title="Register" />
          </Link>
        </View>
      </AuthForm>
    </AuthContainer>
  );
}
