import React from 'react';
import { User, FolderOpen, Trophy } from 'lucide-react';

const ContentSections = () => {
  const projects = [
    {
      title: 'E-Commerce Web App',
      description: 'Full-stack shopping platform with payment integration and user authentication.',
      tech: 'React • Node.js • MongoDB'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tech: 'JavaScript • Express • Socket.io'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics dashboard with charts and reporting capabilities.',
      tech: 'Python • Flask • Chart.js'
    }
  ];

  const achievements = [
    {
      title: 'LeetCode Problems Solved',
      description: '300+ coding problems across various difficulty levels',
      icon: Trophy
    },
    {
      title: 'CodeChef Rating',
      description: '3-Star rating with consistent contest participation',
      icon: Trophy
    },
    {
      title: 'Web Development Certification',
      description: 'Completed Full-Stack Web Development course with distinction',
      icon: Trophy
    }
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      {/* About Me Section */}
      <section className="portfolio-card">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-foreground">About Me</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          I'm a passionate Computer Science student with a strong foundation in problem-solving 
          and web development. I enjoy creating innovative solutions using modern technologies 
          and am always eager to learn new skills and take on challenging projects.
        </p>
      </section>

      {/* Projects Section */}
      <section className="portfolio-card">
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
        </div>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent font-medium">{project.tech}</span>
                <button className="text-primary hover:text-primary-glow text-sm font-medium">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="portfolio-card">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-foreground">Achievements</h2>
        </div>
        <div className="grid gap-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <IconComponent className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContentSections;