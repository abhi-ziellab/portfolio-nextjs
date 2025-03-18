import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-[65ch] space-y-6">
          <h1 className="text-5xl md:text-[56px] font-bold leading-[1.1] text-gradient">
            Leave it to Manus
          </h1>
          <p className="text-xl md:text-2xl text-[rgb(var(--text-secondary))] leading-relaxed">
            Manus is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.
          </p>
          <div className="pt-4">
            <Link 
              href="#try"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Try Manus
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Use case gallery</h2>
            <p className="text-[rgb(var(--text-secondary))] text-lg">
              Learn how Manus handles real-world tasks through step-by-step replays.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trip to Japan in April",
                description: "Manus not only integrates information for personalized travel planning but also creates a custom handbook for your trip."
              },
              {
                title: "Deeply analyze Tesla stocks",
                description: "Manus performs in-depth stock analysis and designs visually compelling dashboards showcasing comprehensive stock insights."
              },
              {
                title: "Interactive Course on the Momentum Theorem",
                description: "Manus creates video presentation materials for middle school teachers explaining the momentum theorem."
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="group p-6 bg-[rgba(255,255,255,0.03)] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] transition-colors cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-[rgb(var(--text-secondary))]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarks Section */}
      <section id="benchmarks" className="py-20">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold">Benchmarks</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-[rgba(255,255,255,0.03)] rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Task Completion Rate</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Manus achieves a 94% task completion rate across various domains, consistently outperforming standard AI assistants.
              </p>
            </div>
            <div className="p-6 bg-[rgba(255,255,255,0.03)] rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">User Satisfaction</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                9.2/10 average user satisfaction score, with users particularly praising Manus's ability to break down complex tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <p className="text-[rgb(var(--text-secondary))] text-lg max-w-[65ch]">
            Experience the future of AI assistance today. Manus is ready to help you accomplish your goals, no matter how complex.
          </p>
          <div className="pt-2">
            <a 
              href="https://chat.openai.com/g/g-VA4Vg1iCX-manus" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Try Manus
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}