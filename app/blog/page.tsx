import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn how to build modern web applications with the latest version of Next.js, featuring improved performance and new features.',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to using Tailwind CSS for creating beautiful, responsive designs quickly and efficiently.',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['CSS', 'Tailwind', 'Design'],
  },
  {
    id: 3,
    title: 'TypeScript Best Practices',
    excerpt: 'Discover essential TypeScript patterns and practices that will help you write more maintainable and type-safe code.',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
  },
  {
    id: 4,
    title: 'Building Accessible Web Applications',
    excerpt: 'Learn why web accessibility matters and how to implement WCAG guidelines in your React applications.',
    date: '2023-12-28',
    readTime: '8 min read',
    tags: ['Accessibility', 'React', 'Web Standards'],
  },
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
      <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
        Thoughts, tutorials, and insights on web development, technology, and software engineering.
      </p>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-2 border-foreground/20 rounded-lg p-6 hover:border-foreground transition-all"
          >
            <Link href={`/blog/${post.id}`}>
              <div className="mb-3">
                <h2 className="text-2xl font-bold mb-2 hover:text-foreground/80 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-foreground/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Categories */}
      <section className="mt-16 pt-12 border-t-2 border-foreground/20">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['All Posts', 'Web Development', 'React', 'TypeScript', 'CSS', 'Best Practices', 'Tutorials'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 border-2 border-foreground/20 rounded-lg hover:border-foreground hover:bg-foreground hover:text-background transition-all"
            >
              {category}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
