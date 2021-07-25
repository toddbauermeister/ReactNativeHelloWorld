import React, { useState } from "react";
import Styles from "./Styles";
import textConstants from "./TextConstants";
import { Text, Image, TextInput } from "react-native";

const Cat = (props) => {

  // Props
  const { name, imageUrl, hasInput=false, hasHeading=false } = props;

  // creates a property in state called 'text'
  // creates a function called setText which can alter the value of the property 'text'
  // call useState and give the default value for 'text', in this case an empty string
  // [<getter>, <setter>] = useState(<initialValue>)
  const [text, setText] = useState("");
  return (
    <>
      {/* Cool Cat */}
      {
        hasHeading && 
        <Text style={Styles.colorBlue}>{textConstants.headings.Cool_Cat}</Text>
      }
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      {/* Hello, my name is */}
      <Text style={[Styles.marginTop45, Styles.colorBlue]}>
        Hello, my name is {name}
      </Text>
      {hasInput && (
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
