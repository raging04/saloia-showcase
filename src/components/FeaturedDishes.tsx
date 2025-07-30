const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-red-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-800 mb-4">
            Pratos em Destaque - TESTE
          </h2>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">
            Uma amostra dos sabores que o esperam na Taberna Saloia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Bacalhau à Brás
            </h3>
            <p className="text-gray-600">
              O nosso prato mais tradicional
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mariscada da Casa
            </h3>
            <p className="text-gray-600">
              Fresco do mar todos os dias
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Leitão à Bairrada
            </h3>
            <p className="text-gray-600">
              Assado no forno a lenha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;