import Link from 'next/link'
import Layout from '../components/MyLayout.js'

const linkStyle = {
  marginRight: 15,
}

export default function About() {
  return (
    <Layout>
      <p>Salim Abubakar</p>
      <div className='links'>
        <a style={linkStyle} href='/'>Github</a>
        <a style={linkStyle} href='/'>Twitter</a>
      </div>
      <style jsx>
    {
        `
        p {
            grid-row: 1;
            grid-column: 1;
        }
        a {
          gr
          marginRight: 15px;
          color: white;
          display: inline-block;
          transition: transform 0.3s ease-out;
        }

        a:hover { 
          transform: translate(3px, -5px);
        }

        .links {
          grid-area: 4/5
        }
        `
    }
    </style>
    </Layout>
  )
}
