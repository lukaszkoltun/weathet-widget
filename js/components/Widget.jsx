import React from 'react';
import styled from 'styled-components';
import WidgetHead from './WidgetHead.jsx';
import WidgetDayList from './WidgetDayList.jsx'


const StyledWraper = styled.div`
    /* min-height: 257px; */
    max-width: 563px;
    border: 1px solid gray;
`;

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
const day = date.getDay();


class Widget extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 2,
            obj: []
        }
    }
    componentDidMount(){
        fetch(`http://dev-weather-api.azurewebsites.net/api/city/${this.state.id}/weather?date=${today}`)
        .then(resp => resp.json())
        .then(data => this.setState({obj: data}));
    }

    render(){
        if(!this.state.obj[1]){
            return <div>Loading...</div>
        }
        return <StyledWraper>
                <WidgetHead data={this.state.obj[0]} day={day} date={date.getDate()} month={date.getMonth()}/>
                <WidgetDayList data={this.state.obj} day={day} />
            </StyledWraper>
    }
}

export default Widget;
