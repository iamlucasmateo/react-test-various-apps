import React, { Component } from 'react';

const Square = props => (
    <div 
        style={{
            width:'100px',
            height:'100px',
            backgroundColor: props.color,
            border: '1px solid black',
            borderRadius: '20px',
        }}
    />
)

export default Square