import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
// import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";

export default function RegistrationScreen({ navigation }) {
  const initialState = {
    login: "",
    email: "",
    password: "",
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [state, setState] = useState(initialState);

  const toggleShowPassword = () => {
    isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
  };

  const onSubmit = () => {
    console.log("state:", state);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../../img/background.png")}
          resizeMode={"cover"}
          style={styles.img}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <Image
                source={require("../../img/Rectangle.png")}
                style={styles.avatarHolder}
              />
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                style={styles.input}
                placeholder={"Логин"}
                placeholderTextColor={"#BDBDBD"}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, login: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder={"Адресс электронной почты"}
                placeholderTextColor={"#BDBDBD"}
                onChangeText={(value) =>
                  setState((prev) => ({ ...prev, email: value }))
                }
              />
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={!isShowPassword ? true : false}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, password: value }))
                  }
                />
                <Text
                  onPress={toggleShowPassword}
                  style={styles.passwordSecure}
                >
                  {isShowPassword ? "Скрыть" : "Показать"}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={onSubmit}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text
                style={styles.subtitle}
                onPress={() => navigation.navigate("Login")}
              >
                Уже есть аккаунт? Войти
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    justifyContent: "center",
    // justifyContent: "flex-end",
    position: "relative",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    textAlign: "center",
    marginBottom: 33,
    marginTop: 92,
  },
  form: {
    // minHeight: "100%",
    // height: 549,
    marginTop: Dimensions.get("window").height - 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    marginBottom: 16,
    paddingLeft: 16,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  btn: {
    borderRadius: 100,
    height: 51,
    backgroundColor: "#FF6C00",
    marginTop: 43,
    marginBottom: 16,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  subtitle: {
    marginBottom: 78,
    textAlign: "center",
  },
  avatarHolder: {
    position: "absolute",
    left: (Dimensions.get("window").width - 120) / 2,
    top: -60,
  },
  passwordSecure: {
    position: "absolute",
    right: 32,
    top: 14,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
