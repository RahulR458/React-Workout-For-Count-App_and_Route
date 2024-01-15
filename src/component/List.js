import React, { Component } from 'react'


export default class List extends Component {

    state = {
        list: [
            {
                id: 1,
                name: "Jhon",
                age: 25
            },
            {
                id: 2,
                name: "Lal",
                age: 30
            }
        ]
    }


  render() {
    return (
      <div>
        <h1>List</h1>
        <ul>
            {this.state.list.map((value,index) => {
                return(
                    <li key={value.id}> {value.id} - {value.name} - {value.age} </li>
                )
            })}
        </ul>
      </div>
    )
  }
}
