import React from 'react';
import { Mail } from 'lucide-react';
import profileImage from '../assets/chiku.jpg';

const ProfileSection = () => {
  return (
    <div className="animate-fade-left space-y-6">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="profile-glow">
          <img
            src={profileImage}
            alt="Chitranjan Gupta - Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Chitranjan Gupta
        </h1>
        <p className="text-lg text-foreground-muted font-medium">
          B.Tech || CSE || RKGIT'27
        </p>
        
        {/* Skills */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-accent">Skills</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Web Development • Python • C • Java DSA • SQL
          </p>
        </div>

        {/* Gmail */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Mail size={16} />
          <span className="text-sm">chitranjangupta40@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;