import Layout from '../components/MyLayout.js'
import Link from 'next/link'

export default () => (
  <Layout>
    <Link href="/index">
      <a>← Back to mission log</a>
    </Link>

  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div>
      <h1> Web Design </h1>
    </div>

    <wrapper className="Grid">


      <div className="individualProject">
        <img src={'/static/ppbd-capture.png'} alt="" />
        <figcaption> <span> 01. </span><a href="https://pressplayonthebryantsday.com/" target="_blank">WEDDING SITE</a>:  this cute couple wanted a super simple Wordpress to invite their friends and family to their wedding. We worked quickly and had this up in less than a week! It was a success and they happily celebrated their wedding day, worry-free.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/rvrd.png'} alt="" />
        <figcaption> <span> 02. </span><a href="http://rvrd.org/the-experience/" target="_blank">TAKE THE PERFECT TRIP</a>: while I am not a huge fan of RVing, I loved building a Wordpress site to help people design their perfect vacation (because I definitely love those). This site is 100% my design, and full of goodies. I even built out the Pinterest. Who knows, maybe you will find it useful! </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/Marketplace-Mission-Layout.png'} alt="" />
        <figcaption> <span> 03. </span> TRANSFORMING <a href="http://wyldergoods.com" target="_blank"> WYLDER</a>: Using Shopify/Liquid, I am in the process of updating and renovating many of Wylders pages!! </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/web-layout-pop.png'} alt="" />
        <figcaption> <span> 04. </span> DIGITAL IMPACT: Unfortunately this site is not live yet, but it will be full of pop! This is a mockup done in Adobe Illustrator. </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/grant-pro-group.PNG'} alt="" />
        <figcaption> <span> 05. </span><a href="https://www.grantprogroup.com/" target="_blank">GRANTS DONE RIGHT</a>: this site used to have multiple pages and looked a little outdated. We did a quick refresh by making it a single-scroller for mobile users, adding some cute hand-made icons, and giving it a slightly sleeker UI. This is a Wix site.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/Artboard 1 copy.png'} alt="" />
        <img src={'/static/Artboard 4 copy 3.png'} alt="" />
        <img src={'/static/Artboard 4 copy.png'} alt="" />
        <figcaption> <span> 06. </span> FREIGHT MONSTER: Here is a glimpse into a site I designed. It is currently in the works, so these are some of my mock-ups. They were done in Illustrator. I designed 100% of this, even the icons! This shows some UX/UI, depicting the navigation on desktop and mobile. </figcaption>
      </div>

      <div className="individualProject">
        <img src="http://78.media.tumblr.com/77cf7ccc5838d9dda805678bd4211abb/tumblr_ol0xbuPc2A1uf7do3o3_540.png" alt="" />
        <figcaption> <span> 07. </span> WIREFRAMING: This is what the birth of a website typically looks like! Hard to believe from these doodles, but the finished version took the silver medal at the National Skills USA 2016 competition. See my mockups on my <a href="http://astrthought.tumblr.com/post/156947727581/my-teammate-and-i-took-the-silver-medal-at" target="_blank">Tumblr Portfolio</a>.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/natlpark.PNG'} alt="" />
        <img src={'/static/Wylder-Icon-Key.png'} alt="" />
        <figcaption> <span> 08. </span> ICONS: I adore creating icons! Whether for web or print. They are a great mini-logo sort of challenge.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/snazzy.PNG'} alt="" />
        <figcaption> <span> 09. </span> JSON: I needed a Google-Map theme for an app I was working on, so I designed this in using JSON. You can test and use my map on <a href="https://snazzymaps.com/style/113526/perfect-form" target="_blank">Snazzy Maps</a>.</figcaption>
      </div>

  </wrapper>

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
      <Link href="/marketing">Marketing</Link>
      <Link href="/branding">Branding</Link>
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
