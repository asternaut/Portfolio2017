import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default () => (
<Layout >
<img src="https://media.licdn.com/dms/image/C5616AQHMXlBqkZk0og/profile-displaybackgroundimage-shrink_350_1400/0?e=1535587200&v=beta&t=7B3wFUdGBE9CFGA4NCQTG2VQP7OEYKy1YA5YtSwrsnE" />

<div className="margin-wrap">
  <div className="aboutWrapper">

    <div className="markdown">
    <h3> Skills: </h3>
      <Markdown source={`
- Graphic + Web Design
- HTML 5 / CSS 3 / SASS / LESS
- Adobe AI / PS / ID / XD / Lightroom
- CMS (Wordpress, Shopify, etc)
- Git + FTP
- Experience with Angular/React/Next
- Photography
- Web development
      `}/>
    </div>
    <div className="essay">
      <h3> Essay Style: </h3>
  <Markdown source={`
  I'm a 20 something graphic designer / web designer / web developer based in SLC, Utah. Design is definitely my passion, and I love to use it as a tool for positive impact in my community and around the world. When I'm not doing creative things on my computer I'm probably doing creative things in my life. Hobbies include: photography, cooking, gardening, DIY/crafting, and getting outdoors!

  I'm spunky, independent, and sunny. I enjoy good beer and great chocolate after a long haul up a hill or cliff, or down steep slopes.

  But there's too many 'I's in this chunk of text now! We should probably just get to know each other:
  `}/>

      <div className="links">
        <a href="https://www.linkedin.com/in/sienna-scheid-1486a1119/"target="_blank"> linkedin </a>
        <a href="https://github.com/asternaut"target="_blank"> github </a>
        <a href="https://www.pinterest.com/siennascheid/"target="_blank"> pinterest </a>
        <a href="https://www.instagram.com/siennaleelu/"target="_blank"> instagram </a>
        <a href="http://astrthought.tumblr.com/"target="_blank"> tumblr </a>
        <a href="https://twitter.com/sugarcodingit" target="_blank"> twitter </a>
        <a href="https://soundcloud.com/sienna-scheid"target="_blank"> soundcloud </a>
      </div>
          <img className="signature" src={'/static/signature.png'} />
    </div>
  </div>
</div>

    <style jsx global>{`
      .margin-wrap{
        margin: 1% 5%;
      }
      img{
        width: 100%;
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
        width: 33%;
      }

      .essay {
        width: 66%;
        font-family: 'Montserrat';
        line-height: 1.5em;
      }

      .links{
        display: flex;
        justify-content: space-between;
      }

      .links a{
        padding: 0 3px;
      }

      .signature{
        width: 151px;
        padding-top: 25px;
      }

        @media (max-width: 890px) {
          .aboutWrapper{
            flex-wrap: wrap;
          }
          .aboutWrapper div{
            padding: 0;
          }
          .markdown{
            width: 100%;
          }
          .essay{
            width: 100%;
          }
          .links{
            flex-direction: column;
          }
          .links a {
            padding: 3px 0;
          }
        }

   `}</style>
    </Layout>
)
