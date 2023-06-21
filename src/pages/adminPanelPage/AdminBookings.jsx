import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function AdminBookings() {
  const token = useSelector((state) => state.session.token);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const [newStatus, setNewStatus] = useState("");
  const [selectedBooking, setSelectedBookings] = useState(null);
  const [bookings, setBookings] = useState([]);

  const handleChangeStatus = async () => {
    try {
      const response = await axios({
        headers: {
          Authorization: `bearer ${token} `,
        },
        method: "patch",
        url: `${import.meta.env.VITE_APP_API_URL}/bookings/${id}/status`,
        data: {
          newStatus,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllBookings = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/bookings`,
      });
      console.log(response.data);
      setBookings(response.data);
    };
    getAllBookings();
  }, []);

  return (
    bookings && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Service booked</h2>
            </div>
            <TableContainer className="mt-5">
              <Table variant="striped" colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th className="table-service-title ">ID</Th>
                    <Th className="table-service-title ">Customer</Th>
                    <Th className="table-service-title ">Service ID</Th>
                    <Th className="table-service-title ">Status</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {bookings.map((booking) => {
                    return (
                      <>
                        <Tr key={booking.id}>
                          <Td>{booking.dataValues.id}</Td>
                          <Td>{booking.customerName}</Td>
                          <Td>{booking.dataValues.serviceId}</Td>
                          <Td>
                            {booking.dataValues.status}
                            <Button className="btn-open-modal-delete">
                              <i
                                className="bi bi-pencil ms-2"
                                onClick={() => {
                                  onOpen();
                                  setSelectedBookings(booking.id);
                                }}
                              ></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader className="modal-header">
                                  Update status service
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Change the status:
                                  <form className="mt-3">
                                    <select
                                    // value={}
                                    // onChange={() =>
                                    //   setNewStatus(e.target.value)
                                    // }
                                    >
                                      <option value={""}>
                                        Select a status
                                      </option>
                                      <option value={"Confirmed"}>
                                        Confirmed
                                      </option>
                                      <option value={"Progressing"}>
                                        Progressing
                                      </option>
                                      <option value={"Done"}>Done</option>
                                      <option value={"Cancelled"}>
                                        Cancelled
                                      </option>
                                    </select>
                                  </form>
                                </ModalBody>
                                <ModalFooter>
                                  <Button
                                    className="confirm-delete"
                                    onClick={() => {
                                      handleChangeStatus(newStatus);
                                      onClose();
                                    }}
                                  >
                                    Confirm
                                  </Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Td>
                        </Tr>
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </section>
        </div>
      </>
    )
  );
}

export default AdminBookings;
