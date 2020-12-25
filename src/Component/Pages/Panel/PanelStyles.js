import styled from 'styled-components';

const MainBanner = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid #000;
  position: relative;
  p {
    position: relative;
    bottom: 100px;
  }
`;

const PrayerInputForm = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  height: 200px;
  width: 400px;
  margin: 10px 30px;
`;


export {
    MainBanner,
    PrayerInputForm
}
