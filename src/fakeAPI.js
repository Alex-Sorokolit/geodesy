import services from "./services.json";

export const getServiseById = (serviceId) => {
  // console.log(services);
  return services.find((service) => service.id === serviceId);
};
