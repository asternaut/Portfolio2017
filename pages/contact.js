import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default () => (
<Layout>
<div className="margin-wrap">
  <div className="contactWrapper">
  <h1>Hit me up</h1>
    <p> I would love to be in touch! Please feel free to connect with me on the social media channels provided below!
    </p>
    <div className="markdown">
      <div className="links">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1fuKtaRNghcJV4T1BKGNfuZwe1kcFZZG8W8mDTtqEkd8iRQ/viewform?usp=sf_link" target="_blank"><strong>email</strong></a>
        <a href="https://www.linkedin.com/in/sienna-scheid-1486a1119/" target="_blank"> linkedin </a>
        <a href="http://astrthought.tumblr.com/" target="_blank"> tumblr </a>
        <a href="https://twitter.com/sugarcodingit" target="_blank"> twitter </a>
      </div>
    </div>
      <p className="petitText"> *For security reasons, I don't use forms on my website. Thanks for understanding!</p>
  </div>
</div>
    <style jsx global>{`
      .margin-wrap{
        margin: 3% 5%;
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

      .petitText{
        margin-top: 50px;
        color: grey !important;
        font-size: 10pt;
      }
      .links{
        display: flex;
        justify-content: space-between;
      }
      .links a {
        padding: 0 5px;
        border: 1px solid rgba(255, 105, 120, 0.23);
        border-radius: 3px;
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
