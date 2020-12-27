import styled from 'styled-components';

const CustomButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.BlueSky};
  color: #fcaf17;
  width: 5rem;
  &:hover {
    background-color: lightskyblue;
  }
`;

export {
    CustomButton
}
