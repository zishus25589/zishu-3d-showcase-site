import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
const skills = [{
  name: "JavaScript",
  level: 95
}, {
  name: "TypeScript",
  level: 90
}, {
  name: "React",
  level: 95
}, {
  name: "Node.js",
  level: 85
}, {
  name: "Next.js",
  level: 80
}, {
  name: "Three.js",
  level: 80
}, {
  name: "CSS/SCSS",
  level: 90
}, {
  name: "Tailwind CSS",
  level: 95
}, {
  name: "MongoDB",
  level: 75
}, {
  name: "PostgreSQL",
  level: 80
}, {
  name: "Git",
  level: 90
}, {
  name: "Docker",
  level: 70
}];
const About = () => {
  return <section id="about" className="section-padding bg-muted/10">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know more about me and my skills" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm a passionate programmer and web developer with expertise in building
              modern web applications and interactive experiences. With a strong foundation
              in both frontend and backend technologies, I create scalable, optimized, and
              user-friendly applications.
            </p>
            <p className="text-muted-foreground">
              My journey in tech started 5 years ago, and since then I've worked on various
              projects ranging from e-commerce platforms to real-time communication tools
              and interactive visualizations.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and exploring new technologies to enhance my skillset
              and deliver cutting-edge solutions to complex problems.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium text-primary mb-4">Experience</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <h4 className="font-medium">Senior Frontend Developer at TechCorp</h4>
                  <p className="text-muted-foreground">2024 - Present</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Leading the frontend development team and architecting scalable React applications.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <h4 className="font-medium">Web Developer at Creative Agency</h4>
                  <p className="text-muted-foreground">2019 - 2021</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Developed responsive websites and e-commerce solutions for various clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-primary mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => <SkillBadge key={skill.name} name={skill.name} level={skill.level} />)}
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-medium text-primary mb-4">Education</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 pb-4">
                  <h4 className="font-medium">Master's in Computer Science</h4>
                  <p className="text-muted-foreground">University of Technology</p>
                  <p className="text-muted-foreground">2023-2025</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">
                </h4>
                  <p className="text-muted-foreground">University of Technology</p>
                  <p className="text-muted-foreground">
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;