import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          A showcase of my professional journey, thoughts, and projects.
          Explore my resume, learn about me, and read my latest blog posts.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/resume"
            className="px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            View Resume
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all font-medium"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <Link href="/resume" className="group">
          <div className="p-6 border-2 border-foreground/20 rounded-lg hover:border-foreground transition-all">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-foreground/80">📄 Resume</h2>
            <p className="text-foreground/70">
              View my professional experience, education, and skills.
            </p>
          </div>
        </Link>
        
        <Link href="/about" className="group">
          <div className="p-6 border-2 border-foreground/20 rounded-lg hover:border-foreground transition-all">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-foreground/80">👤 About</h2>
            <p className="text-foreground/70">
              Learn more about my background, interests, and passions.
            </p>
          </div>
        </Link>
        
        <Link href="/blog" className="group">
          <div className="p-6 border-2 border-foreground/20 rounded-lg hover:border-foreground transition-all">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-foreground/80">📝 Blog</h2>
            <p className="text-foreground/70">
              Read my thoughts, tutorials, and technical articles.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
