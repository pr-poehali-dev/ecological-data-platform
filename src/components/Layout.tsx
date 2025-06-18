import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/", icon: "Home" },
    { name: "Каталог инноваций", href: "/catalog", icon: "Lightbulb" },
    { name: "Аналитика", href: "/analytics", icon: "BarChart3" },
    { name: "Планирование", href: "/planning", icon: "Calendar" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl text-gray-900">
                EcoTech
              </span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">EcoTech</span>
            </div>
            <p className="text-gray-400">
              Платформа экологических инноваций для устойчивого будущего
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
