"use-client";

import FilterSection from "./components/FilterSection";

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-900 p-6'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Filter Page</h1>

        <FilterSection />
      </div>
    </div>
  );
}
