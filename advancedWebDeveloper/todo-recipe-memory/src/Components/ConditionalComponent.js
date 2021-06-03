import React, { Component } from 'react';

const ConditionalComponent = props => {
        if (props.conditionOk) return props.insideComponent
        else return null;
}

export default ConditionalComponent;