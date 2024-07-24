import PricingPlans from '../components/PricingPlans';

const PricingPage = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen ">
      <div className="container mx-auto px-4 py-24 pb-64">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <PricingPlans />
      </div>
    </div>
  );
};

export default PricingPage;