import Link from 'next/link'


const Jumbotron = () => (
  <div>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />
    <div className="firstImipression">
      <h1> hi! </h1>
      <img src={'/static/Snapchat-487113128-01.jpeg'} width="300px" alt="profile picture of sienna"/>
      <div className="greeting">
        <div>
          <p> <strong>If you are looking for the next design horizon,
           you came to the right place.</strong> </p>
           <p> Sienna is a trained web and graphic designer with experience in Full Stack Javascript, HTML/CSS, CMS platforms, and Adobe Creative Cloud apps!</p>
         </div>
      </div>
    </div>

    <style jsx>{`
      @import url('https://rsms.me/inter/inter-ui.css');

      body{
        font-family: 'Inter UI', sans-serif;
      }
      .firstImipression{
        display: flex;
        align-items: center;
        margin-bottom: 10%;
        background: #FF6978;
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
        top: 0;
        font-weight: 700;
      }
      .firstImipression img{
        margin-left: 14px;
      }
      .greeting p{
        margin: 0;
        font-size: 14pt;
        font-family: 'montserrat', sans-serif;
      }
      p strong{
        font-size: 18pt;
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
