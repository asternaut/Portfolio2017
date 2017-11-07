import Link from 'next/link'

const ProjectLayout = () => (
  <div>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />

  <div className="anchors">
    <span> JUMP TO: </span>
    <Link href="/web-design">Web Design</Link>
    <Link href="/marketing">Marketing</Link>
    <Link href="/branding">Branding</Link>
  </div>
  <h1 href="#web"> WORKLOG: WEB DESIGN</h1>
    <wrapper className="projectWrapper">

      <div className="projectContentsColumn">
        <div className="individualProject">
          <img src={'/static/Marketplace-Mission-Layout.png'} alt="" />
        </div>
      </div>

      <div className="projectContentsColumn2">
        <div className="individualProject">
          <img src={'/static/web-layout-pop.png'} alt="" />
        </div>
      </div>
    </wrapper>

    <div className="callToAction">
      <Link href="/web-design"> I Wanna See More Web Design </Link>
      <div> </div>
    </div>


    <h1  href="#mark"> WORKLOG: MARKETING</h1>
      <wrapper className="projectWrapper">

        <div className="projectContentsColumn">
          <div className="individualProject">
            <img src={'/static/wylder-stickers.jpg'} alt="" />
          </div>

          <div className="individualProject">
            <img src="http://78.media.tumblr.com/0a46babc18060ad38178dc9a4c706fe8/tumblr_oaqa1oCKao1uf7do3o1_1280.png" alt="" />
          </div>
        </div>

        <div className="projectContentsColumn2">
          <div className="individualProject">
            <img src="https://78.media.tumblr.com/d372b54d1cfc9babcfd4701f3cf50572/tumblr_oynkrli8Dn1uf7do3o1_540.jpg" alt="" />
          </div>

          <div className="individualProject">
            <img src={'/static/National-Volunteer-Week-Poster.png'} alt="" />
          </div>

        </div>
      </wrapper>

      <div className="callToAction">
        <Link href="/marketing"> Show Me More Marketing Design! </Link>
        <div> </div>
      </div>


      <h1  href="#brand"> WORKLOG: BRANDING</h1>
        <wrapper className="projectWrapper">

          <div className="projectContentsColumn">
            <div className="individualProject">
              <img src={'/static/HPSC-red.png'} alt="" />
            </div>

            <div className="individualProject">
              <img src={'/static/cr-demo.png'} alt="" />
            </div>
          </div>

          <div className="projectContentsColumn2">
            <div className="individualProject">
              <img src="http://78.media.tumblr.com/8191c91d7b4c83326b2341c7774cc607/tumblr_onn9xpOM1W1uf7do3o1_1280.jpg" alt="" />
            </div>

            <div className="individualProject">
              <img src={'/static/Wylder-Logo-Mark-mtn.png'} alt="" />
            </div>
          </div>
        </wrapper>

        <div className="callToAction">
          <Link  href="/branding"> More Branding Please! </Link>
          <div> </div>
        </div>

    <style jsx>{`
      h1{
        margin-top: 6%;
        text-align: center;
      }
      img{
        width: 100%;
        -webkit-box-shadow: 0px 0px 23px 0px rgba(50, 50, 50, 0.33);
        -moz-box-shadow:    0px 0px 23px 0px rgba(50, 50, 50, 0.33);
        box-shadow:         0px 0px 23px 0px rgba(50, 50, 50, 0.33);
      }
      a{
        cursor: pointer;
      }

      .anchors{
        display: flex;
        width: 60%;
        margin: 0 auto;
        justify-content: space-between;
        padding: 3% 0;
      }

      .projectWrapper{
        display: flex;
      }

      .projectContentsColumn1{
        display: flex;
        flex-direction:column;
        padding: 2%;
        width: 100%;
      }

      .projectContentsColumn2{
        display: flex;
        flex-direction:column;
        padding: 2%;
        width: 100%;
      }

      .individualProject{
        width: 100%;
        margin-bottom: 40px;
      }

      .callToAction{
        text-align: center;
        width: fit-content;
        margin: 0 auto;
      }
      .callToAction div {
        border-bottom: 2px solid #ff6978;
        padding-top: 4px;
      }
      .callToAction a:hover{
        color: #FF6978 !important;
        transition: all 0.2s ease;
      }


      @media (max-width: 890px) {
        .anchors{
          width: 100%;
          justify-content: space-around;
          font-size: 10pt;
        }
        .projectWrapper{
          flex-wrap: wrap;
        }

      }
      @media (max-width: 390px) {
        .anchors{
          flex-wrap: wrap;
        }
    `}</style>
    </div>
)

export default ProjectLayout
