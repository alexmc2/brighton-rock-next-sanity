import React from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import CooperativeSection from '@/components/CooperativeSection';
import Gallery from '@/components/Gallery';
import { getHomePage } from '@/sanity/sanity-utils';

export default async function HomePage() {
  const homePageContent = await getHomePage();
  console.log('Home Page Content:', homePageContent);

  return (
    <div>
      <Hero
        title="Welcome to Brighton Rock"
        description="A small housing co-op established in 1987, located in West Hove"
        showLogo={true}
      />
      {homePageContent ? (
        <>
          <AboutSection
            title={homePageContent.aboutTitle}
            content={homePageContent.aboutContent}
          />
          <CooperativeSection
            title={homePageContent.cooperativeTitle}
            content={homePageContent.cooperativeContent}
          />
          <Gallery
            title={homePageContent.galleryTitle}
            images={homePageContent.galleryImages}
          />
        </>
      ) : (
        <div>Error loading home page content.</div>
      )}
    </div>
  );
}
