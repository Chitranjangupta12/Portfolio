import React from 'react';
import BackgroundParticles from '../components/BackgroundParticles';
import ProfileSection from '../components/ProfileSection';
import SocialButtons from '../components/SocialButtons';
import ContentSections from '../components/ContentSections';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Particles */}
      <BackgroundParticles />
      
      {/* Main Portfolio Layout */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Left Side - Profile & Content */}
            <div className="lg:col-span-7 space-y-8">
              <ProfileSection />
              <ContentSections />
            </div>
            
            {/* Right Side - Social Buttons */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-8">
                <SocialButtons />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Subtle Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-background/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;
