import Header from './Header'
import Footer from './Footer'
import Markdown from 'react-markdown'

const layoutStyle = {
  padding: '4% 14%',
  margin: '0',
  background: '#F9FCFF',
  color: '#011627',
  fontFamily: 'Droid Sans Mono, sans-serif',
  minHeight: '100vh',
  position: 'relative',
}

const Layout = (props) => (
  <div>
  <link rel="icon"
      type="image/x-icon"
     src={'/static/favicon.ico'}/>
  <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <link rel="shortcut icon" src={'/static/favicon.io'} type="image/x-icon" />
  <link rel="icon" src={'/static/favicon.io'} type="image/x-icon" />
    <Header />
    <div style={layoutStyle}>
      {props.children}

    <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Droid Sans Mono', sans-serif;
          color: #0A100D;
          background: #F9FCFF;
          padding: 0;
          height: 100%;

}
        }
        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: #FF6978;
          opacity: 1;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        a:hover {
          opacity: 0.9;
        }
        p{
          font-size: 12pt;
        }
      `}</style>
      </div>
      <Footer />
  </div>
)

export default Layout
