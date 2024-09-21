import { View } from "react-native";
import { Routes } from "./src/routes"
import { NavigationContainer } from "@react-navigation/native";

export default function Index(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}