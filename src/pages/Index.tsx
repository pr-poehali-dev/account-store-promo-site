import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-[Inter]">Магазин аккаунтов</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-[Open_Sans]">Аккаунты на любой вкус и бюджет. Автоматическая выдача, гарантии возврата, быстрая и удобная оплата.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Каталог товаров
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[Inter]">Автоматическая выдача</h3>
              <p className="text-gray-600 font-[Open_Sans]">Получите доступ к аккаунту мгновенно после оплаты</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[Inter]">Гарантии возврата</h3>
              <p className="text-gray-600 font-[Open_Sans]">100% при восстановлении, 50% при бане аккаунта</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-[Inter]">Качество и надежность</h3>
              <p className="text-gray-600 font-[Open_Sans]">Только проверенные аккаунты от надежных поставщиков</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-[Inter]">Популярные товары</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-[Inter]">Steam аккаунты</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Скидка 20%</Badge>
                </div>
                <CardDescription className="font-[Open_Sans]">Игровые аккаунты с большой библиотекой игр</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600 font-[Inter]">от 500₽</span>
                  <Button>Выбрать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-[Inter]">Netflix аккаунты</CardTitle>
                  <Badge className="bg-red-100 text-red-800">Хит продаж</Badge>
                </div>
                <CardDescription className="font-[Open_Sans]">Премиум подписка для просмотра фильмов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600 font-[Inter]">от 200₽</span>
                  <Button>Выбрать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-[Inter]">Spotify аккаунты</CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">Новинка</Badge>
                </div>
                <CardDescription className="font-[Open_Sans]">Музыкальные аккаунты с премиум доступом</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600 font-[Inter]">от 150₽</span>
                  <Button>Выбрать</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-[Inter]">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                  </div>
                  <span className="ml-2 text-sm text-gray-600 font-[Open_Sans]">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 font-[Open_Sans]">"Быстрая доставка, качественный аккаунт. Уже третий раз покупаю здесь - всегда довольна результатом!"</p>
                <p className="text-sm text-gray-500 font-[Open_Sans]">— Анна М.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                  </div>
                  <span className="ml-2 text-sm text-gray-600 font-[Open_Sans]">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 font-[Open_Sans]">"Отличный сервис! Автоматическая выдача работает моментально. Рекомендую всем друзьям."</p>
                <p className="text-sm text-gray-500 font-[Open_Sans]">— Дмитрий К.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Guarantees Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-[Inter]">Наши гарантии</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="CheckCircle" size={24} className="text-green-600 mr-3" />
                <h3 className="text-xl font-semibold font-[Inter]">Возврат при восстановлении</h3>
              </div>
              <p className="text-gray-700 font-[Open_Sans]">Если аккаунт будет восстановлен, мы вернем 100% от стоимости заказа</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="Shield" size={24} className="text-red-600 mr-3" />
                <h3 className="text-xl font-semibold font-[Inter]">Частичная компенсация</h3>
              </div>
              <p className="text-gray-700 font-[Open_Sans]">При бане аккаунта возвращаем 50% от суммы заказа в качестве компенсации</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-[Inter]">Магазин аккаунтов</h3>
              <p className="text-gray-400 font-[Open_Sans]">Надежный поставщик цифровых аккаунтов с гарантией качества</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-[Inter]">Контакты</h4>
              <p className="text-gray-400 font-[Open_Sans]">Email: support@accounts-store.ru</p>
              <p className="text-gray-400 font-[Open_Sans]">Telegram: @accounts_support</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-[Inter]">Оплата</h4>
              <p className="text-gray-400 font-[Open_Sans]">Быстрая и удобная оплата любым способом</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline" className="text-gray-400 border-gray-600">Visa</Badge>
                <Badge variant="outline" className="text-gray-400 border-gray-600">MasterCard</Badge>
                <Badge variant="outline" className="text-gray-400 border-gray-600">Qiwi</Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;