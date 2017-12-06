import Link from 'next/link'


const Header = () => (
  <div style={{background: ' #F9FCFF'}}>
  <link href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Montserrat:400,700" rel="stylesheet" />

    <div className="navWrapperDesktop">
    <Link href="/index">
      <a><h1>Sienna Scheid </h1></a>
    </Link>
      <div className="linkStyle">
      <Link href="/web-design">
        <a>Web Design</a>
      </Link>
      <Link href="/marketing">
        <a>Marketing</a>
      </Link>
      <Link href="/branding">
        <a>Branding</a>
      </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>

    <div className="navWrapperMobile">
      <Link href="/index">
        <a><h1>Sienna Scheid </h1></a>
      </Link>

      <div className="linkStyle">
      <Link href="/web-design">
        <a>Web Design</a>
      </Link>
      <Link href="/marketing">
        <a>Marketing</a>
      </Link>
      <Link href="/branding">
        <a>Branding</a>
      </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        </div>

      </div>

      <style jsx global>{`
          h1{
            font-weight: 700;
            font-size: 227%;
          }

          .navWrapperDesktop{
            background: #F9FCFF;
            text-transform: uppercase;
            display: flex
            font-family: 'Montserrat', sans-serif;
            padding: 3% 6%;
            justify-content: space-between;
            width: 88%;
          }

          .navWrapperMobile{
            display: none;
          }

          .linkStyle{
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: row;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: bold;
            width: 60%;
          }

          .linkStyle a {
            font-weight: 100;
            color: #011627;
          }

          @media (max-width: 1100px) {
            .navWrapperDesktop{
              display: none;
            }
            .navWrapperMobile{
              display: flex;
              text-transform: uppercase;
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
        `}</style>
    </div>
)

export default Header
