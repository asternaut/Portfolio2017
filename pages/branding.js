import Layout from '../components/MyLayout.js'
import Link from 'next/link'

export default () => (
  <Layout>
    <Link href="/index">
      <a className="backArrow">←</a>
    </Link>

  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div>
      <h1> Branding </h1>
    </div>

    <wrapper className="Grid">
    <div className="individualProject">
      <img src={'/static/hspc-logo-comp.png'} alt="" />
      <img src={'/static/HPSC-red.png'} alt="" />
      <figcaption> <span> 01. </span> TECH MEETS HEALTH: the Health Services Platform Consortium (say that 3 times) was looking for a little logo love. They specialize in bringing together health and medicine oriented software for a fun plug-n-play environment.We are still in the process of creating the perfect logo: these are two variations.</figcaption>
    </div>

    <div className="individualProject">
      <img src={'/static/cr-demo.png'} alt="" />
      <figcaption> <span> 02. </span>MAKING CODE COOL:techy people are geeky people - trust me, I'm one. But I (and all geeks I know) are also super awesome people! I wanted to show how cool coding makes you feel. Thus an edgy, trendy set of logos and design elements. The target audience, after all, is teenagers.
</figcaption>
    </div>

    <div className="individualProject">
      <img src="http://78.media.tumblr.com/8191c91d7b4c83326b2341c7774cc607/tumblr_onn9xpOM1W1uf7do3o1_1280.jpg" alt="" />
      <figcaption> <span> 03. </span>CLOTHING THAT DOES GOOD: way back when I helped build a little clothing collective. As a B Corp, building our community was part of our profit model. I wanted the logo to symbolize movement, passion, and style. We settled on simple black and white for elegance, a square frame for structure, and thick lines for sturdiness.</figcaption>
    </div>

    <div className="individualProject">
      <img src={'/static/di-logo.png'} alt="" />
      <figcaption> <span> 04. </span> HAVE FUN: logo design is HARD. I typically fill up pages with rejected doodles. That shouldn't mean it can't be fun! This logo design was inspired, oddly enough, by comic books and 3-D glasses. I used really bold elements, bright retro colors, and subtle halftone patterns for this design.</figcaption>
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


    <div className="faq">
      <h3> Where are the rest of your sites? </h3>
      <p>
          Glad you asked! I typically work on big projects (a few of which are still being built) that take lots of time and typically include other designers. Here are some examples of sites I have worked on, without designing the entire thing:
      </p>
      <ul>
        <li><a href="http://www.wyldergoods.com" target="_blank"> Wylder</a> - sustainable and ethical Women's outdoor shop
  The Olive Branch - fair trade shop. I updated inventory and took product photography.</li>
        <li><a href="https://the-olive-branch.shoplightspeed.com/" target="_blank"> The Olive Branch</a> - fair trade shop. I updated inventory and took product photography.</li>
        <li><a href="https://accessrvrental.com/rv-trip-planner-utah/" target="_blank"> Access RV Rental</a> - RV rentals. Many of the banners (jumbotron) are my design, and also check out the cool icons I made!</li>
        <li> And, of course, this one! I built it with Next.js and my super knowledge of JSX and JSS.</li>
      </ul>

      <h3>What kind of sites can you build?</h3>
      <ul>
        <li>Wordpress</li>
        <li>Standard HTML/CSS/JS</li>
        <li>Small React/Next.js apps</li>
        <li> Responsive, mobile-first / mobile-friendly </li>
      </ul>

      <h3> Why are you a web designer? </h3>
      <p>
        I started with graphic design but became entranced by the UX that web design offers. I love building things that are meant to be interacted with, tested, and changed. There are always new exciting ways to create websites and apps. I love learning and improving, so it's a natural fit!
      </p>
      <p>
        I have an AAS of Design (graduated 2016), Web Emphasis and attended a Full Stack Javascript Bootcamp (2017).
      </p>
      </div>

  <div className="anchors">
    <span> SEE MORE: </span>
    <Link href="/web-design">Web Design</Link>
    <Link href="/marketing">Marketing</Link>
  </div>


    <style jsx>{`
      @import url('https://rsms.me/inter/inter-ui.css');

      .backArrow{
        padding: 0px 5px;
        border-radius: 42px;
        font-size: 18pt;
        background:#5d6a755c;
        color: white;
        position: fixed;
        transition: transform 1s;
      }
      .backArrow:hover{
          transform: translate(-5px, 0px);
      }

      h1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: 'Inter UI', sans-serif;
      }

      .individualProject{
        width: 60%;
        padding-bottom: 110px;
        margin: 0 auto;
      }
      img{
        width: 100%;
      }
      figcaption{
        padding: 10px 15px;
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
