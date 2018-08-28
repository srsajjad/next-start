import CowMsg from './cowsay'
import Todo from './todo'
import API from './api'
import css from './index.css'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <h1 className={css.h1 + ' hola'}>Hola</h1>
    <div className={css.hamba}><CowMsg /></div>
    <Todo />
    <h3>API Call</h3>
    <div>

      <Link prefetch href='/api'>
        <a style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}>
          Click TO See JSON
        </a>
      </Link>{' '}

    </div>
    <style global jsx>{`
      body {
        background: #F3F1FF;
      }
    `}</style>
    <Head>
      <title>Home</title>
    </Head>
  </div>
)
