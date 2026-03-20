export default function FooterSection() {
  return (
    <footer className="bg-stone-950 py-8">
      <div className="container mx-auto px-8 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-stone-500 text-sm">© 2024 Памятники из гранита. Все права защищены.</p>
        <div className="flex gap-6">
          <a href="#services" className="text-stone-500 hover:text-amber-400 text-sm transition-colors">Услуги</a>
          <a href="#portfolio" className="text-stone-500 hover:text-amber-400 text-sm transition-colors">Работы</a>
          <a href="#contact" className="text-stone-500 hover:text-amber-400 text-sm transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
