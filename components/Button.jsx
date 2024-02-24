import { Text, TouchableOpacity } from "react-native";
import React from "react";
const Button = ({ pressHandler, Icon, stylesText, title, stylesButton }) => {
  return (
    <TouchableOpacity style={stylesButton} onPress={pressHandler}>
      {!Icon ? <Text style={stylesText}>{title}</Text> : Icon}
    </TouchableOpacity>
  );
};

export default Button;
