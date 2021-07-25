import React, { useState } from "react";
import Styles from "./Styles";
import textConstants from "./TextConstants";
import { Text, Image, TextInput } from "react-native";

const Cat = (props) => {
  // creates a property in state called 'text'
  // creates a function called setText which can alter the value of the property 'text'
  // call useState and give the default value for 'text', in this case an empty string
  // [<getter>, <setter>] = useState(<initialValue>)
  const [text, setText] = useState("");
  return (
    <>
      <Text style={Styles.colorBlue}>{textConstants.headings.Cool_Cat}</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text style={[Styles.marginTop45, Styles.colorBlue]}>
        {textConstants.blurbs.App_Description}
      </Text>
      {props.hasInput && (
        <>
          <TextInput
            placeholder={"Type Things Here"}
            style={Styles.marginTop45}
            onBlur={(e) => setText(e.nativeEvent.text)}
          />
          {text && (
            <Text style={[Styles.marginTop45, Styles.colorBlue]}>
              You typed: {text}
            </Text>
          )}
        </>
      )}
    </>
  );
};

export default Cat;
