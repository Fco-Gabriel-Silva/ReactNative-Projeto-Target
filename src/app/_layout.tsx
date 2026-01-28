// import { Slot } from "expo-router";
// import { Tabs } from "expo-router";
import { Stack } from "expo-router";

import { colors } from "@/theme/colors";

export default function Layout() {
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

  //   <Stack /> - mesma coisa do <Slot />, mas com o padrão de navegação Stack (React Navigation).
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
  );
}
