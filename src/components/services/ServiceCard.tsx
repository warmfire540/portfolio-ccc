import React from 'react';
import { Service } from '../../types/Service';
import { Code, Layers, RefreshCw, Database, Cloud, Shield } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Function to render the appropriate icon
  const renderIcon = () => {
    switch (service.icon) {
      case 'Code':
        return <Code size={36} className="text-indigo-600" />;
      case 'Layers':
        return <Layers size={36} className="text-indigo-600" />;
      case 'RefreshCw':
        return <RefreshCw size={36} className="text-indigo-600" />;
      case 'Database':
        return <Database size={36} className="text-indigo-600" />;
      case 'Cloud':
        return <Cloud size={36} className="text-indigo-600" />;
      case 'Shield':
        return <Shield size={36} className="text-indigo-600" />;
      default:
        return <Code size={36} className="text-indigo-600" />;
    }
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      data-testid={`service-card-${service.id}`}
    >
      <div className="mb-4">{renderIcon()}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
