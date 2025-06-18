import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: "Lightbulb",
      title: "Каталог инноваций",
      description:
        "Обширная база данных экологических технологий с детальными описаниями и характеристиками",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      icon: "BarChart3",
      title: "Аналитика и KPI",
      description:
        "Глубокий анализ эффективности технологий с интерактивными графиками и метриками",
      color: "bg-gradient-to-r from-green-500 to-green-600",
    },
    {
      icon: "Calendar",
      title: "Планирование внедрения",
      description:
        "Инструменты для расчета сроков, ресурсов и эффективности проектов",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
  ];

  const stats = [
    {
      value: "1,250+",
      label: "Инновационных технологий",
      trend: "+12% за месяц",
    },
    { value: "89%", label: "Средняя эффективность", trend: "+5% к цели" },
    { value: "420", label: "Успешных внедрений", trend: "+18 проектов" },
    { value: "67%", label: "Снижение выбросов", trend: "Целевой показатель" },
  ];

  return (
    <Layout>
      <Hero />

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексное решение для анализа, планирования и внедрения
              экологических инноваций
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Готовы начать зеленую трансформацию?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Присоединяйтесь к лидерам устойчивого развития и создавайте будущее
            уже сегодня
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4"
              >
                <Icon name="Lightbulb" size={20} className="mr-2" />
                Открыть каталог
              </Button>
            </Link>
            <Link to="/analytics">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4"
              >
                <Icon name="BarChart3" size={20} className="mr-2" />
                Посмотреть аналитику
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
