interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
  color?: string;
}

const StatCard = ({
  value,
  label,
  trend,
  color = "text-green-600",
}: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-3xl font-bold ${color} mb-1`}>{value}</p>
          <p className="text-gray-600 text-sm">{label}</p>
        </div>
        {trend && (
          <div className="text-right">
            <p className="text-green-500 text-sm font-medium">{trend}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
