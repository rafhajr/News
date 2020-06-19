import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #FFF;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
    color: #00db7d,
    font-weight: bold,
    font-size: 50,
    padding: 20,
`;

export const Input = styled.Text`
  height: 46, 
  align-self: stretch,
  background-color: #fff,
  border-width: 1,
  border-color: #ddd,
  border-radius: 4,
  margin-top: 20,
  padding-horizontal: 15,
`;

export const Button = styled.TouchableOpacity`
    height: 46,
    align-items: center,
    align-self:stretch,
    background-color: #f5f5,
    border-radius: 4,
    margin-top: 10,
    justify-content: center,
`;

export const ButtonText = styled.Text`
  color: #ddd,
  font-weight: bold,
  font-size: 16,
`;