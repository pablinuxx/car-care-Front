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
import { ToastContainer, toast } from "react-toastify";

function AdminCustomers() {
  const token = useSelector((state) => state.session.token);

  const [deleteCustomerId, setDeleteCustomerId] = useState(null);
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
        // headers: {
        //   Authorization: `bearer: ${token}`,
        // },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/customers`,
      });
      setCustomers(response.data);
    };
    getCustomers();
  }, []);

  const handleDeleteCustomer = async () => {
    try {
      await axios({
        // headers: {
        //   Authorization: `bearer: ${token}`,
        // },
        method: "delete",
        url: `${
          import.meta.env.VITE_APP_API_URL
        }/customers/${deleteCustomerId}`,
      });
      setCustomers(
        customers.filter((customer) => customer.id !== deleteCustomerId)
      );
      notify();
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
                    <Th className="table-service-title text-center">ID</Th>
                    <Th className="table-service-title text-center">Avatar</Th>
                    <Th className="table-service-title text-center">
                      Fullname
                    </Th>
                    <Th className="table-service-title text-center">Email</Th>
                    <Th className="table-service-title text-center">Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {customers.map((customer) => {
                    return (
                      <>
                        <Tr key={customer.id}>
                          <Td className="text-center">{customer.id}</Td>
                          <Td className="text-center">
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
                          <Td className="text-center">
                            {customer.firstname} {customer.lastname}
                          </Td>
                          <Td className="text-center">{customer.email}</Td>
                          <Td className="text-center">
                            <Link to={`/admin/edit/customers/${customer.id}`}>
                              <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            </Link>
                            <Button className="btn-open-modal-delete">
                              <i
                                className="bi bi-trash3 mx-2 icon-delete-panel-admin"
                                onClick={() => {
                                  onOpen();
                                  setDeleteCustomerId(customer.id);
                                }}
                              ></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader className="modal-header">
                                  Delete customer ID: {deleteCustomerId}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Are you sure you want to delete it?
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    className="confirm-delete"
                                    onClick={() => {
                                      handleDeleteCustomer(customer.id);
                                      onClose();
                                    }}
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
