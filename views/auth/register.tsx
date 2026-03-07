import AuthContainer from "@/components/containers/AuthContainer";
import AuthForm from "@/components/ui/forms/AuthForm";
import NumberPad from "@/components/ui/inputs/NumberPad";
import Password from "@/components/ui/inputs/Password";
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

        <View>
          <Text className="text-[18px] font-nunito-semi-bold text-gray-600">
            Phone no.
          </Text>
          <NumberPad />
        </View>
        <View>
          <Text className="text-[18px] font-nunito-semi-bold text-gray-600">
            Password
          </Text>
          <Password />
        </View>
      </AuthForm>
    </AuthContainer>
  );
}
