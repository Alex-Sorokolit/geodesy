import services from "./services.json";
import portfolio from "./portfolio.json";

export const getServiseById = (serviceId) => {
  // console.log(services);
  return services.find((service) => service.id === serviceId);
};
export const getPortfolioById = (portfolioId) => {
  // console.log(services);
  return portfolio.find((port) => port.id === portfolioId);
};
