import React from "react";
import { useLocation } from "react-router-dom";

function PurchaseOrder() {
  const location = useLocation();

  const plate = location.state.plate;
  const carModel = location.state.plate;
  const serviceId = location.state.serviceId;
  const details = location.state.details;

  console.log(serviceId);

  //   useEffect(() => {
  //     const getServices = async () => {
  //       const response = await axios({
  //         method: "GET",
  //         url: `${import.meta.env.VITE_APP_API_URL}/services`,
  //       });
  //       setServices(response.data);
  //     };
  //     getServices();
  //   }, []);

  return (
    plate &&
    carModel &&
    serviceId &&
    details && (
      <>
        <div>
          <h2>Thanks for your reservation</h2>
          <p>Booking number: {location.state.id}</p>
          <p>
            {details.time} {details.date}
          </p>
          <p>{service.name}</p>
        </div>
      </>
    )
  );
}

export default PurchaseOrder;
