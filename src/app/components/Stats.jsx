const stats = [
  { value: "50K+", label: "Acres Managed" },
  { value: "1,200+", label: "Active Robots" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "30%", label: "Average Yield Increase" }
];

export function Stats() {
  return (
    <section className="py-24 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl text-white mb-2">{stat.value}</div>
              <div className="text-lg text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
