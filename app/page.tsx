import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-[#ebad2e]">Rehive</span> Studio
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-[#ebad2e] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#ebad2e] transition-colors">Process</a>
            <a href="#portfolio" className="hover:text-[#ebad2e] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#ebad2e] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              We build software that <span className="text-[#ebad2e]">works.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl">
              Custom websites, web apps, and SaaS platforms. Modern stack. Fast delivery. Built to last.
            </p>
            <p className="text-lg text-[#f5c85f] mb-10">
              Get your custom site for as low as $1,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#ebad2e] hover:bg-[#d99d26] text-[#0a0a0a] font-semibold">
                <a href="#portfolio">See Our Work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#ebad2e]/30 text-[#ebad2e] hover:bg-[#ebad2e]/10">
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#ebad2e]">10+</div>
            <div className="text-gray-400 mt-2">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#ebad2e]">5+</div>
            <div className="text-gray-400 mt-2">Industries Served</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#ebad2e]">2-4</div>
            <div className="text-gray-400 mt-2">Weeks to Launch</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#ebad2e]">100%</div>
            <div className="text-gray-400 mt-2">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1a1a1a] border-white/10 hover:border-[#ebad2e]/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Custom Websites</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  For businesses that need more than a template. Fast, responsive, built to convert. Every site is custom designed and developed for your specific needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10 hover:border-[#ebad2e]/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Web Applications</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Dashboards, portals, booking systems, integrations. If your business runs on it, we build it. Complex functionality made simple.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10 hover:border-[#ebad2e]/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Custom SaaS</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Multi-tenant platforms, payment processing, API integrations. From MVP to scale. We build software products, not just websites.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <p className="text-center text-gray-400 mt-10 text-lg">
            Every project receives a custom quote based on your specific needs.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-5xl font-bold text-[#ebad2e] mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-3">Initial Meeting & Scope</h3>
              <p className="text-gray-400">
                We get to know your business, your goals, and what you need. Free consultation to understand the full picture.
              </p>
            </div>

            <div className="relative">
              <div className="text-5xl font-bold text-[#ebad2e] mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-3">Custom Quote</h3>
              <p className="text-gray-400">
                Clear, transparent pricing based on your project scope. No hidden fees, no surprises. You know exactly what you're paying for.
              </p>
            </div>

            <div className="relative">
              <div className="text-5xl font-bold text-[#ebad2e] mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-3">Initial Design</h3>
              <p className="text-gray-400">
                We create the look and feel of your site. You see it, give feedback, and we refine until it's exactly right.
              </p>
            </div>

            <div className="relative">
              <div className="text-5xl font-bold text-[#ebad2e] mb-4">04</div>
              <h3 className="text-2xl font-semibold mb-3">Confirmation & Build</h3>
              <p className="text-gray-400">
                Once the design is approved, we build. Modern tech stack, clean code, built to perform and last.
              </p>
            </div>

            <div className="relative">
              <div className="text-5xl font-bold text-[#ebad2e] mb-4">05</div>
              <h3 className="text-2xl font-semibold mb-3">Review & Testing</h3>
              <p className="text-gray-400">
                Thorough QA across all devices and browsers. You review everything before it goes live. Nothing launches until you're happy.
              </p>
            </div>

            <div className="relative">
              <div className="text-5xl font-bold text-[#ebad2e] mb-4">06</div>
              <h3 className="text-2xl font-semibold mb-3">Fully Functional Site</h3>
              <p className="text-gray-400">
                We deploy, train you on the platform, and provide ongoing support. Your site is live, fast, and ready to work for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Work</h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Real sites we've built for real businesses.</p>
          
          {/* Flagship Project - ZipGolf */}
          <Card className="bg-[#1a1a1a] border-[#ebad2e]/20 mb-12">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <div className="text-sm font-medium text-[#ebad2e] mb-2 uppercase tracking-wider">Flagship Product</div>
                  <CardTitle className="text-3xl text-white mb-2">ZipGolf (Birdieway)</CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    Multi-tenant golf course management SaaS platform
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-[#0a0a0a] h-64 rounded-lg mb-4 flex items-center justify-center text-gray-500 border border-white/5">
                [Screenshot Coming Soon]
              </div>
              <p className="text-gray-400 mb-4">
                Full-featured SaaS platform for golf course management. Tee time booking, multi-location support, payment processing via Stripe Connect, and course administration dashboard.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#ebad2e]/10 text-[#f5c85f] rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-[#ebad2e]/10 text-[#f5c85f] rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-[#ebad2e]/10 text-[#f5c85f] rounded-full text-sm">Stripe Connect</span>
                <span className="px-3 py-1 bg-[#ebad2e]/10 text-[#f5c85f] rounded-full text-sm">Prisma</span>
                <span className="px-3 py-1 bg-[#ebad2e]/10 text-[#f5c85f] rounded-full text-sm">TypeScript</span>
              </div>
            </CardContent>
          </Card>

          {/* Client Sites Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Portable Detail", industry: "Mobile Detailing", url: "https://portabledetail.com/" },
              { name: "Miller Landscape Utah", industry: "Landscaping", url: "https://www.millerlandscapeutah.com/" },
              { name: "SU Services", industry: "Professional Services", url: "https://suservices25.com/home.html" },
              { name: "The Corn Dog Co", industry: "Food & Beverage", url: "https://thecorndogco.com/" },
            ].map((project) => (
              <Card key={project.name} className="bg-[#1a1a1a] border-white/10 hover:border-[#ebad2e]/30 transition-colors">
                <CardHeader>
                  <div className="bg-[#0a0a0a] h-48 rounded-lg mb-4 flex items-center justify-center text-gray-500 border border-white/5">
                    [Screenshot]
                  </div>
                  <CardTitle className="text-xl text-white">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400">{project.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full border-[#ebad2e]/20 text-[#ebad2e] hover:bg-[#ebad2e]/10">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Live Site →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Next.js", "React", "TypeScript", "PostgreSQL", "Prisma",
              "Tailwind CSS", "Stripe", "Node.js", "Bun", "Render"
            ].map((tech) => (
              <div key={tech} className="px-6 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-gray-300 text-sm hover:border-[#ebad2e]/30 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rehive Section */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Rehive Studio</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#ebad2e]">Direct access to the builder</h3>
              <p className="text-gray-400 text-lg">
                No project managers. No game of telephone. You talk to the person writing the code.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#ebad2e]">Modern stack, real results</h3>
              <p className="text-gray-400 text-lg">
                We use the same tools as Vercel, Stripe, and Linear. Your software won't be outdated before it launches.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#ebad2e]">We ship in weeks, not months</h3>
              <p className="text-gray-400 text-lg">
                Most projects go from kickoff to live in 2-4 weeks. We move fast because we know what we're doing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA/Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something.</h2>
            <p className="text-xl text-gray-400">
              Tell us about your project. We'll get back to you within 24 hours with next steps.
            </p>
          </div>
          
          <Card className="bg-[#1a1a1a] border-white/10">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-[#0a0a0a] border-white/20 focus:border-[#ebad2e]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-[#0a0a0a] border-white/20 focus:border-[#ebad2e]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your project</label>
                  <Textarea 
                    id="message" 
                    placeholder="What are you looking to build? What's the goal?" 
                    rows={5}
                    className="bg-[#0a0a0a] border-white/20 focus:border-[#ebad2e]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#ebad2e] hover:bg-[#d99d26] text-[#0a0a0a] font-semibold">
                  Send Message
                </Button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">or email us directly</p>
                <a href="mailto:hello@getrehive.com" className="text-[#ebad2e] hover:text-[#f5c85f] transition-colors text-lg">
                  hello@getrehive.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-xl font-bold mb-2">
                <span className="text-[#ebad2e]">Rehive</span> Studio
              </div>
              <p className="text-gray-400 text-sm">© 2026 Rehive Studio. All rights reserved.</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#services" className="text-gray-400 hover:text-[#ebad2e] transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-[#ebad2e] transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-[#ebad2e] transition-colors">Contact</a>
            </div>
            
            <div className="text-sm text-gray-400">
              <a href="mailto:hello@getrehive.com" className="hover:text-[#ebad2e] transition-colors">
                hello@getrehive.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
