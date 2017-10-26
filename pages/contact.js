import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default () => (
<Layout>
<h1> Sienna Scheid :: Contact </h1>
  <div className="contactWrapper">
    <p> I would love to be in touch! Please feel free to email me or connect with me on the social media channels provided below!
    </p>

    <div className="markdown">
      <div className="links">
        <p> siennascheid@gmail.com </p>
        <a href="https://twitter.com/sugarcodingit" target="_blank"> twitter </a>
        <a href="https://www.linkedin.com/in/sienna-scheid-1486a1119/" target="_blank"> linkedin </a>
        <a href="http://astrthought.tumblr.com/" target="_blank"> tumblr </a>

      </div>
    </div>
  </div>

    <style jsx global>{`
      h1{
        text-transform: uppercase;
      }
      .aboutWrapper{
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .aboutWrapper div{
        padding-right: 25px;
      }
      .markdown {
        font-family: 'Montserrat';
        line-height: 1.5em;
        width: 50%;
      }
      .markdown p{
        margin: 0;
      }
      .links{
        display: flex;
        justify-content: space-between;
      }
      .links a {
        padding: 0 5px;
      }

        @media (max-width: 890px) {
          .markdown {
            width: 100%;
          }
          .links{
            flex-wrap: wrap;
            flex-direction: column;
          }
          .links a{
            padding: 5px 0;
          }
        }

   `}</style>
    </Layout>
)
