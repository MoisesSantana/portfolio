import { Header } from './components/header';
import { Hero } from './components/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <Hero />
    </div>
  );
}
