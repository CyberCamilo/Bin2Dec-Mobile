import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: ${(props) => `${props.padding}px`};

  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
`;

export const Gif = styled.ImageBackground`
  padding: 10px;
  height: 65%;

  resize-mode: cover;

  align-items: center;
  justify-content: flex-end;
`;

export const Box = styled.View`
  flex-direction: ${(props) => `${props.direction}`};
  align-self: ${(props) => `${props.align}`};
`;

export const AlertMessage = styled.Modal``;

export const AlertBox = styled.View`
  flex: 1;
  border-radius: 20px;
  padding: 18px;

  align-items: center;

  justify-content: space-between;

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const AlertTitle = styled.Text`
  color: #fc5a74;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #00b300;

  margin-bottom: 40px;
`;

export const ConverterBox = styled.View`
  max-width: 400px;
  max-height: 300px;

  padding: 16px;

  width: 100%;
  height: 100%;

  background-color: white;

  border-radius: 20px;
  border: 6px solid #00b300;

  justify-content: space-evenly;
`;

export const InputBox = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 24px;
  border: 2px solid ${(props) => props.labelColor};
  background-color: black;
  color: ${(props) => props.labelColor};
  border-radius: 10px;
  padding: 8px;
`;

export const Input = styled.TextInput`
  background-color: #efefef;
  color: #0c7b49;
  width: 170px;
  padding: 14px;

  border-radius: 10px;

  font-size: 20px;
`;

export const ResponseBox = styled.View`
  justify-content: space-evenly;
`;

export const LabelR = styled.Text`
  font-size: 24px;
  color: #008000;
  padding: 8px;
`;

export const Output = styled.Text`
  background-color: #efefef;
  color: #0c7b49;
  width: 170px;
  height: 45px;
  padding: 10px;

  border-radius: 10px;

  align-self: center;

  text-align: center;

  font-size: 20px;
`;

export const Button = styled.TouchableHighlight`
  margin-top: 20px;

  height: 40px;

  width: 130px;
  border-radius: 40px;
  border: 2px solid ${(props) => props.borderColor};

  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.buttonTextColor};
  text-align: center;
  letter-spacing: 1px;
`;

export const Copyright = styled.TouchableOpacity`
  margin-top: 30px;
  padding: 8px;
`;

export const CopyrightLink = styled.Text`
  font-size: 20px;
  color: white;
  text-decoration: underline;
`;
