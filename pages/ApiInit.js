import { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

export default class extends Component {
  state = {
    data: {
      name: 'Next Project'
    }
  }
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return {
      obj: json
    }
  }

  render () {
    console.log('init props', this.props)
    return (
      <div>
        <Head>
          <title>Get Initial Props</title>
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
        <pre>{JSON.stringify(this.props.obj, null, 2)}</pre>
      </div>
    )
  }
}
