import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styled from 'styled-components';

const Header = styled.span`
    font-size: 25px;
    @media (min-width: 275px){
        font-size: 35px;
    }
`;
const P = styled.p`
    font-size: 10px;
    margin: 0;
    padding: 0;
    @media (min-width: 275px){
        font-size: 12px;
    }
`
const Temp = styled.span`
    font-size: 20px;
    @media (min-width: 275px){
        font-size: 25px;
    }
`;
const WidgetHeadList = styled.li`
    list-style-type: none;
    color: gray;
    font-size:10px;
    @media (min-width: 275px){
        font-size: 12px;
    }
`;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const sup = ['st','nd','rd','th'];

class WidgetHead extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: ''
        }
    }
    componentDidMount(){
        fetch(`http://dev-weather-api.azurewebsites.net/api/city`)
        .then(resp => resp.json())
        .then(arr => this.getCity(arr));
    }
    getCity(arr){
        for(let i = 0; i<arr.length; i++){
            if(arr[i].id == this.props.data.cityId){
                this.setState({city: arr[i].name});
                break;
            }
        }
    }
    getTheTip(num){
        num = num.toString();
        num = num[num.length-1];
        if(num == 1) return 'st';
        else if(num == 2) return 'nd';
        else  if(num == 3) return 'rd';
        else return 'th';
    }
    render(){
        const src = `../Assets/${this.props.data.type}.png`;
        return<Container>
            <Row>
                <Col>
                     <Header>{this.state.city}</Header>
                </Col>
            </Row>
            <Row>
                <Col>
                    <P>{days[this.props.day]}, {months[this.props.month]} {this.props.date}{this.getTheTip(this.props.date)}</P>
                    <P>{this.props.data.type}</P>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <div>
                        <img src={src} alt={this.props.data.type}/>
                        <Temp>{this.props.data.temperature}<sup>&deg;F</sup></Temp>
                    </div>
                </Col>
                <Col xs={6}><span>
                    <ul>
                        <WidgetHeadList>Precitipation: {this.props.data.precipitation}</WidgetHeadList>
                        <WidgetHeadList>Humidity: {this.props.data.humidity}%</WidgetHeadList>
                        <WidgetHeadList>Wind: {this.props.data.windInfo.speed}Mph {this.props.data.windInfo.direction}</WidgetHeadList>
                        <WidgetHeadList>Pollen Count: {this.props.data.pollenCount}</WidgetHeadList>
                    </ul></span>
                </Col>
            </Row>
        </Container>
    }
}

export default WidgetHead