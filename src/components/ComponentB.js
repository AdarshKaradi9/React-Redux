import React, { Component } from 'react'
import { connect } from 'react-redux';
import { action } from '../action/action';
import PropTypes from 'prop-types'

class ComponentB extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    // on input change event listener
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    // on button click event listener
    onClick = (event) => {
        event.preventDefault();
        this.setState({ name: ""})
        this.props.action("")
    } 
    
    // on submit event listener
    onSubmit = (event) => {
        event.preventDefault();
        this.props.action(this.state.name)
    }

    render() {
        return (
            <div>
                <form onSubmit={ e => this.onSubmit(e) }>
                    <h2><strong>ComponentB</strong></h2>
                    <p>this is the first child of ComponentA</p>
                    <p>Enter something here: <input
                        type='text'
                        name='name'
                        onChange={this.onChange}
                        value={this.state.name}
                    />
                    <input type='submit'/> <input value="Clear" onClick = {this.onClick} type='button'/> 
                    </p> 
                        
                </form>
                
            </div>
        )
    }
}

// check the type of property passed to the component
ComponentB.propTypes = {
    action: PropTypes.func.isRequired,
}  

// Access the Redux store for the states present in it  
const mapStateToProps = state => ({
    name: state.name
})

// connect function from react-redux connects react component ComponentB to Redux store and the functions it can use to dispatch actions to the store
export default connect(mapStateToProps, {action})(ComponentB)