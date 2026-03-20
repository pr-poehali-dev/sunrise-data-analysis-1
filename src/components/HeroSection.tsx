import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/d91e7fad-5ab7-451f-b588-f7319ebbd783.jpg',
  'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/a71ac293-b4bd-46eb-8f9d-3d626e196d10.jpg',
  'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/d1b6e0c6-84c3-40db-b044-118b036ea6ad.jpg',
  'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/bc495c82-588c-4bd3-8b33-4bff85f8298f.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-8">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-4">
                Изготовление и установка
              </p>
              <h1 className="text-4xl font-light text-white md:text-5xl lg:text-6xl leading-tight">
                Памятники<br />из гранита
              </h1>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-lg font-light text-white/75 max-w-md leading-relaxed">
                Подберём дизайн, поможем написать стих и восстановим старые фотографии. Работаем с заботой о вашей памяти.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out flex flex-col sm:flex-row gap-4',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="#contact"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium px-8 py-3 transition-colors duration-200"
              >
                Получить консультацию
              </a>
              <a
                href="#services"
                className="inline-block border border-white/40 hover:border-white text-white px-8 py-3 transition-colors duration-200"
              >
                Наши услуги
              </a>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out flex gap-8 pt-2',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="text-center">
                <p className="text-2xl font-light text-white">15+</p>
                <p className="text-xs text-white/60 uppercase tracking-wide">лет опыта</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-light text-white">500+</p>
                <p className="text-xs text-white/60 uppercase tracking-wide">работ</p>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-light text-white">100%</p>
                <p className="text-xs text-white/60 uppercase tracking-wide">гарантия</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-amber-400' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
