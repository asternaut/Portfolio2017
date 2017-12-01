import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default () => (
<Layout>
<img src="https://media-exp1.licdn.com/media/AAEAAQAAAAAAAAtUAAAAJDU4ODlmYTlhLTA2NmQtNDBjMS1iNDViLTNlOTg1NjQzNDQyYw.jpg" />
<h1> Sienna Scheid :: Profile </h1>
  <div className="aboutWrapper">

    <div className="markdown">
    <h3> At a glance: </h3>
      <Markdown source={`
- Early 20's
- Salt Lake City native (silicon slopes)
- Gemini
- Serial sunbather
- Hip and earthy
- Former college radio DJ
- Bike // Ski // Run // Climb // Be Kind
- Second home is Montana <3
      `}/>
    </div>
    <div className="essay">
      <h3> Essay Style: </h3>
  <Markdown source={`
  I'm a 20 something graphic designer / web designer / web developer based in SLC, Utah. Design is definitely my passion, and I love to use it as a tool for positive impact in my community and around the world. When I'm not doing creative things on my computer I'm probably doing creative things in my life. Hobbies include: photography, cooking, gardening, DIY/crafting, and getting outdoors!

  I'm spunky, independent, and the extroverts version of an introvert. I enjoy good beer and great chocolate after a long haul up a hill, cliff, or down steep slopes.

  But there's too many 'I's in this chunk of text now! We should probably just get to know each other:
  `}/>

      <div className="links">
        <a href="https://twitter.com/sugarcodingit" target="_blank"> twitter </a>
        <a href="https://www.linkedin.com/in/sienna-scheid-1486a1119/"target="_blank"> linkedin </a>
        <a href="https://github.com/asternaut"target="_blank"> github </a>
        <a href="https://www.pinterest.com/siennascheid/"target="_blank"> pinterest </a>
        <a href="https://www.instagram.com/siennaleelu/"target="_blank"> instagram </a>
        <a href="http://astrthought.tumblr.com/"target="_blank"> tumblr </a>
        <a href="https://soundcloud.com/sienna-scheid"target="_blank"> soundcloud </a>
      </div>
          <img className="signature" src={'/static/signature.png'} />
    </div>
  </div>

    <style jsx global>{`
      img{
        width: 100%;
      }
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
        width: 33%;
      }

      .essay {
        width: 66%;
        font-family: 'Montserrat';
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
