import cowsay from 'cowsay-browser'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Cow Say</title>
    </Head>
    <pre>
      {cowsay.say({ text: 'hi there!' })}
    </pre>
  </div>
)
