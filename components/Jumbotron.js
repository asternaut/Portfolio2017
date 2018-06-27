import Link from 'next/link'


const Jumbotron = () => (
  <div className="indexFoldWrapper">
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
  <div className="navWrapperDesktopd">
  <Link href="/index">
    <a><h1>Sienna Scheid </h1></a>
  </Link>
    <div className="linkStyle">
    <Link href="/work">
      <a>Work</a>
    </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </div>

  <div className="navWrapperMobiled">
    <Link href="/index">
      <a><h1>Sienna Scheid </h1></a>
    </Link>

    <div className="linkStyle">
    <Link href="/work">
      <a>Work</a>
    </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      </div>
      </div>
    <div className="firstImipression">
      <h1> hi! </h1>
      <img src={'/static/Snapchat-487113128-01.jpeg'} width="300px" alt="profile picture of sienna"/>
      <div className="greeting">
        <div>
          <p> <strong>Unique and professional design.</strong> </p>
           <p> Sienna is a trained web and graphic designer with experience in Full Stack Javascript, HTML/CSS, CMS platforms, and Adobe Creative Cloud apps!</p>
         </div>
      </div>
    </div>

    <style jsx>{`
      @import url('https://rsms.me/inter/inter-ui.css');
      h1{
        font-weight: 100;
        font-size: 227%;
        color: #F9FCFF;
      }

      .navWrapperDesktopd{

        text-transform: lowercase;
        display: flex
        font-family: 'Montserrat', sans-serif;
        padding: 3% 6%;
        justify-content: space-between;
        width: 88%;
      }

      .navWrapperMobiled{
        display: none;
      }

      .linkStyle{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        text-transform: lowercase;
        letter-spacing: 1px;
        font-weight: bold;
        width: 40%;
      }

      .linkStyle a {
        font-weight: 100;
        color: #F9FCFF;
      }

      .linkStyle a:active{
        font-weight: bold;
      }

      @media (max-width: 1100px) {
        .navWrapperDesktopd{
          display: none;
        }
        .navWrapperMobiled{

          text-transform: lowercase;
          display: flex
          font-family: 'Montserrat', sans-serif;
          flex-wrap: wrap;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
        }
        h1{
          margin: 30px 0 15px 0;
        }
        .linkStyle{
          padding-bottom: 20px;
        }
        .navSpan{
          font-size: 10pt;
          text-align: center;
          padding-bottom: 30px;
        }

        }
        @media (max-width: 950px) {
          .linkStyle{
                flex-direction: column;
          }
          .linkStyle a{
            padding-bottom: 12px;
          }
        }

        @media (max-width: 500px){

        }

      body{
        font-family: 'Inter UI', sans-serif;
      }

      .indexFoldWrapper{
        animation: 50000ms ease-in-out infinite color-change;
      }

      @keyframes color-change {
        0% {
          background-color: #FF6978;
        }
        20% {
          background-color: #ff69c3;
        }
        40% {
          background-color: #ffa569;
        }
        60% {
          background-color: #f069ff;
        }
        80% {
          background-color: #a569ff;
        }
        100% {
          background-color: #FF6978;
        }
      }

      .firstImipression{
        display: flex;
        align-items: center;
        margin-bottom: 10%;
        padding: 0 9% 65px 9%;
      }

      .greeting{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        padding: 1em 2em;
        height: fit-content;
        color: #F9FCFF;
      }
      .firstImipression h1{
        border: 5px solid white;
        padding: 13px;
        position: absolute;
        top: 130px;
        font-weight: 700;
      }
      .firstImipression img{
        margin-left: 14px;
      }
      .greeting p{
        margin: 0;
        font-size: 14pt;
        font-family: 'montserrat', sans-serif;
        line-height: 1.5em;
      }
      p strong{
        font-size: 28pt;
    padding-bottom: 16px;
    font-family: 'montserrat', sans-serif;
    display: block;
    font-weight: 100;
      }
        @media (max-width: 890px) {
          .firstImipression{
            flex-direction: column;
          }
          .firstImipression h1{
            position: relative;
            top: -10px;
          }
          .firstImipression img{
            margin-left: 0px;
          }
          .greeting{
            flex-wrap: wrap;
            padding: 2em 0;
            text-align: center;
          }
        }
    `}</style>
    </div>
)

export default Jumbotron
