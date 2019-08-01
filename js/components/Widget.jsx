import React from 'react';
import styled from 'styled-components';
import WidgetHead from './WidgetHead.jsx';
import WidgetDayList from './WidgetDayList.jsx';



const StyledWraper = styled.div`
    /* min-height: 257px; */
    max-width: 563px;
    -webkit-box-shadow: 5px 5px 12px 4px rgba(184,184,184,0.46);
    -moz-box-shadow: 5px 5px 12px 4px rgba(184,184,184,0.46);
    box-shadow: 5px 5px 12px 4px rgba(184,184,184,0.46);
`;

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
const day = date.getDay();


class Widget extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 1,
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
        return<StyledWraper>
                <WidgetHead data={this.state.obj[0]} day={day} date={date.getDate()} month={date.getMonth()} city={this.props}/>
                <WidgetDayList data={this.state.obj} day={day} />
            </StyledWraper>
    }
}

export default Widget;
