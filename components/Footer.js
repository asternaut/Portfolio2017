import Link from 'next/link'

const Footer = () => (
  <footer className="footerPosition">
  <div className="footerStyle">
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div className="footWrapper">
      <div className="linkStyle">
        <Link href="/about">
          <a >About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className="socialStyle">
      <Link>
        <a href="https://www.linkedin.com/in/sienna-scheid-1486a1119/" target="_blank">
          <img src="" />
        Linked In</a>
      </Link>
      <Link>
        <a  href="https://github.com/asternaut" target="_blank">
        <img src=""/>
        Github</a>
      </Link>
      <Link>
        <a  href="http://astrthought.tumblr.com/" target="_blank">
        <img src=""/>
        Tumblr Portfolio</a>
      </Link>
      </div>
    </div>
      <span>  © Sienna Scheid 2017</span>
      </div>

      <style jsx>{`
          @import url('https://rsms.me/inter/inter-ui.css');
        .footerPosition{
          width: 100%;
          bottom: 0;
        }

        .footerStyle{
          background: #011627;
          font-family: 'Inter UI', sans-serif;
          padding: 2% 5% 5px 5%;
          color: #5D6A75;
        }

        .footWrapper{
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          text-align: center;
          padding-bottom: 2%;

        }

        .linkStyle{
          text-decoration: none;
          color: #FE5F55;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: flex-start;
          width: 20%;
          padding: 0 20px;
          textTransform: uppercase;
        }

        .socialStyle{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 40%;
          flex-wrap: nowrap;
          padding: 0 20px;

        }
        @media (max-width: 890px) {
          .footerPosition{
            display: block;
          }
          .footerStyle{
            font-size: 10pt;
          }
          .linkStyle{
            flex-direction: column;
            justify-content: flex-start;
          }
          .socialStyle{
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
          a{
            padding-bottom: 5px ;
          }
       }
        `}</style>

    </footer>
)

export default Footer
