import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

function Reservation() {
  const [bookings, setBookings] = useState([]);
  const loggedUser = useSelector((state) => state.session);

  useEffect(() => {
    const getBookings = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/bookings/${loggedUser.id}`,
      });
      console.log(response.data);
      setBookings(response.data);
    };
    getBookings();
  }, []);

  return (
    bookings && (
      <>
        <Navbar />
        <div className="container">
          <h3 className="text-center mt-3">
            {loggedUser.firstname} {loggedUser.lastname} This is your bookings
          </h3>
          <div className="table-responsive mt-3">
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th className="table-service-title">Service</Th>
                  <Th className="table-service-title text-center">Status</Th>
                  <Th className="table-service-title text-end">Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {bookings.map((booking) => {
                  return (
                    <>
                      <Tr key={booking.id}>
                        <Td>{booking.serviceName}</Td>
                        <Td className="text-center">
                          <span className="badge text-bg-success">
                            {booking.dataValues.status}
                          </span>
                        </Td>
                        <Td className="text-end">
                          <button className="btn-reservation btn-effect">
                            <span className="btn-text">view more</span>
                          </button>
                        </Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </div>
        </div>
      </>
    )
  );
}

export default Reservation;
