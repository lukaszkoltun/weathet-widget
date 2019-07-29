import React from 'react';
import styled from 'styled-components';
import WidgetHead from './WidgetHead.jsx';


const StyledWraper = styled.div`
    min-height: 257px;
    max-width: 563px;
    border: 1px solid gray;
`;

class Widget extends React.Component{
    render(){
        return <StyledWraper>
            <WidgetHead/>
        </StyledWraper>
    }
}

export default Widget;
