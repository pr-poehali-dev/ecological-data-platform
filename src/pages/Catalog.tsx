import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все категории", count: 1250 },
    { id: "energy", name: "Энергетика", count: 340 },
    { id: "transport", name: "Транспорт", count: 280 },
    { id: "agriculture", name: "Сельское хозяйство", count: 220 },
    { id: "waste", name: "Переработка отходов", count: 180 },
    { id: "water", name: "Водные ресурсы", count: 140 },
    { id: "construction", name: "Строительство", count: 90 },
  ];

  const innovations = [
    {
      id: 1,
      title: "Солнечные панели нового поколения",
      category: "energy",
      efficiency: "95%",
      cost: "Средняя",
      impact: "Высокое",
      description:
        "Перовскитные солнечные элементы с рекордной эффективностью преобразования",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Электрические грузовики",
      category: "transport",
      efficiency: "87%",
      cost: "Высокая",
      impact: "Очень высокое",
      description: "Полностью электрические грузовики для городской логистики",
      image:
        "https://images.unsplash.com/photo-1558618047-dd3a8b9c5cd4?w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Вертикальные фермы",
      category: "agriculture",
      efficiency: "92%",
      cost: "Средняя",
      impact: "Высокое",
      description: "Гидропонные системы для городского выращивания овощей",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Плазменная переработка",
      category: "waste",
      efficiency: "89%",
      cost: "Высокая",
      impact: "Очень высокое",
      description: "Плазменная газификация для утилизации твердых отходов",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop",
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Очень высокое":
        return "bg-green-100 text-green-800";
      case "Высокое":
        return "bg-blue-100 text-blue-800";
      case "Среднее":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
            Каталог инноваций
          </h1>
          <p className="text-xl text-gray-600">
            Откройте для себя передовые экологические технологии
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-lg">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Поиск инноваций..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-montserrat font-bold text-lg mb-4">
                Категории
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? "bg-green-100 text-green-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Innovation Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {innovations.map((innovation) => (
                <div
                  key={innovation.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-montserrat font-bold text-xl text-gray-900">
                        {innovation.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(innovation.impact)}`}
                      >
                        {innovation.impact}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {innovation.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Эффективность</p>
                        <p className="font-semibold text-green-600">
                          {innovation.efficiency}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Стоимость</p>
                        <p className="font-semibold">{innovation.cost}</p>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
