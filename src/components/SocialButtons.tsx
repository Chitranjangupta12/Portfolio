import React from 'react';
import { Github, Linkedin, Instagram, Code, Trophy } from 'lucide-react';

const SocialButtons = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      className: 'social-linkedin',
      href: 'https://www.linkedin.com/in/chitranjan-kumar-gupta/'
    },
    {
      name: 'Instagram', 
      icon: Instagram,
      className: 'social-instagram',
      href: 'https://www.instagram.com/chiku_gupta_050/'
    },
    {
      name: 'GitHub',
      icon: Github,
      className: 'social-github',
      href: 'https://github.com/Chitranjangupta12'
    },
    {
      name: 'LeetCode',
      icon: Code,
      className: 'social-leetcode',
      href: 'https://leetcode.com/u/chitranjangupta12/'
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      className: 'social-codechef',
      href: 'https://www.codechef.com/users/chitranjan28'
    }
  ];

  return (
    <div className="animate-fade-up space-y-4">
      <h3 className="text-xl font-bold text-center text-foreground mb-6">
        Connect With Me
      </h3>
      <div className="grid gap-3">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              className={`${social.className} flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium text-sm`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent size={20} />
              {social.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialButtons;