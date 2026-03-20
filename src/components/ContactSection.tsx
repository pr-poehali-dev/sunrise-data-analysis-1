export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-amber-600 mb-3">Связаться с нами</p>
            <h2 className="text-3xl font-light text-stone-800 md:text-4xl mb-6">Получите консультацию</h2>
            <p className="text-stone-500 leading-relaxed mb-10">
              Мы поможем выбрать подходящий памятник, обсудим дизайн и ответим на все вопросы. Консультация бесплатная.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Телефон</p>
                  <a href="tel:+79616530501" className="text-stone-800 hover:text-amber-600 transition-colors font-medium">
                    +7 (961) 653-05-01
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Email</p>
                  <a href="mailto:info@example.com" className="text-stone-800 hover:text-amber-600 transition-colors font-medium">
                    info@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Адрес</p>
                  <p className="text-stone-800 font-medium">ул. Рождественского, 16/1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Режим работы</p>
                  <p className="text-stone-800 font-medium">Пн–Сб: 9:00–18:00</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-stone-200 hover:border-amber-400 px-4 py-2 text-stone-600 hover:text-amber-600 transition-colors text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-stone-200 hover:border-amber-400 px-4 py-2 text-stone-600 hover:text-amber-600 transition-colors text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                </svg>
                ВКонтакте
              </a>
            </div>
          </div>

          <div className="bg-stone-50 p-10">
            <h3 className="text-xl font-light text-stone-800 mb-6">Оставить заявку</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (000) 000-00-00"
                  className="w-full border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Опишите, что вам нужно..."
                  className="w-full border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium py-3 transition-colors duration-200"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}