import React from 'react';
import HomeHero from './HomeHero';
import WhoWeAre from './WhoWeAre';
import SupportCategories from './SupportCategories';
import PopularFixes from './PopularFixes';
import BrandCoverage from './BrandCoverage';
import TopBlogsTopics from './TopBlogsTopics';

function Home() {
  return (
    <>
      <HomeHero />
      <WhoWeAre />
      <SupportCategories />
      <PopularFixes />
      <BrandCoverage />
      <TopBlogsTopics />
    </>
  );
}

export default Home;