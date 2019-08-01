import {Component} from 'react';
import styled from  'styled-components';

const ListItem = styled.li`
    list-style-type: none;
    border-top: 1px solid gray;
    font-size:10px;
    padding-left: 5%;
    min-height: 55px;
    @media (min-width: 275px){
        font-size: 12px;
    }
    @media (min-width: 530px){
        display: inline-block;
        border: none;
        width: 20%;
        padding: 0;
    }
    span{
        display: inline-block;
        width: 25%;
        @media(min-width:530px){
        font-size: 10px;
        display: block;
        width: 100%;
        }
        :first-child{
            @media(min-width: 530px){
                font-size: 10px;
            }
        }
        :last-child{
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
    getDay(index, day, arr){
        if(index == 0) return 'Today';
        else if(index+day >= arr.length) return arr[index+day-arr.length];
        else return arr[index+day];
    }
    render(){
        const src = `../Assets/${this.props.data.type}.png`;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return <ListItem>
                    <span><b>{this.getDay(this.props.index, this.props.day, days)}</b></span>
                    <span><img src={src}/></span>
                    <span>{this.props.data.temperature}<sup>&deg;</sup></span>
                    <span>Pollen <p>{this.props.data.pollenCount}</p></span>
        </ListItem>
    }
}


export default WidgetDayListItem;