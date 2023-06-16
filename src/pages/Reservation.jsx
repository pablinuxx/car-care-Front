import React, { useEffect, useState } from "react";
import Navbar from "../components/allPagesComponents/Navbar";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

// const loggedUser = useSelector((state) => state.session);
// console.log(loggedUser.token);

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
                  <Th className="table-service-title">Action</Th>
                  <Th className="table-service-title">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {bookings.map((booking) => {
                  return (
                    <>
                      <Tr key={booking.id}>
                        <Td>{booking.serviceName}</Td>
                        <Td>
                          <button>view more</button>
                        </Td>
                        <Td>
                          <span className="badge text-bg-success">
                            {booking.dataValues.status}
                          </span>
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
