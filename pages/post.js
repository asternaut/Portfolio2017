import Layout from '../components/MyLayout.js'
import Markdown from 'react-markdown'

export default (props) => (
  <Layout>
   <h1>{props.url.query.title}</h1>
   <div className="markdown">
     <Markdown source={`

1. Favorite font? Montserrat (this typography is Montserrat!)
2. If I was a Pantone swatch I think I'd be [2225 U](http://68.media.tumblr.com/b0541a2368fed8ec0f33e5d410496bf0/tumblr_ob96x38k851uf7do3o1_400.jpg)
3. Yes I use a Wacom
4. CSS over JSS purely because syntax
5. I think minimalism is overrated
6. I code in atom but I also like brackets

     `}/>
   </div>
   <style jsx global>{`
     .markdown {
       font-family: 'Montserrat';
     }

     .markdown a {
       text-decoration: none;
       color: grey;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

  `}</style>
  </Layout>
)
