import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        methods: []
    }
    removeMethod = (index) => {
        const { methods } = this.state

        this.setState({
            methods: methods.filter((method, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (method) => {
        this.setState({methods: [...this.state.methods, method] })
    }

    render() {
        const { methods } = this.state

        return (
            <div className="container">
                <h1>JavaScript</h1>
                <Table methodsData={methods} removeMethod={this.removeMethod}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default App