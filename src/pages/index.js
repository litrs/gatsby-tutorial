import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from '../components/Button'
import { FaApple } from 'react-icons/fa';
import Section from '../components/section/section'
import Info from '../components/info'
import Dude from '../components/dude'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to='/products/'>
      <h1>Product Page
        </h1>
    </Link>

    <Info />
    <Link to="/images">images Page</Link>
    <h1 style={{ color: 'red' }}>Hi Nice</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Section />
      <Image />
      <Dude />
    </div>
    <FaApple />
    <Button> Iam styled </Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">Testing Page</Link>

  </Layout>
)



export default IndexPage
