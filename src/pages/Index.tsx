import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('ticket');
  const [trainType, setTrainType] = useState('all');
  const [carClass, setCarClass] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const popularRoutes = [
    { from: 'Москва', to: 'Санкт-Петербург', price: '2 890', time: '3ч 40м', trains: 12 },
    { from: 'Москва', to: 'Казань', price: '3 200', time: '11ч 30м', trains: 8 },
    { from: 'Санкт-Петербург', to: 'Москва', price: '2 890', time: '3ч 40м', trains: 14 },
    { from: 'Москва', to: 'Нижний Новгород', price: '1 450', time: '3ч 55м', trains: 10 }
  ];

  const myTrips = [
    { from: 'Москва', to: 'Санкт-Петербург', date: '15 ноября', train: '702А', car: '05', seat: '12' },
    { from: 'Казань', to: 'Москва', date: '22 октября', train: '054Ч', car: '03', seat: '24', past: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Icon name="Train" size={24} className="text-white" />
            </div>
            <span className="text-xl font-semibold">ЖД Билеты</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setActiveTab('ticket')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeTab === 'ticket' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Мой билет
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeTab === 'search' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Поиск
            </button>
            <button
              onClick={() => setActiveTab('routes')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeTab === 'routes' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Маршруты
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Профиль
            </button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <main className="container px-4 py-6 md:py-8 pb-24 md:pb-8">
        {activeTab === 'ticket' && (
          <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Ваш билет</h1>
              <p className="text-sm md:text-base text-muted-foreground">QR-код для посадки в поезд</p>
            </div>

            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-4 md:p-6 text-white">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div>
                      <p className="text-xs md:text-sm opacity-90 mb-1">Поезд №702А</p>
                      <h2 className="text-lg md:text-2xl font-bold">Москва → Санкт-Петербург</h2>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Сапсан
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="opacity-75 mb-1">Отправление</p>
                      <p className="font-semibold text-lg">14:30</p>
                      <p className="opacity-90">15 ноября</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Icon name="ArrowRight" size={24} className="opacity-75" />
                    </div>
                    <div className="text-right">
                      <p className="opacity-75 mb-1">Прибытие</p>
                      <p className="font-semibold text-lg">18:10</p>
                      <p className="opacity-90">15 ноября</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg border-2 border-primary/20">
                      <svg
                        width="180"
                        height="180"
                        viewBox="0 0 200 200"
                        className="animate-scale-in md:w-[200px] md:h-[200px]"
                      >
                        <rect width="200" height="200" fill="white" />
                        <g fill="black">
                          <rect x="20" y="20" width="20" height="20" />
                          <rect x="60" y="20" width="20" height="20" />
                          <rect x="100" y="20" width="20" height="20" />
                          <rect x="140" y="20" width="20" height="20" />
                          <rect x="160" y="20" width="20" height="20" />
                          
                          <rect x="20" y="40" width="20" height="20" />
                          <rect x="160" y="40" width="20" height="20" />
                          
                          <rect x="20" y="60" width="20" height="20" />
                          <rect x="60" y="60" width="20" height="20" />
                          <rect x="80" y="60" width="20" height="20" />
                          <rect x="100" y="60" width="20" height="20" />
                          <rect x="160" y="60" width="20" height="20" />
                          
                          <rect x="20" y="80" width="20" height="20" />
                          <rect x="60" y="80" width="20" height="20" />
                          <rect x="100" y="80" width="20" height="20" />
                          <rect x="140" y="80" width="20" height="20" />
                          <rect x="160" y="80" width="20" height="20" />
                          
                          <rect x="20" y="100" width="20" height="20" />
                          <rect x="40" y="100" width="20" height="20" />
                          <rect x="80" y="100" width="20" height="20" />
                          <rect x="120" y="100" width="20" height="20" />
                          <rect x="160" y="100" width="20" height="20" />
                          
                          <rect x="60" y="120" width="20" height="20" />
                          <rect x="100" y="120" width="20" height="20" />
                          <rect x="140" y="120" width="20" height="20" />
                          
                          <rect x="20" y="140" width="20" height="20" />
                          <rect x="60" y="140" width="20" height="20" />
                          <rect x="80" y="140" width="20" height="20" />
                          <rect x="100" y="140" width="20" height="20" />
                          <rect x="120" y="140" width="20" height="20" />
                          <rect x="160" y="140" width="20" height="20" />
                          
                          <rect x="20" y="160" width="20" height="20" />
                          <rect x="40" y="160" width="20" height="20" />
                          <rect x="80" y="160" width="20" height="20" />
                          <rect x="140" y="160" width="20" height="20" />
                          <rect x="160" y="160" width="20" height="20" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Вагон</p>
                      <p className="text-2xl font-bold">05</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Место</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Пассажир</p>
                      <p className="font-medium">Иванов И.И.</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Документ</p>
                      <p className="font-medium">4500 123456</p>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать билет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Поиск билетов</h1>
              <p className="text-muted-foreground">Найдите поезд по вашему маршруту</p>
            </div>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Откуда</label>
                      <div className="relative">
                        <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                        <Input
                          placeholder="Москва"
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Куда</label>
                      <div className="relative">
                        <Icon name="MapPin" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                        <Input
                          placeholder="Санкт-Петербург"
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Дата отправления</label>
                      <div className="relative">
                        <Icon name="Calendar" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                        <Input
                          type="date"
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Пассажиры</label>
                      <div className="relative">
                        <Icon name="Users" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                        <Input
                          placeholder="1 пассажир"
                          className="pl-10 h-12"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full mb-4"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Icon name="SlidersHorizontal" size={20} className="mr-2" />
                    {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
                  </Button>

                  {showFilters && (
                    <div className="space-y-4 p-4 bg-secondary/30 rounded-lg mb-4 animate-fade-in">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Тип поезда</label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant={trainType === 'all' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setTrainType('all')}
                          >
                            Все
                          </Button>
                          <Button
                            variant={trainType === 'sapsan' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setTrainType('sapsan')}
                          >
                            Сапсан
                          </Button>
                          <Button
                            variant={trainType === 'express' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setTrainType('express')}
                          >
                            Экспресс
                          </Button>
                          <Button
                            variant={trainType === 'regular' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setTrainType('regular')}
                          >
                            Обычный
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Класс вагона</label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant={carClass === 'all' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCarClass('all')}
                          >
                            Все
                          </Button>
                          <Button
                            variant={carClass === 'luxury' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCarClass('luxury')}
                          >
                            Люкс
                          </Button>
                          <Button
                            variant={carClass === 'coupe' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCarClass('coupe')}
                          >
                            Купе
                          </Button>
                          <Button
                            variant={carClass === 'platzkart' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCarClass('platzkart')}
                          >
                            Плацкарт
                          </Button>
                          <Button
                            variant={carClass === 'seated' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCarClass('seated')}
                          >
                            Сидячий
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button size="lg" className="w-full">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти билеты
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Быстрый выбор</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Сегодня', 'Завтра', 'На выходные', 'Через неделю'].map((option) => (
                  <Button key={option} variant="outline" className="h-12">
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'routes' && (
          <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Популярные маршруты</h1>
              <p className="text-muted-foreground">Самые востребованные направления</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {popularRoutes.map((route, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{route.from}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="ArrowRight" size={16} />
                          <span className="text-sm">{route.time}</span>
                        </div>
                        <h3 className="font-semibold text-lg mt-2">{route.to}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">от {route.price} ₽</p>
                        <p className="text-sm text-muted-foreground mt-1">{route.trains} поездов</p>
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-primary/90">
                      Выбрать
                      <Icon name="ChevronRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <Icon name="Sparkles" size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Не нашли нужный маршрут?</h3>
                <p className="text-muted-foreground mb-4">Используйте поиск для любого направления</p>
                <Button onClick={() => setActiveTab('search')}>
                  Перейти к поиску
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Профиль</h1>
              <p className="text-muted-foreground">Личная информация и история поездок</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-primary text-white text-2xl">ИИ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">Иванов Иван</h2>
                    <p className="text-muted-foreground">ivan@example.com</p>
                    <Badge variant="secondary" className="mt-2">Стандарт</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start h-12">
                    <Icon name="User" size={20} className="mr-3" />
                    Личные данные
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12">
                    <Icon name="CreditCard" size={20} className="mr-3" />
                    Способы оплаты
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12">
                    <Icon name="Bell" size={20} className="mr-3" />
                    Уведомления
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12">
                    <Icon name="HelpCircle" size={20} className="mr-3" />
                    Помощь и поддержка
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Мои поездки</h2>
              {myTrips.map((trip, index) => (
                <Card key={index} className={trip.past ? 'opacity-60' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{trip.from} → {trip.to}</h3>
                        <p className="text-sm text-muted-foreground">{trip.date} • Поезд {trip.train}</p>
                        <p className="text-sm text-muted-foreground">Вагон {trip.car}, место {trip.seat}</p>
                      </div>
                      {!trip.past && (
                        <Badge className="bg-primary">Активный</Badge>
                      )}
                      {trip.past && (
                        <Icon name="Check" size={24} className="text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="grid grid-cols-4 h-16">
          <button
            onClick={() => setActiveTab('ticket')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'ticket' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Ticket" size={20} />
            <span className="text-xs">Билет</span>
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'search' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Search" size={20} />
            <span className="text-xs">Поиск</span>
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'routes' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="Map" size={20} />
            <span className="text-xs">Маршруты</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Icon name="User" size={20} />
            <span className="text-xs">Профиль</span>
          </button>
        </div>
      </nav>
    </div>
  );
}