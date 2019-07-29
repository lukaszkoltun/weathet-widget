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
    render(){
        return<Container>
                <Row>
                    <Col>
                        <Header>New York, NY</Header>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <P>Tuesday, 16 Aprill 89th</P>
                        <P>Deszczowo</P>
                    </Col>
                </Row>
                <Row>
                   <Col xs={6}>
                        <div>
                            <img src='../Assets/cloudy.png'/>
                            <Temp>34<sup>&deg;F</sup></Temp>
                        </div>
                   </Col>
                   <Col xs={6}><span>
                       <ul>
                           <WidgetHeadList>Precitipation: 100%</WidgetHeadList>
                           <WidgetHeadList>Humidity: 97%</WidgetHeadList>
                           <WidgetHeadList>Wind: 4 Mph SW</WidgetHeadList>
                           <WidgetHeadList>Pollen Count: 36</WidgetHeadList>
                       </ul>
                    </span></Col>
                </Row>
            </Container>
    }
}

export default WidgetHead