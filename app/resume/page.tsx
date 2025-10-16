export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume / CV</h1>
      
      {/* Professional Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-foreground pb-2">Professional Summary</h2>
        <p className="text-foreground/80 leading-relaxed">
          Passionate software developer with expertise in modern web technologies. 
          Experienced in building scalable applications using Next.js, React, and TypeScript.
          Strong problem-solving skills and a commitment to writing clean, maintainable code.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-foreground pb-2">Work Experience</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p className="text-foreground/70">Tech Company Inc.</p>
            </div>
            <span className="text-foreground/70">2021 - Present</span>
          </div>
          <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
            <li>Led development of customer-facing web applications using Next.js and React</li>
            <li>Implemented responsive designs with Tailwind CSS</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="text-foreground/70">Startup Solutions</p>
            </div>
            <span className="text-foreground/70">2019 - 2021</span>
          </div>
          <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
            <li>Developed and maintained multiple web applications</li>
            <li>Implemented RESTful APIs and integrated third-party services</li>
            <li>Optimized application performance and user experience</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-foreground pb-2">Education</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-foreground/70">University Name</p>
            </div>
            <span className="text-foreground/70">2015 - 2019</span>
          </div>
          <p className="text-foreground/80 ml-4">GPA: 3.8/4.0</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-foreground pb-2">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Backend & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Git', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Docker'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Button */}
      <section className="text-center">
        <button className="px-8 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium">
          Download PDF Resume
        </button>
      </section>
    </div>
  );
}
