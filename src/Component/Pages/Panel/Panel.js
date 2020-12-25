import React from 'react';
import { history } from '../../../History' ;
import NavHeader from '../../Layout/Navigation/NavHeader';
import { PrayerInputForm, MainBanner } from './PanelStyles'
// import Codepen from '@styled-icons/boxicons-logos/Codepen'
import PrayerForm from '../../Layout/PrayerInputForm/PrayerForm';
import JesusPoster from '../../Assets/JesusPoster.jpg'

class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prayerData: []
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
                    <img src={JesusPoster} alt="Jesus" height={400} width={1919}/>
                    <p>dsjklfj</p>
                </MainBanner>
                <PrayerInputForm>
                    <PrayerForm/>
                </PrayerInputForm>
            </div>
        )
    }
}
export default Panel;
