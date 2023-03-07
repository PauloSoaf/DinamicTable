import React, { Component } from 'react'
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.methodsData.map((row, index)=> {
        return (
            <tr key={index}>
                <td>{row.method}</td>
                <td>{row.description}</td>
                <td>
                    <button onClick={() => props.removeMethod(index)}>Remove</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { methodsData, removeMethod } = props

    return (
        <table>
            <TableHeader />
            <TableBody methodsData={methodsData} removeMethod={removeMethod} />
        </table>
    )
}
export default Table