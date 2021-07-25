import React, { useState } from "react";
import Styles from "./Styles";
import textConstants from "./TextConstants";
import { Text, Image, TextInput, Button } from "react-native";

const Cat = (props) => {

  // Props
  const { name, imageUrl, hasInput=false, hasHeading=false } = props;

  // INPUT STATE HANDLING
  // creates a property in state called 'isHungry'
  // creates a function called setText which can alter the value of the property 'isHungry'
  // call useState and give the default value for 'isHungry', in this case false
  // [<getter>, <setter>] = useState(<initialValue>)
  const [isCatHungry, setIsCatHungry] = useState(true);

  return (
    <>
      {/* Cool Cat */}
      {
        hasHeading && 
        <Text style={Styles.colorBlue}>{textConstants.headings.CoolCat}</Text>
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
      <Button title={isCatHungry ? textConstants.buttonText.IAmHungryPleaseFeedMe : textConstants.buttonText.IHaveEatenThanksForTheFood} 
              onPress={() => setIsCatHungry(!isCatHungry)}/>
    </>
  );
};

export default Cat;
