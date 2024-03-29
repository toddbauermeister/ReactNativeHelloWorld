import React, { useEffect, useState } from "react";
import { Text, Image, Button } from "react-native";
import systemConstants from "../Utility/SystemConstants";
import textConstants from "../Utility/TextConstants";
import { get, post } from "../Api/ApiHandler";
import Styles from "../Utility/Styles";
import ApiCatFacts from "../Api/ApiCatFacts";

const Cat = (props) => {

  // Props
  const { name, hasHeading=false } = props;

  // INPUT STATE HANDLING
  // creates a property in state called 'isHungry'
  // creates a function called setText which can alter the value of the property 'isHungry'
  // call useState and give the default value for 'isHungry', in this case false
  // [<getter>, <setter>] = useState(<initialValue>)
  const [isCatHungry, setIsCatHungry] = useState(true);

  useEffect(async () => {
    const x = await get('https://thatcopy.pw/catapi/rest/');
    // const y = await ApiCatFacts(); TODO figure out why ApiCatFacts doesn't work, think endpoint may be broken lol
  }, []);

  return (
    <>
      {/* Cool Cat */}
      {
        hasHeading && 
        <Text style={Styles.colorBlue}>{textConstants.headings.CoolCat}</Text>
      }
      <Image
        source={{
          uri: isCatHungry ? systemConstants.resources.images.hungryCat : systemConstants.resources.images.nonHungryCat,
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

      {/* I am hungry, please feed me */} 
      {/* OR */}
      {/* I have eaten, thanks for the food */}
      <Button title={isCatHungry ? textConstants.buttonText.IAmHungryPleaseFeedMe : textConstants.buttonText.IHaveEatenThanksForTheFood} 
              onPress={() => setIsCatHungry(!isCatHungry)}/>
    </>
  );
};

export default Cat;
