import Link from 'next/link'

const ProjectLayout = () => (
  <div>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />


    <wrapper className="projectWrapper">

      <div className="projectContentsColumn">
        <div className="individualProject">
          <a href="#img1">
            <img src={'/static/Marketplace-Mission-Layout.png'} alt="" />
          </a>
        </div>
        <a href="#_" className="lightBox" id="img1">
          <img src={'/static/Marketplace-Mission-Layout.png'}/>
        </a>
      </div>

      <div className="projectContentsColumn2">
        <div className="individualProject">
          <a href="#img2">
            <img src={'/static/web-layout-pop.png'} alt="" />
          </a>
        </div>
        <a href="#_" className="lightBox" id="img2">
          <img src={'/static/web-layout-pop.png'} alt="" />
        </a>
      </div>
    </wrapper>

      <wrapper className="projectWrapper">

        <div className="projectContentsColumn">
          <div className="individualProject">
            <a href="#img3">
              <img src={'/static/wylder-stickers.jpg'} alt="" />
            </a>
          </div>
          <a href="#_" className="lightBox" id="img3">
              <img src={'/static/wylder-stickers.jpg'} alt="" />
          </a>

          <div className="individualProject">
          <a href="#img4">
              <img src="http://78.media.tumblr.com/0a46babc18060ad38178dc9a4c706fe8/tumblr_oaqa1oCKao1uf7do3o1_1280.png" alt="" />
          </a>
          </div>
          <a href="#_" className="lightBox" id="img4">
            <img src="http://78.media.tumblr.com/0a46babc18060ad38178dc9a4c706fe8/tumblr_oaqa1oCKao1uf7do3o1_1280.png" alt="" />
          </a>
        </div>

        <div className="projectContentsColumn2">
          <div className="individualProject">
          <a href="#img5">
            <img src="https://78.media.tumblr.com/d372b54d1cfc9babcfd4701f3cf50572/tumblr_oynkrli8Dn1uf7do3o1_540.jpg" alt="" />
          </a>
          </div>
          <a href="#_" className="lightBox" id="img5">
            <img src="https://78.media.tumblr.com/d372b54d1cfc9babcfd4701f3cf50572/tumblr_oynkrli8Dn1uf7do3o1_540.jpg" alt="" />
          </a>

          <div className="individualProject">
            <a href="#img6">
              <img src={'/static/National-Volunteer-Week-Poster.png'} alt="" />
            </a>
          </div>
          <a href="#_" className="lightBox" id="img6">
            <img src={'/static/National-Volunteer-Week-Poster.png'} alt="" />
          </a>
        </div>
      </wrapper>

        <wrapper className="projectWrapper">

          <div className="projectContentsColumn1">
            <div className="individualProject">
              <a href="#img7">
                <img src={'/static/HPSC-red.png'} alt="" />
              </a>
            </div>
            <a href="#_" className="lightBox" id="img7">
              <img src={'/static/HPSC-red.png'} alt="" />
            </a>

            <div className="individualProject">
              <a href="#img8">
                <img src={'/static/cr-demo.png'} alt="" />
              </a>
            </div>
          </div>
          <a href="#_" className="lightBox" id="img8">
            <img src={'/static/cr-demo.png'} alt="" />
          </a>

          <div className="projectContentsColumn2">
            <div className="individualProject">
              <a href="#img9">
                <img src="http://78.media.tumblr.com/8191c91d7b4c83326b2341c7774cc607/tumblr_onn9xpOM1W1uf7do3o1_1280.jpg" alt="" />
              </a>
            </div>
            <a href="#_" className="lightBox" id="img9">
              <img src="http://78.media.tumblr.com/8191c91d7b4c83326b2341c7774cc607/tumblr_onn9xpOM1W1uf7do3o1_1280.jpg" alt="" />
            </a>

            <div className="individualProject">
              <a href="#img10">
                <img src={'/static/di-logo.png'} alt="" />
              </a>
            </div>
            <a href="#_" className="lightBox" id="img10">
              <img src={'/static/di-logo.png'} alt="" />
            </a>
          </div>
        </wrapper>


    <style jsx>{`
      @import url('https://rsms.me/inter/inter-ui.css');
      h1{
        margin-top: 6%;
        text-align: center;
      }
      img{
        width: 100%;

      }
      a{
        cursor: pointer;
        text-decoration: none;
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


      .lightBox{
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        text-align: center;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
        display: none;
      }

      .lightBox img{
        max-height: 92%;
        width: auto;
      }

      .lightBox:target{
        outline: none;
        display: block;
        opacity: 1;
        display: flex;
        justify-content: center;
        align-items: center;
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
      @media (max-width: 390px){
        .anchors{
          flex-wrap: wrap;
        }

    `}</style>
    </div>
)

export default ProjectLayout
