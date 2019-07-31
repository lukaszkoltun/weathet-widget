import {Component} from 'react';
import styled from  'styled-components';

const List = styled.ul`
    margin-bottom:0;
    @media(min-width: 530px){
        text-align: center;
    }
`

const ListItem = styled.li`
    list-style-type: none;
    border-top: 1px solid gray;
    font-size:10px;
    padding-left: 5%;
    @media (min-width: 275px){
        font-size: 12px;
    }
    @media (min-width: 530px){
        display: inline-block;
        border: none;
        width: 14.2%;
        padding: 0;
    }
    span{
        display: inline-block;
        width: 25%;
        @media(min-width:530px){
        display: block;
        width: 100%;
        }
        :last-child{
            border: 1px solid red;
            text-align: center;
            p{
                @media(min-width:325px){
                    display:inline;
                }
            }
        }
    }
`;


class WidgetDayListItem extends Component{
    render(){
        return <ListItem>
                    <span><b>Today</b></span>
                    <span><img src='../Assets/cloudy.png'/></span>
                    <span>40<sup>&deg;</sup></span>
                    <span>Pollen <p>36</p></span>
        </ListItem>
    }
}

class WidgetDayList extends Component{
    render(){
        return <List>
            <WidgetDayListItem/>
            <WidgetDayListItem/>
            <WidgetDayListItem/>
            <WidgetDayListItem/>
            <WidgetDayListItem/>
            <WidgetDayListItem/>
            <WidgetDayListItem/>
        </List>
    }
}

export default WidgetDayList;