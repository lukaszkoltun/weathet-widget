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
                    <P>Tuesday, {this.props.data.date}</P>
                    <P>{this.props.data.type}</P>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <div>
                        <img src={src} alt="cloud"/>
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