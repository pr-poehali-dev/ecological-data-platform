import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Planning = () => {
  const [projectName, setProjectName] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const planningSteps = [
    {
      id: 1,
      title: "Анализ потребностей",
      status: "completed",
      duration: "2 недели",
    },
    {
      id: 2,
      title: "Выбор технологий",
      status: "active",
      duration: "3 недели",
    },
    {
      id: 3,
      title: "Планирование ресурсов",
      status: "pending",
      duration: "4 недели",
    },
    { id: 4, title: "Внедрение", status: "pending", duration: "12 недель" },
    { id: 5, title: "Мониторинг", status: "pending", duration: "Постоянно" },
  ];

  const resources = [
    {
      name: "Солнечные панели",
      quantity: 150,
      unit: "шт",
      cost: 2250000,
      available: true,
    },
    {
      name: "Инверторы",
      quantity: 15,
      unit: "шт",
      cost: 450000,
      available: true,
    },
    {
      name: "Монтажные системы",
      quantity: 1,
      unit: "комплект",
      cost: 180000,
      available: false,
    },
    {
      name: "Кабельная продукция",
      quantity: 500,
      unit: "м",
      cost: 75000,
      available: true,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Icon name="CheckCircle" size={20} className="text-green-600" />;
      case "active":
        return <Icon name="Clock" size={20} className="text-blue-600" />;
      default:
        return <Icon name="Circle" size={20} className="text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "active":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const totalCost = resources.reduce((sum, resource) => sum + resource.cost, 0);
  const estimatedSavings = Math.round(totalCost * 0.35);
  const roi = Math.round((estimatedSavings / totalCost) * 100);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
            Планирование внедрения
          </h1>
          <p className="text-xl text-gray-600">
            Инструменты для эффективного планирования экологических проектов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Planning Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Plus" size={20} className="mr-2 text-green-600" />
                  Новый проект
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название проекта
                  </label>
                  <Input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Солнечная электростанция"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Бюджет (₽)
                  </label>
                  <Input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="3000000"
                    type="number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Временные рамки
                  </label>
                  <Input
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="6 месяцев"
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать план
                </Button>
              </CardContent>
            </Card>

            {/* ROI Calculator */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="TrendingUp"
                    size={20}
                    className="mr-2 text-blue-600"
                  />
                  Калькулятор ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Общие затраты:</span>
                    <span className="font-semibold">
                      {totalCost.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Экономия/год:</span>
                    <span className="font-semibold text-green-600">
                      {estimatedSavings.toLocaleString()} ₽
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-semibold text-blue-600">{roi}%</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Окупаемость:</span>
                      <span className="font-semibold">2.8 года</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Calendar"
                    size={20}
                    className="mr-2 text-purple-600"
                  />
                  Этапы реализации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {planningSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {getStatusIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900">
                            {step.title}
                          </h4>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(step.status)}`}
                          >
                            {step.duration}
                          </span>
                        </div>
                        {index < planningSteps.length - 1 && (
                          <div className="w-px h-4 bg-gray-200 ml-2.5 mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Package"
                    size={20}
                    className="mr-2 text-orange-600"
                  />
                  Ресурсы и материалы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${resource.available ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {resource.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {resource.quantity} {resource.unit}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {resource.cost.toLocaleString()} ₽
                        </p>
                        <p
                          className={`text-xs font-medium ${resource.available ? "text-green-600" : "text-red-600"}`}
                        >
                          {resource.available ? "В наличии" : "Под заказ"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t flex justify-between items-center">
                  <span className="font-semibold text-lg">
                    Общая стоимость:
                  </span>
                  <span className="font-bold text-xl text-green-600">
                    {totalCost.toLocaleString()} ₽
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Planning;
