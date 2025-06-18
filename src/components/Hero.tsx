import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 leading-tight">
            Экологические инновации
            <span className="block text-green-200">
              для устойчивого будущего
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-green-100 mb-8 leading-relaxed">
            Откройте для себя передовые технологии, анализируйте их
            эффективность и планируйте внедрение для создания более зеленого
            мира
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-4"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Исследовать каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4"
            >
              <Icon name="BarChart3" size={20} className="mr-2" />
              Смотреть аналитику
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
