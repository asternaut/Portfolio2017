import Link from 'next/link'


const Header = () => (
  <div style={{background: ' #F9FCFF'}}>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />

    <div className="navWrapperDesktop">
      <div className="linkStyle">
        <Link href="/about">
          <a>Profile</a>
        </Link>
        <Link href="/index">
          <a><h1>Sienna Scheid </h1></a>
        </Link>
        <Link href="/contact">
          <a>Radio Me</a>
        </Link>
      </div>
    </div>

    <div className="navWrapperMobile">
      <Link href="/index">
        <a><h1>Sienna Scheid </h1></a>
      </Link>

        <div className="linkStyle">
          <Link href="/about">
            <a>Profile</a>
          </Link>
          <Link href="/contact">
            <a>Radio Me</a>
          </Link>
        </div>

      </div>

      <p className="navSpan">Graphic + Web Design</p>

      <style jsx global>{`
          h1{
            font-weight: 700;
            font-size: 227%;
          }

          .navWrapperDesktop{
            background: #F9FCFF;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
          }

          .navWrapperMobile{
            display: none;
          }

          .navSpan{
            color: #5D6A75;
            font-family:'Montserrat', sans-serif;
            margin: 0;
            text-align: center;
          }

          .linkStyle{
            text-decoration: none;
            color: #FE5F55;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: row;
            width: 100%;
            padding: 3% 5% 0% 5%;
            text-transform: uppercase;
            letter-spacing: 1;
            font-weight: bold;
          }

          @media (max-width: 890px) {
            .navWrapperDesktop{
              display: none;
            }
            .navWrapperMobile{
              display: flex;
              text-transform: uppercase;
              flex-wrap: wrap;
              justify-content: center;
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
        `}</style>
    </div>
)

export default Header
