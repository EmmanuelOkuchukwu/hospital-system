import styled from 'styled-components';

const MainLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
`;

const Form = styled.form`
  width: 25rem;
  height: 18rem;
  border: 1px solid #000;
  border-radius: 5%;
  text-align: center;
  background-color: ${props => props.theme.NewMidnightBlue};
  h1 {
    color: #fff;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  border: none;
  background-color: lightskyblue;
  border-radius: 3px;
  margin: 10px 0;
  &:hover {
    color: ${props => props.theme.NewMidnightBlue};
    background-color: #fff;
    cursor: pointer;
  }
${props => {
    switch(props.size) {
      case "sm":
          return "font-size: 12px;";
      case "lg": 
          return "font-size: 25px;";
    }
    return "font-size: 17px;";
    }
}`

const TextField = styled.input`
  margin: 10px 0;
`;

export {
    MainLoginContainer,
    Form,
    TextField,
    Button
}
