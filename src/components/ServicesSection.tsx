const services = [
  {
    icon: '🪨',
    title: 'Изготовление памятников',
    description: 'Памятники из натурального гранита любой формы и размера. Богатый выбор пород и оттенков камня.',
  },
  {
    icon: '🔧',
    title: 'Установка и монтаж',
    description: 'Профессиональный монтаж на кладбище. Гарантия устойчивости и долговечности конструкции.',
  },
  {
    icon: '✏️',
    title: 'Гравировка и дизайн',
    description: 'Индивидуальный дизайн, портретная гравировка, орнаменты, эпитафии и стихи на ваш выбор.',
  },
  {
    icon: '📷',
    title: 'Восстановление фото',
    description: 'Восстанавливаем старые и повреждённые фотографии для размещения на памятнике.',
  },
  {
    icon: '📝',
    title: 'Помощь с текстом',
    description: 'Поможем подобрать или написать стихотворение, эпитафию и трогательные слова для гравировки.',
  },
  {
    icon: '🔄',
    title: 'Реставрация памятников',
    description: 'Реставрируем и обновляем старые памятники: полировка, обновление гравировки, замена элементов.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-stone-50 py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-600 mb-3">Что мы делаем</p>
          <h2 className="text-3xl font-light text-stone-800 md:text-4xl">Наши услуги</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-2 border-amber-400"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-medium text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
