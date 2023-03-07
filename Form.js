import React, { Component } from "react"

class Form extends Component {
   initialState = {
    method: '',
    description: '',
   }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target
    
        this.setState({
        [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const { method, description } = this.state;
        
        return (
            <form>
            <label htmlFor="method">Method</label>
            <input
                type="text"
                name="method"
                id="method"
                value={method}
                onChange={this.handleChange} />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={this.handleChange} />
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;