import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-[12px] border-b border-white/5">
      <Link href="/" className="text-lg font-medium">
        Manus
      </Link>
      
      <div className="flex items-center gap-8">
        <Link href="#intro" className="nav-link text-sm">
          Intro
        </Link>
        <Link href="#use-cases" className="nav-link text-sm">
          Use cases
        </Link>
        <Link href="#benchmarks" className="nav-link text-sm">
          Benchmarks
        </Link>
        <Link href="#get-started" className="nav-link text-sm">
          Get Started
        </Link>
        <Link
          href="/call"
          className="button-primary text-sm"
        >
          Try Manus
        </Link>
      </div>
    </nav>
  );
} 