import React, { Component } from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                <h1>ComponentA</h1><hr/>
                <div><ComponentB /></div><hr/>
                <div><ComponentC /></div>
            </div>
        )
    }
}
