export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-foreground/5 rounded-lg p-8 mb-8">
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            Hello! I&apos;m a passionate software developer who loves creating beautiful and functional web applications. 
            My journey in tech started with a curiosity about how websites work, and it has evolved into a fulfilling career 
            building impactful digital experiences.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I specialize in modern web technologies, with a focus on creating responsive, accessible, and performant applications. 
            I believe in writing clean code, following best practices, and continuously learning new technologies.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-foreground pb-2">What I Do</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-foreground/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🚀 Web Development</h3>
            <p className="text-foreground/70">
              Building modern, responsive web applications using React, Next.js, and other cutting-edge technologies.
            </p>
          </div>
          
          <div className="p-6 border-2 border-foreground/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">💡 Problem Solving</h3>
            <p className="text-foreground/70">
              Analyzing complex challenges and designing elegant solutions that meet user needs and business goals.
            </p>
          </div>
          
          <div className="p-6 border-2 border-foreground/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🎨 UI/UX Design</h3>
            <p className="text-foreground/70">
              Creating intuitive user interfaces with attention to detail, accessibility, and user experience.
            </p>
          </div>
          
          <div className="p-6 border-2 border-foreground/20 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📚 Continuous Learning</h3>
            <p className="text-foreground/70">
              Staying up-to-date with the latest technologies and best practices in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-foreground pb-2">Interests & Hobbies</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📖</span>
            <div>
              <h3 className="font-semibold mb-1">Reading & Writing</h3>
              <p className="text-foreground/70">
                I enjoy reading technical books and writing blog posts to share knowledge with the community.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-2xl">🎮</span>
            <div>
              <h3 className="font-semibold mb-1">Gaming</h3>
              <p className="text-foreground/70">
                Video games inspire my creativity and help me understand game design and user engagement.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-2xl">🌍</span>
            <div>
              <h3 className="font-semibold mb-1">Travel</h3>
              <p className="text-foreground/70">
                Exploring new places and cultures broadens my perspective and fuels my creativity.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-2xl">💻</span>
            <div>
              <h3 className="font-semibold mb-1">Open Source</h3>
              <p className="text-foreground/70">
                Contributing to open source projects and giving back to the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center bg-foreground/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-foreground/70 mb-6">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:contact@example.com" className="px-6 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
            Email Me
          </a>
          <a href="#" className="px-6 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
            LinkedIn
          </a>
          <a href="#" className="px-6 py-2 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
