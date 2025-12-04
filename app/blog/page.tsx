import Link from "next/link"
import { ArrowRight, Wifi, Radio, Server, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogCard } from "@/components/blog-card"

const featuredPosts = [
  {
    title: "The Future of 5G: What to Expect in 2025",
    excerpt:
      "Exploring the next generation of mobile connectivity and its impact on telecommunications infrastructure worldwide.",
    category: "5G Technology",
    date: "Dec 2, 2024",
    slug: "future-of-5g-2025",
    image: "/5g-tower-network-technology.jpg",
  },
  {
    title: "Network Security Best Practices for Telecom",
    excerpt:
      "Essential security measures every telecommunications company should implement to protect their infrastructure.",
    category: "Security",
    date: "Dec 1, 2024",
    slug: "network-security-best-practices",
    image: "/network-security-cybersecurity.jpg",
  },
  {
    title: "Understanding Fiber Optic Infrastructure",
    excerpt: "A comprehensive guide to fiber optic networks and their role in modern telecommunications.",
    category: "Infrastructure",
    date: "Nov 28, 2024",
    slug: "fiber-optic-infrastructure-guide",
    image: "/fiber-optic-cables-technology.jpg",
  },
]

const features = [
  {
    icon: Wifi,
    title: "5G Coverage",
    description: "In-depth analysis of 5G rollout progress and coverage expansion across regions.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Expert insights on network infrastructure development and modernization.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Latest cybersecurity trends and best practices for telecom networks.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Market analysis and industry trends from around the world.",
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Where Technology Meets Connectivity
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Your trusted source for telecommunications news, analysis, and insights. Stay ahead with expert coverage
              of 5G, network infrastructure, and the future of connectivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/blog">
                  Read Latest Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What We Cover</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive coverage of the telecommunications industry
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Latest Articles</h2>
              <p className="mt-2 text-muted-foreground">Stay updated with our latest insights</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex bg-transparent">
              <Link href="/blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Radio className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get the latest telecom news and insights delivered directly to your inbox. No spam, unsubscribe anytime.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Subscribe Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
