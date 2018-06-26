import Layout from '../components/MyLayout.js'
import ProjectLayout from '../components/ProjectLayout.js'
import Jumbotron from '../components/Jumbotron.js'
import Link from 'next/link'


export default () => (
<div>
  <Layout>
  <Jumbotron />
    <ProjectLayout />
  </Layout>
  </div>
)
