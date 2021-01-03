import React, { Component } from 'react'
import { connect } from 'react-redux'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <h2><p><strong>ComponentC</strong></p></h2>
                <p>this is the second child of ComponentA</p>
                <div>Input value from ComponentB: <i>{this.props.name}</i></div>
            </div>
            
        )
    }
}

// Access the Redux store for the states present in it  
const mapStateToProps = state => ({
    name: state.name
})

// connect function from react-redux connects ComponentC to Redux store
export default connect(mapStateToProps, {})(ComponentC)