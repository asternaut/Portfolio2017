import Layout from '../components/MyLayout.js'
import Link from 'next/link'

export default () => (
  <Layout>
    <Link href="/index">
      <a>← Back to mission log</a>
    </Link>

  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div>
      <h1> Marketing </h1>
    </div>

    <wrapper className="Grid">

      <div className="individualProject">
        <img src={'/static/Fall-Winter-Ecstatic-Dance-Poster.jpg'} alt="" />
        <figcaption> <span> 01. </span> BRING OUT THE CROWDS: they key to a good poster is designing for your demographic. Ecstatic Dance wanted all the earthy, new age people in town to know quite a bit of information about their bi-weekly dance events. But most of all, to entice this crowd to turn up! I used vivid colors to communicate the excitement of the dances, but a sturdy font to lend credibility.  </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/seuss-quote.png'} alt="" />
        <figcaption> <span> 02. </span> THOUGHTFULLY: here is an example of a simple <a href="https://www.instagram.com/p/BTPFq-OApvg/?taken-by=volunteermso" target="_blank" >Instagram</a> square that was part of the National Volunteer Week campaign. </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/National-Volunteer-Week-long.png'} alt="" />
        <figcaption> <span> 03. </span> RAISING AWARENESS: this campaign promoted volunteering in the Missoula, MT community for local non-profit <a href="https://www.instagram.com/volunteermso/" target="_blank">Volunteer Missoula</a>.  </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/wylder-stickers.jpg'} alt="" />
        <figcaption> <span> 04. </span> FUN WITH STICKERS: Wylder needed a little promo swag, so we came up with three sticker designs. I went with bold rounded lines and subtle colors for a not-too-feminine and softly-rugged design. <a href="https://www.wyldergoods.com/products/wylder-sticker-pair" target="_blank"> (You can buy them here!)</a></figcaption>
      </div>

      <div className="individualProject">
        <img src="http://78.media.tumblr.com/0a46babc18060ad38178dc9a4c706fe8/tumblr_oaqa1oCKao1uf7do3o1_1280.png" alt="" />
        <figcaption> <span> 05. </span> POOL PARTY: my client wanted a summery, bold banner to promote their event, with one catch: add a penguin. After quite a few iterations we fell in love with this 80s inspired aesthetic. The cherry on top? A sweet little popsicle!</figcaption>
      </div>

      <div className="individualProject">
        <img src="https://78.media.tumblr.com/d372b54d1cfc9babcfd4701f3cf50572/tumblr_oynkrli8Dn1uf7do3o1_540.jpg" alt="" />
        <figcaption> <span> 06. </span> GEN Z STYLE: Code Rangers is a non-profit organization bringing code classes to youth in Montana. The promotional poster helps kids visually connect with the opportunity.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/Bozeman-Mag-Ad.jpg'} alt="" />
        <figcaption> <span> > 07. </span> DO IT ONLINE: a little web ad for a Montana Based code program. They wanted to appeal to the outdoorsy youthful crowd in Bozeman, hence the rock climber and subtle topography.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/Buttons-test.png'} alt="" />
        <figcaption> <span> > 08. </span>BUTTONS: what better way to get noticed in a community than to put physical things like buttons into circulation? I designed an icon for eight different sectors of the non-profit world. The idea was that people could come by a booth, pick a button that represented what they cared about most, and end up on some piece of cloth (like a jacket or backpack) that would not only remind them to volunteer but also spark conversations with others.</figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/Missoula-College-Opening-Invite-edit-0.jpg'} alt="" />
        <figcaption> <span> > 09. </span>GET SOCIAL: formal but fun invite for a small celebration with the University of Montana. We decided to use secondary brand colors to capture the open and futuristic opportunity that a new community college represents. </figcaption>
      </div>

      <div className="individualProject">
        <img src={'/static/weddinginvite - Copy.jpg'} alt="" />
        <figcaption> <span> > 10. </span>WEDDING INVITATION: a destination Colorado mountain wedding begs for an invitation full of watercolor-y etherealness and hand-painted scripts. I stuck to their wedding colors here (pastel pink and blue). I painted everything individually and then compiled the layers in photoshop. I was so pleased that this was a big hit! </figcaption>
      </div>

  </wrapper>

  <div className="faq">
    <h3>Can I see some live examples of your marketing?</h3>
    <ul>
      <li>Doubled Volunteer Missoula followers on their <a href="https://www.instagram.com/volunteermso/" target="_blank" >Instagram</a></li>
      <li>Ecstatic Dance SLC <a href="https://www.facebook.com/danceslc/?ref=br_rs" target="_blank"> Facebook </a> banners and cover photos</li>
    </ul>

    <h3>What do you use to design?</h3>
    <ul>
      <li>Illustrator</li>
      <li>Photoshop</li>
      <li>InDesign</li>
      <li>Lightroom</li>
      <li>Mixed media elements (illustrations, hand lettering, etc)</li>
      <li>Print shops</li>
    </ul>

    <h3> What kind of marketing materials can you make?</h3>
    <ul>
      <li>Social media content (Facebook/Twitter banners, graphics for posts and ads)</li>
      <li>Web banners and graphics</li>
      <li>Icons!</li>
      <li>Flyers and posters</li>
      <li>Newsletters and emails</li>
      <li>Presentations, documents, and proposals </li>
      <li>Invitations and cards</li>
      <li>T-shirts, buttons, stickers</li>
      <li>What do you have in mind?</li>
    </ul>
  </div>

  <div className="anchors">
    <span> SEE MORE: </span>
    <Link href="/web-design">Web Design</Link>
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
    .anchors{
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
