import React, {useState, useEffect} from 'react';

import {Linking, StatusBar} from 'react-native';

import {
  Container,
  Title,
  ConverterBox,
  InputBox,
  Label,
  Input,
  ResponseBox,
  LabelR,
  Output,
  Button,
  ButtonText,
  Copyright,
  CopyrightLink,
  AlertMessage,
  AlertBox,
  AlertTitle,
  Gif,
} from './styles';

const Main = () => {
  // Here we are add the gif and state of our modal
  const errorGif = require('../../assets/images/error.gif');
  const [modalON, setModalON] = useState(false);

  // Here we have the variables to our binary and decimal numbers, also the label and its color
  const [binary, setBinary] = useState('0');
  const [decimal, setDecimal] = useState('');
  const [label, setLabel] = useState('Binary');
  const [labelColor, setLabelColor] = useState('#008000');

  // Here we are checking if the input field has a binary number
  function checkField(event) {
    const binaryCheck = event;
    let x;

    if (binaryCheck === '') {
      setLabel('Empty');
      return setLabelColor('#e59400');
    }

    for (x of binaryCheck) {
      if (x !== '0' && x !== '1') {
        setLabel('Error!');
        return setLabelColor('#e50000');
      }
    }
    setLabel('Binary');
    setLabelColor('#008000');
  }

  // Here we are converting the binary number into a decimal and checking if the input has in fact a binary number
  function convert() {
    let conversion;

    if (label === 'Error!') {
      setDecimal('');
      return setModalON(!modalON);
    }

    if (!binary) {
      return setDecimal('');
    }

    conversion = parseInt(binary, 2);
    setDecimal(conversion);
  }

  // Here is the URL of our copyright
  function goToCopyright() {
    Linking.openURL('https://www.instagram.com/espelhoinvertido');
  }

  useEffect(() => {
    checkField(binary);
  }, [binary]);

  // THE RETURN CALL
  return (
    <Container backgroundColor="black" padding={24}>
      <StatusBar barStyle="dark-content" backgroundColor="#00b300" />

      <Title>Bin2Dec</Title>
      <ConverterBox>
        <InputBox>
          <Label labelColor={labelColor}>{label}</Label>
          <Input
            multiline={true}
            onChangeText={setBinary}
            placeholder="Either 0 or 1"
            placeholderTextColor="#9999"
            autoCorrect={false}
            keyboardType={'number-pad'}
          />
        </InputBox>

        <ResponseBox>
          <LabelR>Decimal</LabelR>
          <Output>{decimal}</Output>
        </ResponseBox>
      </ConverterBox>
      <Button onPress={convert} underlayColor="#004c00" borderColor="#00b300">
        <ButtonText buttonTextColor="#00b300">Convert</ButtonText>
      </Button>
      <Copyright onPress={goToCopyright}>
        <CopyrightLink>{'\u00A9'} Espelho Invertido</CopyrightLink>
      </Copyright>

      {/* ERROR ALERT MESSAGE */}
      <AlertMessage visible={modalON} transparent={true} animationType="fade">
        <Container backgroundColor="#140e14" padding={10}>
          <StatusBar barStyle="dark-content" backgroundColor="#fc5a74" />

          <Gif source={errorGif}>
            <AlertBox>
              <AlertTitle>Enter a binary number!</AlertTitle>

              <Button
                onPress={() => setModalON(!modalON)}
                underlayColor="#722836"
                borderColor="#fc5a74">
                <ButtonText buttonTextColor="#fc5a74">OK</ButtonText>
              </Button>
            </AlertBox>
          </Gif>
        </Container>
      </AlertMessage>
    </Container>
  );
};

export default Main;
