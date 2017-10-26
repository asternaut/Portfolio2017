import Layout from '../components/MyLayout.js'
import ProjectLayout from '../components/ProjectLayout.js'
import Link from 'next/link'

export default () => (
  <Layout>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div className="firstImipression">
{ /*     <img src="https://tse4.mm.bing.net/th?id=OIP.v3MO-UA5b5GtFpJDpxEsaQEsEs&pid=15.1" alt="astronaut illustration"/>
*/}
        <img src="http://78.media.tumblr.com/a5c883c6584b734e64cbde5cec58273c/tumblr_oj0fqpblZ21uf7do3o1_1280.jpg" width="300px" alt="girl with hair blowing drawing"/>
        <div className="greeting">
          <h1> hi! </h1>
          <div>
            <p> <strong>If you are looking for the next design horizon,
             you came to the right place.</strong> </p>
             <p> Sienna is a trained web and graphic designer with experience in Full Stack Javascript, HTML/CSS, CMS platforms, and Adobe Creative Cloud apps!</p>
           </div>
        </div>
      </div>

    <style jsx>{`
      body{
        font-family: 'Droid Sans Mono', sans-serif;
      }
      .firstImipression{
        display: flex;
        align-items: center;
        margin-bottom: 4%;
      }
      .greeting{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        border-bottom: 3px solid #0A100D;
        padding: 1em 2em;
        height: fit-content;
      }
      .greeting h1{
        margin: 0 12px 0 0;
        font-size: 32pt;
      }
      .greeting p{
        margin: 0;
      }
      p strong{
        font-size: 13pt;
      }
        @media (max-width: 890px) {
          .firstImipression{
            flex-direction: column;
          }
          .greeting{
            flex-wrap: wrap;
            padding: 2em 0;
          }
        }
    `}</style>

    <ProjectLayout />
  </Layout>
)
