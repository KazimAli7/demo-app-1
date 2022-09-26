import React from "react";
import { Button, View } from "react-native";

export const MyButton = (props) => {
    const { clicked, title } = props;
    return(
        <View>
            <Button onPress={() => clicked()} title={title} />
        </View>
    )
}