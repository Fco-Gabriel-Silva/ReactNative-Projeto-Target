// import { Slot } from "expo-router";
// import { Tabs } from "expo-router";
import { Stack } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { colors } from "@/theme/colors";

import { Loading } from "@/components/Loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    //   <Stack /> - mesma coisa do <Slot />, mas com o padrão de navegação Stack (React Navigation).
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    />

    //   <Slot /> - pega todas as rotas dentro da pasta "app" e repassa para o esse Slot.
    //   return <Slot />;

    // <Tabs /> - mesma coisa do <Slot />, mas com o padrão de navegação Bottom Tabs (React Navigation).
    /*   return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  ); */
  );
}
