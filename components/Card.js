import * as React from "react";
import { View, Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default function Card(props) {
  return (
    <View
      {...props}
      style={{
        width: width - 25,
        maxWidth: 1025,
        height: 600,
        minHeight: 450,

        backgroundColor: "#fff",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

        ...Platform.select({
          ios: {
            shadowColor: "rgb(50, 50, 50)",
            shadowOpacity: 0.05,
            shadowRadius: 5,
            shadowOffset: {
              height: 8,
              width: 0
            }
          },
          android: {
            elevation: 3
          }
        })
      }}
    />
  );
}
