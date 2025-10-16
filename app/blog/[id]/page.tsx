import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog post data
const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}> = {
  '1': {
    title: 'Getting Started with Next.js 15',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    content: [
      'Next.js 15 brings exciting new features and improvements that make building web applications even more enjoyable. In this post, we\'ll explore the key updates and how to get started.',
      'One of the most significant improvements is the enhanced performance. The new version includes optimizations that make your applications faster and more responsive. The build times have been reduced, and the runtime performance has been improved significantly.',
      'The App Router, introduced in recent versions, continues to evolve with better support for server components and streaming. This allows for more efficient data fetching and rendering strategies.',
      'Getting started with Next.js 15 is straightforward. You can create a new project using the create-next-app CLI tool, which now includes templates with TypeScript and Tailwind CSS support out of the box.',
      'The developer experience has been enhanced with better error messages, improved debugging tools, and more comprehensive documentation. These improvements make it easier to build and maintain large-scale applications.',
    ],
  },
  '2': {
    title: 'Mastering Tailwind CSS',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['CSS', 'Tailwind', 'Design'],
    content: [
      'Tailwind CSS has revolutionized the way we write CSS in modern web applications. Instead of writing custom CSS for every component, Tailwind provides utility classes that can be composed to create any design.',
      'The utility-first approach might seem unusual at first, but it offers several advantages. You can prototype designs quickly, maintain consistency across your application, and avoid the overhead of managing CSS files.',
      'One of Tailwind\'s strengths is its responsive design system. You can easily create layouts that adapt to different screen sizes using responsive prefixes like sm:, md:, lg:, and xl:.',
      'Customization is another powerful feature. The tailwind.config.js file allows you to extend the default theme, add custom colors, spacing, and more. This ensures your design system remains consistent while meeting your specific needs.',
      'Performance is often a concern with utility-first CSS, but Tailwind\'s build process removes unused styles in production, resulting in small CSS bundles. Combined with modern CSS features, Tailwind is an excellent choice for building performant web applications.',
    ],
  },
  '3': {
    title: 'TypeScript Best Practices',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    content: [
      'TypeScript has become the de facto standard for building large-scale JavaScript applications. Its type system helps catch errors early, improves code documentation, and enhances the developer experience with better IDE support.',
      'One of the most important best practices is to enable strict mode in your tsconfig.json. This enables several strict type-checking options that help prevent common bugs and enforce better coding practices.',
      'Use interfaces and types appropriately. Interfaces are great for defining object shapes and can be extended, while type aliases are more flexible and can represent unions, intersections, and other complex types.',
      'Avoid using "any" type whenever possible. The "any" type bypasses TypeScript\'s type checking, which defeats the purpose of using TypeScript. Instead, use "unknown" for truly unknown types or create proper type definitions.',
      'Leverage TypeScript\'s utility types like Partial, Pick, Omit, and Record. These built-in types can help you create new types based on existing ones without duplicating code.',
      'Finally, write meaningful type definitions for your functions and components. Good types serve as documentation and make your code more maintainable.',
    ],
  },
  '4': {
    title: 'Building Accessible Web Applications',
    date: '2023-12-28',
    readTime: '8 min read',
    tags: ['Accessibility', 'React', 'Web Standards'],
    content: [
      'Web accessibility is not just a nice-to-have feature; it\'s a fundamental requirement for creating inclusive web applications. Accessible websites can be used by everyone, including people with disabilities.',
      'The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making web content accessible. These guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).',
      'In React applications, semantic HTML is your foundation for accessibility. Use proper heading hierarchy (h1-h6), semantic elements like nav, main, article, and button instead of divs with click handlers.',
      'Keyboard navigation is essential. Ensure that all interactive elements can be accessed and operated using only a keyboard. Test your application by navigating through it using only the Tab key and Enter/Space for activation.',
      'ARIA (Accessible Rich Internet Applications) attributes can enhance accessibility when HTML semantics alone aren\'t sufficient. However, the first rule of ARIA is "don\'t use ARIA" if native HTML can do the job.',
      'Color contrast is another important aspect. Ensure that text has sufficient contrast against its background. WCAG Level AA requires a contrast ratio of at least 4.5:1 for normal text.',
      'Finally, test your application with screen readers like NVDA, JAWS, or VoiceOver. This real-world testing will reveal accessibility issues that automated tools might miss.',
    ],
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts[id];

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8 transition-colors"
      >
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-foreground/60 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
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
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-foreground/80 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t-2 border-foreground/20">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="px-6 py-3 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all"
            >
              ← All Posts
            </Link>
            <div className="flex gap-4">
              <button className="text-foreground/70 hover:text-foreground transition-colors">
                Share on Twitter
              </button>
              <button className="text-foreground/70 hover:text-foreground transition-colors">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
