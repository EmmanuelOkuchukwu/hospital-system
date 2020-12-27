import React from 'react';
import { history } from '../../../History' ;
import NavHeader from '../../Layout/Navigation/NavHeader';
import { PrayerInputForm, MainBanner, MainContainer, ResultsContainer } from './PanelStyles'
// import Codepen from '@styled-icons/boxicons-logos/Codepen'
import PrayerForm from '../../Layout/PrayerInputForm/PrayerForm';
import JesusPoster from '../../Assets/JesusPoster.jpg'
import ListGroup from 'react-bootstrap/ListGroup';

class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prayerData: [],
            name: 'Emmanuel'
        }
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    async fetchData() {
        const res = await fetch('http://localhost:5000/prayer_entries');
        const data = await res.json()
        .then((data) =>{
            this.setState({prayerData: data})
            console.log("Data ", data);
        })
    }

    render() {
        // const {prayerData} = this.state;
        return(
            <div>
                <NavHeader/>
                <MainBanner>
                    <img src={JesusPoster} className="banner" alt="Jesus" height={300} width={1919}/>
                    <div className="user-welcome">
                        <p><b>Welcome back</b>{' '}{this.state.name}</p>
                    </div>
                    <div className="secondary-nav">
                        <ul>
                            <li><a href="">Prayer Journal</a></li>
                            <li><a href="">Friends</a></li>
                            <li><a href="">Bible Courses</a></li>
                        </ul>
                    </div>
                </MainBanner>
                <MainContainer>
                    <PrayerInputForm>
                        <PrayerForm/>
                    </PrayerInputForm>
                    <ListGroup as="ul" style={{width: '400px', position: 'absolute', left: '20%', top: '590px'}}>
                        <ListGroup.Item as="li" active>
                            User Details
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                            shfljsd
                        </ListGroup.Item>
                    </ListGroup>
                    <ResultsContainer>
                    {/*  TODO: Map through the arrays here  */}
                    </ResultsContainer>
                </MainContainer>
            </div>
        )
    }
}
export default Panel;
