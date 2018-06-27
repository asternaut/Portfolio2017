import Layout from '../components/MyLayout.js'
import ProjectLayout from '../components/ProjectLayout.js'
import Jumbotron from '../components/Jumbotron.js'
import Link from 'next/link'


export default () => (
<div>

  <Jumbotron />

    <ProjectLayout />
    <style jsx global>{`
        body {
            @import url('https://rsms.me/inter/inter-ui.css');
          margin: 0;
          font-family: 'Inter UI', sans-serif;
          color: #0A100D;
          background: #F9FCFF;
          padding: 0;
          height: 100%;
}
        .margin-wrap{
          margin: 1% 5%;
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
)
