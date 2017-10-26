import Layout from '../components/MyLayout.js'
import Link from 'next/link'

export default () => (
  <Layout>
    <Link href="/index">
      <a>← Back to mission log</a>
    </Link>

  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div>
      <h1> Branding </h1>
    </div>

    <wrapper className="Grid">
    <div className="individualProject">
      <img src={'/static/HPSC-red.png'} alt="" />
      <figcaption> <span> 01. </span> TECH MEETS HEALTH: the Health Services Platform Consortiuum (say that 3 times) was looking for a little logo love. They specialize in bringing together heath and medicine orient software for a fun plug-n-play environment.We are still in the process of creating the perfect logo, but I think this one is pretty sick!</figcaption>
    </div>

    <div className="individualProject">
      <img src={'/static/cr-demo.png'} alt="" />
      <figcaption> <span> 02. </span>MAKING CODE COOL: techy people are geeky people - trust me, Im one. But I (and all geeks I know) are also super awesome people! I wanted to show how cool coding makes you feel. Thus an edgy, trendy set of logos and design elements. The target audience, after all, is teenagers.</figcaption>
    </div>

    <div className="individualProject">
      <img src="http://78.media.tumblr.com/8191c91d7b4c83326b2341c7774cc607/tumblr_onn9xpOM1W1uf7do3o1_1280.jpg" alt="" />
      <figcaption> <span> > 03. </span>CLOTHING THAT DOES GOOD: way back when I helped build a little clothing collective. As a B Corp, building our community was part of our profit model. I wanted the logo to symbolize movement, passion, and style. We settled on simple black and white for elegance, a square frame for structure, and thick lines for sturdiness.</figcaption>
    </div>

    <div className="individualProject">
      <img src={'/static/Wylder-Logo-Mark-mtn.png'} alt="" />
      <figcaption> <span> 04. </span> GET CONCISE:  your logo is your brands face. Wylder has a lovely logotype, but is looking for a more succinct way to represent their brand. We are working hard at make a beautiful, timeless, recognizable design. Here is one of my ideas.</figcaption>
    </div>
  </wrapper>

  <div className="faq">
    <h3>What can you do for brands?</h3>
    <ul>
      <li>Logos</li>
      <li>Consulting</li>
      <li>Whatever you have in mind!</li>
    </ul>
  </div>

  <div className="anchors">
    <span> SEE MORE: </span>
    <Link href="/web-design">Web Design</Link>
    <Link href="/marketing">Marketing</Link>
  </div>


    <style jsx>{`
      h1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: 'Droid Sans Mono', sans-serif;
      }

      .individualProject{
        width: 60%;
        padding-bottom: 40px;
        margin: 0 auto;
      }
      img{
        width: 100%;
        -webkit-box-shadow: 0px 0px 23px 0px rgba(50, 50, 50, 0.33);
        -moz-box-shadow:    0px 0px 23px 0px rgba(50, 50, 50, 0.33);
        box-shadow:         0px 0px 23px 0px rgba(50, 50, 50, 0.33);
      }
      figcaption{
        padding: 10px 15px;
        border: 1px solid #E3E6E8;
        font-size: 10pt;
        line-height: 1.5em;
      }
      figcaption span{
        font-weight: bold;
      }
      a{
        cursor: pointer;
      }
      li{
        padding-bottom: 15px;
      }
      .faq{
        width: 60%;
        margin: 0 auto;
      }
      .anchors {
        display: flex;
        width: 40%;
        margin: 0 auto;
        justify-content: space-between;
        padding: 3% 0;
      }


      @media (max-width: 890px) {
       wrapper > div {
         width: 100%;
       }
       .faq{
         width: 100%;
       }
       .anchors{
         width: 100%;
         justify-content: space-around;
         font-size: 10pt;
       }
     }
      `}</style>
  </Layout>
)