import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #120046;
  justify-content: center;
  align-items: center;
  padding:30px;
`;

export const Title = styled.Text`
    color: #00db7d;
    font-weight: bold;
    font-size: 50px;
    padding: 20px;
`;

export const Input = styled.Text`
  height: 46px; 
  align-self: stretch;
  background-color: #fff;
  border-width: 1px;
  border-color: #1312;
  border-radius: 4px;
  margin-top: 20px;
  padding-horizontal: 15px;
`;

export const Button = styled.TouchableOpacity`
    height: 46px;
    align-items: center;
    align-self:stretch;
    background-color: #f5f5;
    border-radius: 4px;
    margin-top: 10px;
    justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ddd;
  font-weight: bold;
  font-size: 16px;
`;