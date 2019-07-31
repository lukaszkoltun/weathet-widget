import {Component} from 'react';
import WidgetDayListItem from './WidgetDayListItem.jsx'
import styled from  'styled-components';

const List = styled.ul`
    margin-bottom:0;
    @media(min-width: 530px){
        text-align: center;
    }
`


class WidgetDayList extends Component{

    render(){
        return <List>
            {this.props.data.map((item, index)=> <WidgetDayListItem key={index} index={index} data={item} day={this.props.day}/>)}
        </List>
    }
}

export default WidgetDayList;