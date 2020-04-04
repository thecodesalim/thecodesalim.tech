import Header from './Header'

const layoutStyle = {
  fontFamily: 'Cutive Mono, monospace',
  background: 'rgb(63,94,251)',
  background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',  
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  display: 'grid',
  height: '90vh',
  gridTemplateRows: "1fr 1fr 1fr 0.1fr",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 0.1fr",
  color: 'white'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');
          body {
            background: black;
          }
        `}
      </style>
    </div>
  )
}
