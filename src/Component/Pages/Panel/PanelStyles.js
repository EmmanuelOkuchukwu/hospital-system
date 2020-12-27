import styled from 'styled-components';

const MainBanner = styled.div`
  .banner {
    width: 100%;
    height: 300px;
    opacity: 0.3;
  }
  .user-welcome {
    position: absolute;
    top: 150px;
    margin: 0 10px;
    p {
      font-size: 26px;
    }
  }
  .secondary-nav {
    position: absolute;
    top: 150px;
    border: 1px solid #000;
    border-radius: 4px;
    width: 500px;
    margin: 0 10px;
    @media screen and (max-width: 700px) {
      ul {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .secondary-nav {
        width: 300px;
      }
    }
  }
  ul {
    display: flex;
    padding: 0 10px;
    align-items: center;
  }
  li {
    list-style: none;
    margin: 0 10px;
  }
  a {
    text-decoration: none;
  }
  //border: 1px solid #000;
  position: relative;
  p {
    position: relative;
    bottom: 100px;
  }
`;

const MainContainer = styled.div`
  margin: 0 auto 1.25rem;
`;

const PrayerInputForm = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  height: 220px;
  width: 400px;
  margin: 10px 0;
  position: absolute;
  left: 20%;
`;

const ResultsContainer = styled.div`

`;

export {
    MainBanner,
    PrayerInputForm,
    MainContainer,
    ResultsContainer
}
