import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.BlueSky};
  height: 50px;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    padding: 10px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.MainText};
    &:hover {
      color: white;
    }
  }
`;

const MainTitle = styled.div`
  padding: 0 10px;
`;



export {
  Header,
  MainTitle
}
