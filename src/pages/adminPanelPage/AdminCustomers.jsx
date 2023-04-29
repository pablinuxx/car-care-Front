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
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function AdminCustomers() {
  const loggedUser = useSelector((state) => state.session);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios({
        // headers: {
        //   Authorization: `bearer: ${token}`,
        // },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/customers`,
      });
      console.log(response.data);
      setCustomers(response.data);
    };
    getCustomers();
  }, []);

  return (
    customers && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Customers</h2>
              <Link to="/admin/add/services">
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
                        <Tr key={customer.id}>
                          <Td>{customer.id}</Td>
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
                            <Button
                              // onClick={onOpen}
                              className="btn-open-modal-delete"
                            >
                              <i className="bi bi-trash3 mx-2 icon-delete-panel-admin"></i>
                            </Button>
                            {/* <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Delete service</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Are you sure you want to delete this service?
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    className="confirm-delete"
                                    onClick={() => handleDeleteService(id)}
                                  >
                                    Delete
                                  </Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal> */}
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
