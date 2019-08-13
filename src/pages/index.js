import React from 'react';
import { Link } from 'gatsby';
import Topbar from '../components/topbar';
import Brand from '../components/brand';
import TopbarLink from '../components/topbarlink';
import Body from '../components/body';
import Footer from '../components/footer';

export default () => (
  <>
    <Topbar>
      <Brand text="Top Banta Chronicle" />
      <TopbarLink text="Home" />
      <TopbarLink text="Latest news" />
      <TopbarLink text="#bionicpenisman" />
    </Topbar>
    <Body name="hero-section" className="header-main" />
    <Footer>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </Footer>
  </>
);
