import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
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
import { Button } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

function AdminCustomers() {
  const token = useSelector((state) => state.session.token);
  const [customers, setCustomers] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const notify = () =>
    toast.success("Successfully deleted!", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios({
        headers: {
          Authorization: `bearer: ${token}`,
        },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/customers`,
      });
      setCustomers(response.data);
    };
    getCustomers();
  }, []);

  const handleDeleteCustomer = async (id) => {
    try {
      setCustomers(customers.filter((customer) => customer.id !== id));
      await axios({
        headers: {
          Authorization: `bearer: ${token}`,
        },
        method: "delete",
        url: `${import.meta.env.VITE_APP_API_URL}/customers/${id}`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    customers && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Customers</h2>
              <Link to="/admin/add/customers">
                <Button className="btn-add-tables" variant="outline">
                  <i className="bi bi-plus-circle me-3"></i> Add customers
                </Button>
              </Link>
            </div>
            <TableContainer className="mt-5">
              <Table variant="striped" colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th className="table-service-title">ID</Th>
                    <Th className="table-service-title">Avatar</Th>
                    <Th className="table-service-title">Fullname</Th>
                    <Th className="table-service-title">Email</Th>
                    <Th className="table-service-title">Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {customers.map((customer) => {
                    return (
                      <>
                        <Tr>
                          <Td key={customer.id}>{customer.id}</Td>
                          <Td>
                            <Avatar
                              src={
                                typeof customer.avatar === "object"
                                  ? `${import.meta.env.VITE_APP_API_URL}/${
                                      customer.avatar[0]
                                    }`
                                  : `${
                                      import.meta.env.VITE_APP_API_URL
                                    }/img/users/${customer.avatar}`
                              }
                              className="navbar-avatar"
                            />
                          </Td>
                          <Td>
                            {customer.firstname} {customer.lastname}
                          </Td>
                          <Td>{customer.email}</Td>
                          <Td>
                            <Link to={`/admin/edit/customers/${customer.id}`}>
                              <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            </Link>
                            <Button className="btn-open-modal-delete">
                              <i
                                className="bi bi-trash3 mx-2 icon-delete-panel-admin"
                                onClick={onOpen}
                              ></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>
                                  Delete customer {customer.firstname}{" "}
                                  {customer.lastname}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Are you sure you want to delete it?
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                  className="btn-modal-confirm-delete"
                                    onClick={() =>
                                      handleDeleteCustomer(customer.id)
                                    }
                                  >
                                    Confirm
                                  </Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>
                            <ToastContainer />
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

export default AdminCustomers;
