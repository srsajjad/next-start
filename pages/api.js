import { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default class extends Component {
  state = {
    data: {}
  }
  //   static async getInitialProps () {
  //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //     const json = await res.json()
  //     return {
  //       obj: json
  //     }
  //   }

  componentDidMount () {
    let self = this
    ;(async function () {
      const res = await fetch('https://api.github.com/repos/zeit/next.js')
      const json = await res.json()
      let data = {
        id: json.id,
        name: json.name,
        url: json.owner.url
      }
      self.setState({
        data
      })
    })()
  }

  render () {
    return (
      <div>
        <Head>
          <title>API Call</title>
        </Head>
        <Link prefetch href='/'>
          <a
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}
          >
            Home
          </a>
        </Link>
        <br />
        <Link prefetch href='/todo'>
          <a
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}
          >
            Todo From API Call
          </a>
        </Link>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    )
  }
}
