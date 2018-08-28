import { Component } from 'react'
import Head from 'next/head'
import css from './todo.css'

export default class extends Component {
  state = {
    inputVal: '',
    greetArr: [],
    showEdit: false,
    indexOfInput: null,
    inputinnerVal: ''
  }

  handleChange = e => {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleInnerChange = e => {
    this.setState({
      inputinnerVal: e.target.value
    })
  }

  handleRemove = e => {
    let arr = this.state.greetArr.filter(
      n => n !== e.target.parentNode.firstChild.data
    )
    this.setState({
      greetArr: arr
    })
  }

  handleEdit = (e, i) => {
    // console.dir(e.target)
    // console.dir(i)
    this.setState({
      showEdit: true,
      indexOfInput: i,
      inputinnerVal: e.target.parentNode.firstChild.data
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let arr = this.state.greetArr
    arr.push(this.state.inputVal)
    this.setState({
      greetArr: Array.from(new Set(arr)),
      inputVal: ''
    })
  }

  handleInnerInputSubmit = (e, i) => {
    let arr = this.state.greetArr
    arr[i] = this.state.inputinnerVal
    this.setState({
      showEdit: false,
      indexOfInput: null
    })
  }

  render () {
    return (
      <div>
        <Head>
          <title>Todo</title>
        </Head>
        <div className={css['add-greetings']}>Add Greetings:</div><br />
        {' '}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputVal}
            onChange={this.handleChange}
            type='text'
          />
          <br />
          <br />
          <button type='submit'>Click Me Please</button>
        </form>
        <br /><br />
        {this.state.greetArr.map((n, i) => (
          <div key={i}>
            <li>
              {this.state.showEdit && this.state.indexOfInput === i
                ? <form
                  onSubmit={e => {
                    e.preventDefault()
                    this.handleInnerInputSubmit(e, i)
                  }}
                  >
                  <input
                    value={this.state.inputinnerVal}
                    onChange={this.handleInnerChange}
                    type='text'
                    />
                </form>
                : n}
              {' '}
              <button
                onClick={e => {
                  this.handleEdit(e, i)
                }}
              >
                edit
              </button>
              {' '}
              <button onClick={this.handleRemove}>remove</button>
            </li>
            <br />
          </div>
        ))}
      </div>
    )
  }
}
