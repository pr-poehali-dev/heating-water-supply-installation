import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Flame',
      title: 'Монтаж отопления',
      description: 'Установка современных систем отопления любой сложности. Работаем с газовыми, электрическими котлами, радиаторами, теплыми полами.',
      features: ['Газовые котлы и системы', 'Радиаторное отопление', 'Теплые полы', 'Котельные под ключ']
    },
    {
      icon: 'Droplets',
      title: 'Водоснабжение',
      description: 'Монтаж систем водоснабжения для частных домов и коммерческих объектов. От бурения скважин до разводки труб.',
      features: ['Бурение скважин', 'Насосные станции', 'Системы очистки воды', 'Внутренняя разводка']
    },
    {
      icon: 'Waves',
      title: 'Монтаж канализации',
      description: 'Проектирование и установка систем канализации. Автономные септики, станции биологической очистки, ливневая канализация.',
      features: ['Септики и ЛОС', 'Внутренняя канализация', 'Ливневая канализация', 'Дренажные системы']
    },
    {
      icon: 'Container',
      title: 'Установка септика',
      description: 'Подбор и монтаж септиков и станций биоочистки. Работаем с ведущими производителями. Гарантия на монтаж.',
      features: ['Септики Топас', 'Септики Евролос', 'Станции Астра', 'Накопительные емкости']
    },
    {
      icon: 'Layers',
      title: 'Монтаж теплого пола',
      description: 'Установка водяных и электрических теплых полов. Равномерный прогрев помещения, экономия энергии.',
      features: ['Водяной теплый пол', 'Электрический теплый пол', 'Инфракрасные системы', 'Терморегуляция']
    },
    {
      icon: 'FileText',
      title: 'Проектирование систем',
      description: 'Разработка проектов инженерных систем. Расчет нагрузок, подбор оборудования, согласование документации.',
      features: ['Проект отопления', 'Проект водоснабжения', 'Проект канализации', 'Теплотехнический расчет']
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/cb7dda03-0447-46cd-aa6c-765262b7a64c/files/b62eef50-a906-465f-a1c3-871f8d712e01.jpg',
      title: 'Система отопления в коттедже',
      description: 'Монтаж газового отопления площадью 250 м²',
      type: 'Частный дом'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cb7dda03-0447-46cd-aa6c-765262b7a64c/files/120a8dea-6d7f-4e10-8857-eb965cc7a0b2.jpg',
      title: 'Водоснабжение многоквартирного дома',
      description: 'Комплексная замена труб в 3-этажном здании',
      type: 'Многоквартирный дом'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cb7dda03-0447-46cd-aa6c-765262b7a64c/files/ada62ff8-f5f7-4370-a244-ce56e77d8dd1.jpg',
      title: 'Канализация офисного центра',
      description: 'Установка современной системы канализации',
      type: 'Коммерческий объект'
    }
  ];

  const advantages = [
    {
      icon: 'Cpu',
      title: 'Современные технологии',
      description: 'Используем проверенное оборудование европейских и российских производителей'
    },
    {
      icon: 'Wrench',
      title: 'Сервисное обслуживание',
      description: 'Предоставляем гарантийное и постгарантийное обслуживание всех систем'
    },
    {
      icon: 'FileCheck',
      title: 'Работаем по договору',
      description: 'Официальное оформление, прозрачные условия, защита ваших интересов'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 3 года',
      description: 'Письменная гарантия на все монтажные работы сроком до 3 лет'
    }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      role: 'Частный дом, 200 м²',
      text: 'Отличная работа! Установили отопление в новом доме. Всё сделано качественно, профессионально, в срок. Зима показала - система работает безупречно.',
      rating: 5
    },
    {
      name: 'Марина Соколова',
      role: 'Квартира, ЖК "Солнечный"',
      text: 'Заменили всю сантехнику и трубы в квартире. Ребята работали аккуратно, убирали за собой. Цена соответствует качеству. Рекомендую!',
      rating: 5
    },
    {
      name: 'Игорь Волков',
      role: 'Коммерческий объект',
      text: 'Делали систему отопления для производственного цеха. Сложный проект, но справились на отлично. Профессионалы своего дела.',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'Сколько стоят ваши услуги?',
      answer: 'Стоимость зависит от объема работ, площади объекта и выбранного оборудования. Мы предоставляем бесплатный выезд на объект и составление сметы. Средняя стоимость монтажа отопления - от 2000 руб/м², водоснабжения - от 1500 руб/м², канализации - от 1800 руб/м².'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'На все монтажные работы мы даем гарантию от 3 до 5 лет в зависимости от типа системы. На оборудование действует гарантия производителя. Мы также предоставляем бесплатное сервисное обслуживание в течение первого года.'
    },
    {
      question: 'Как долго длятся работы?',
      answer: 'Сроки зависят от сложности проекта. Монтаж отопления в частном доме 150-200 м² занимает 7-10 дней. Замена труб в квартире - 3-5 дней. Установка септика - 2-3 дня. Точные сроки определяются после осмотра объекта.'
    },
    {
      question: 'Работаете ли вы с юридическими лицами?',
      answer: 'Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем полный пакет документов, работаем по договору, выдаем акты выполненных работ и все необходимые сертификаты.'
    },
    {
      question: 'Можно ли вызвать специалиста для консультации?',
      answer: 'Да, мы предоставляем бесплатный выезд инженера на объект для оценки работ и консультации. Специалист проведет замеры, ответит на все вопросы и составит предварительную смету. Заявку можно оставить через форму на сайте или по телефону.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Wrench" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">ТеплоМастер</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:flex">
            <a href="#contact">Заказать звонок</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Работаем с 2014 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Монтаж отопления, водоснабжения и канализации
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Современные инженерные системы для создания комфорта и удобства в вашем доме. Профессиональный подход и качественное оборудование.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#portfolio">Наши работы</a>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">300+</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">Года гарантии</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <img 
                src="https://cdn.poehali.dev/projects/cb7dda03-0447-46cd-aa6c-765262b7a64c/files/b62eef50-a906-465f-a1c3-871f8d712e01.jpg" 
                alt="Профессиональный монтаж"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={32} className="text-primary" />
                  <div>
                    <div className="font-bold text-secondary">Гарантия 3 года</div>
                    <div className="text-sm text-gray-600">на все работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Что мы делаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по монтажу инженерных систем любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-secondary">
                    {project.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы гарантируем качество, надежность и профессионализм
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={advantage.icon as any} size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мнение тех, кто уже воспользовался нашими услугами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-gray-50">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Оставьте заявку
            </h2>
            <p className="text-xl text-gray-600">
              Мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Телефон</h3>
                    <p className="text-gray-700 text-lg font-semibold">+7 (927) 071-73-09</p>
                    <p className="text-sm text-gray-600">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Email</h3>
                    <p className="text-gray-700">heating30@mail.ru</p>
                    <p className="text-sm text-gray-600">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-secondary mb-2">Адрес</h3>
                    <p className="text-gray-700">г. Астрахань, ул. Николая Островского, д. 61</p>
                    <p className="text-sm text-gray-600">Офис и выставочный зал</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} />
                <span className="text-xl font-bold">ТеплоМастер</span>
              </div>
              <p className="text-gray-300 text-sm">
                Профессиональный монтаж инженерных систем с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Отопление</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Водоснабжение</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Канализация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (927) 071-73-09</li>
                <li>heating30@mail.ru</li>
                <li>г. Астрахань, ул. Николая Островского, 61</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ТеплоМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-3 z-50">
        <a
          href="https://t.me/Avikvstanet"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 group"
          aria-label="Написать в Telegram"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 md:w-9 md:h-9"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.969 9.28-2.781 12.311-.344 1.284-.694 1.714-1.139 1.756-.968.089-1.704-.64-2.643-1.253-1.469-.959-2.299-1.556-3.725-2.489-1.647-1.079-.579-1.673.359-2.642.245-.253 4.508-4.134 4.593-4.487.011-.044.021-.208-.078-.294-.099-.087-.245-.057-.35-.034-.149.033-2.525 1.605-7.128 4.716-.674.463-1.285.688-1.832.675-.603-.014-1.764-.341-2.627-.622-.874-.281-1.568-.429-1.507-.906.032-.248.385-.502 1.061-.762 4.146-1.805 6.909-2.998 8.29-3.58 3.943-1.641 4.764-1.927 5.298-1.935.118-.002.381.027.552.166.145.117.185.275.204.386.019.111.042.364.024.562z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary/80 rounded-full animate-ping"></span>
        </a>

        <a
          href="https://wa.me/79931177207"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 bg-secondary hover:bg-secondary/90 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 group"
          aria-label="Написать в WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 md:w-9 md:h-9"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Index;