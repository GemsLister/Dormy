import AuthContainer from "@/components/containers/AuthContainer";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import AuthForm from "@/components/ui/forms/AuthForm";
import NumberPad from "@/components/ui/inputs/NumberPad";
import Password from "@/components/ui/inputs/Password";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function RegisterView() {
  return (
    <AuthContainer>
      <AuthForm>
        <View className="w-full justify-start">
          <Text className="text-[2.5rem] text-charming_orange font-nunito-bold">
            Register
          </Text>
        </View>
        <View className="gap-7">
          {/* Inputs */}
          <View className="gap-7">
            {/* Phone no. */}
            <View>
              <Text className="text-[20px] font-nunito-semi-bold text-gray-600">
                Phone no.
              </Text>
              <NumberPad placeholder="Register Phone no." />
            </View>
            {/* Password */}
            <View>
              <Text className="text-[20px] font-nunito-semi-bold text-gray-600">
                Password
              </Text>
              <Password placeholder="Create password" />
            </View>
          </View>
          <View className="gap-5">
            <PrimaryButton title="Sign Up" />
            {/* Go back to login screen */}
            <View className="items-center">
              <Link href={"/login"} asChild>
                <Text className="font-nunito-semi-bold text-[18px] text-gray-600">
                  Already have an account?
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </AuthForm>
    </AuthContainer>
  );
}
