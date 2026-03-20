const works = [
  {
    src: 'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/d91e7fad-5ab7-451f-b588-f7319ebbd783.jpg',
    title: 'Гранитный памятник с гравировкой',
    tag: 'Изготовление',
  },
  {
    src: 'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/a71ac293-b4bd-46eb-8f9d-3d626e196d10.jpg',
    title: 'Комплекс надгробных памятников',
    tag: 'Установка',
  },
  {
    src: 'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/d1b6e0c6-84c3-40db-b044-118b036ea6ad.jpg',
    title: 'Художественная гравировка',
    tag: 'Гравировка',
  },
  {
    src: 'https://cdn.poehali.dev/projects/37ecf694-e296-458e-9f93-75984e84f086/files/bc495c82-588c-4bd3-8b33-4bff85f8298f.jpg',
    title: 'Восстановление фотографии',
    tag: 'Фото',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-stone-900 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400 mb-3">Примеры работ</p>
          <h2 className="text-3xl font-light text-white md:text-4xl">Наши работы</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <div key={work.title} className="group relative overflow-hidden">
              <img
                src={work.src}
                alt={work.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-medium uppercase tracking-widest text-amber-400">{work.tag}</span>
                <p className="text-sm text-white mt-1">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
