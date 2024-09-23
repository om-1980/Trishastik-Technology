'use client';

import Header from '../components/header';
import Footer from '../components/footer';

export default function JobFusion() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12 z-10">
        <section className="w-full max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">JobFusion Portal</h2>
          <p className="text-muted-foreground md:text-xl">
            A modern job portal connecting employers and employees.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
