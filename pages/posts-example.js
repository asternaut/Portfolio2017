function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hey, what\'s her style?'},
    { id: 'learn-nextjs', title: 'Show me some of your work!'},
    { id: 'deploy-nextjs', title: 'What\'s a typical day like?'},
  ]
}

// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//     `}</style>
//   </li>
// )

// <span> My full website is in the works, but until then I have this little teaser ;)</span>
// <ul>
//   {getPosts().map((post) => (
//     <PostLink key={post.id} post={post}/>
//   ))}
// </ul>
<style jsx>{`
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
  }
`}</style>
