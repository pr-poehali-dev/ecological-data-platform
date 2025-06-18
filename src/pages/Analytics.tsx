import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import Icon from "@/components/ui/icon";

const Analytics = () => {
  const kpis = [
    {
      value: "67%",
      label: "Снижение выбросов CO₂",
      trend: "+12% за квартал",
      color: "text-green-600",
    },
    {
      value: "1.2М",
      label: "кВт·ч экономии энергии",
      trend: "+8% к плану",
      color: "text-blue-600",
    },
    {
      value: "420",
      label: "Успешных внедрений",
      trend: "+35 в этом месяце",
      color: "text-purple-600",
    },
    {
      value: "89%",
      label: "Средняя эффективность",
      trend: "Выше среднего",
      color: "text-orange-600",
    },
  ];

  const regions = [
    { name: "Москва", projects: 85, efficiency: "92%", emissions: "-45%" },
    {
      name: "Санкт-Петербург",
      projects: 67,
      efficiency: "88%",
      emissions: "-38%",
    },
    {
      name: "Екатеринбург",
      projects: 45,
      efficiency: "85%",
      emissions: "-42%",
    },
    { name: "Новосибирск", projects: 38, efficiency: "87%", emissions: "-35%" },
    { name: "Краснодар", projects: 29, efficiency: "90%", emissions: "-48%" },
  ];

  const technologies = [
    { name: "Солнечная энергетика", adoption: 85, growth: "+15%" },
    { name: "Ветряная энергетика", adoption: 72, growth: "+12%" },
    { name: "Электротранспорт", adoption: 68, growth: "+28%" },
    { name: "Умные здания", adoption: 54, growth: "+22%" },
    { name: "Переработка отходов", adoption: 47, growth: "+18%" },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">
            Аналитика и KPI
          </h1>
          <p className="text-xl text-gray-600">
            Мониторинг эффективности экологических инноваций
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <StatCard key={index} {...kpi} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Regional Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Icon name="MapPin" size={24} className="text-blue-600 mr-3" />
              <h3 className="font-montserrat font-bold text-xl">
                Региональная эффективность
              </h3>
            </div>

            <div className="space-y-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {region.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {region.projects} проектов
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-green-600 font-medium">
                      Эффективность: {region.efficiency}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      Выбросы: {region.emissions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Adoption */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Icon
                name="TrendingUp"
                size={24}
                className="text-green-600 mr-3"
              />
              <h3 className="font-montserrat font-bold text-xl">
                Внедрение технологий
              </h3>
            </div>

            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      {tech.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-600 font-medium">
                        {tech.growth}
                      </span>
                      <span className="text-sm text-gray-600">
                        {tech.adoption}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${tech.adoption}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Impact Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Icon name="BarChart3" size={24} className="text-purple-600 mr-3" />
            <h3 className="font-montserrat font-bold text-xl">
              Экологическое воздействие по месяцам
            </h3>
          </div>

          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 72, 68, 75, 82, 78, 85, 89, 87, 92, 88, 94].map(
              (height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all duration-300 hover:from-green-600 hover:to-emerald-500"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-2">
                    {
                      [
                        "Янв",
                        "Фев",
                        "Мар",
                        "Апр",
                        "Май",
                        "Июн",
                        "Июл",
                        "Авг",
                        "Сен",
                        "Окт",
                        "Ноя",
                        "Дек",
                      ][index]
                    }
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
