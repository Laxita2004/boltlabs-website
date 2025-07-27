import { motion } from 'framer-motion';

const DomainHero = ({ domain = '' }) => {
  const domainTitles = {
    'software-development': 'Software Development Team',
    'graphic-designing': 'Graphic Designing Team',
    'digital-marketing': 'Digital Marketing Team',
    'iot': 'IOT Team',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-10">
        <span className="text-dark">{domainTitles[domain] || `${domain.replace('-', ' ')} Team`}</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Meet the talented individuals powering our {domain.replace('-', ' ')} initiatives
      </p>
    </motion.section>
  );
};

export default DomainHero;
