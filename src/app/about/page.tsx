export default function About() {
  return (
    <div className="bg-white text-gray-900 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-black inline-block">
          Обо мне
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Привет! Меня зовут Даниэл. Я Frontend-разработчик, увлечённый
          созданием современных и удобных интерфейсов. У меня за плечами более 2
          лет практики, включая обучение React, TypeScript, Next.js и Tailwind
          CSS.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Мне нравится не просто писать код, а строить понятную архитектуру,
          использовать чистые подходы и создавать UI, который действительно
          помогает пользователю. Я стремлюсь к глубокому пониманию технологий и
          всегда ищу возможности расти.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Сейчас я фокусируюсь на прокачке до уровня Middle и изучаю такие темы,
          как Git, сложные хуки в React, оптимизация рендеринга, а также
          продвинутая работа с анимациями и адаптивным дизайном.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Моя цель — стать сильным Frontend-специалистом, которому можно
          доверить сложный интерфейс и быть уверенным в результате.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Стек технологий</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>HTML, CSS, SASS, Tailwind CSS</li>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js</li>
            <li>Git, GitHub</li>
            <li>Адаптивная верстка, доступность</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
