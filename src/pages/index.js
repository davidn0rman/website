import React from 'react';
import { Link } from 'gatsby';
import Section from '../components/section';
import Topbar from '../components/topbar';
import Layout from '../components/layout';

export default () => (
  <div>
    <Topbar>
      <p>App name</p>
    </Topbar>
    <Section
      sectionText="Welcome to my world."
      name="hero-section"
      className="header-main"
    />
    <Layout>
      <h1 style={{ margin: `3rem auto`, maxWidth: 600 }}>
        Hi! I'm building a fake Gatsby site as part of a tutorial!
      </h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
    </Layout>
  </div>
);
