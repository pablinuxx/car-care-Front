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

function AdminList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state) => state.session.token);

  const [admins, setAdmins] = useState([]);
  const [deleteAdminId, setDeleteAdminId] = useState(null);

  useEffect(() => {
    const getAdmins = async () => {
      const response = await axios({
        // headers: { Authorization: `bearer: ${token}` },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/admins`,
      });
      setAdmins(response.data);
    };
    getAdmins();
  }, []);

  const handleDeleteAdmin = async () => {
    try {
      await axios({
        // headers: { Authorization: `bearer: ${token}` },
        method: "delete",
        url: `${import.meta.env.VITE_APP_API_URL}/admins/${deleteAdminId}`,
      });
      setAdmins(admins.filter((admin) => admin.id !== deleteAdminId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    admins && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Administrators</h2>
              <Link to="/admin/add/admin">
                <Button className="btn-add-tables" variant="outline">
                  <i className="bi bi-plus-circle me-3"></i> Add admin
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
                  {admins.map((admin) => {
                    return (
                      <>
                        <Tr key={admin.id}>
                          <Td>{admin.id}</Td>
                          <Td>
                            <Avatar
                              src={
                                typeof admin.avatar === "object"
                                  ? `${import.meta.env.VITE_APP_API_URL}/${
                                      admin.avatar[0]
                                    }`
                                  : `${
                                      import.meta.env.VITE_APP_API_URL
                                    }/img/users/${admin.avatar}`
                              }
                              className="navbar-avatar"
                            />
                          </Td>
                          <Td>
                            {admin.firstname} {admin.lastname}
                          </Td>
                          <Td>{admin.email}</Td>
                          <Td>
                            <Link to={`/admin/edit/admin/${admin.id}`}>
                              <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            </Link>
                            <Button className="btn-open-modal-delete">
                              <i
                                className="bi bi-trash3 mx-2 icon-delete-panel-admin"
                                onClick={() => {
                                  onOpen();
                                  setDeleteAdminId(admin.id);
                                }}
                              ></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>
                                  Delete administratos ID: {deleteAdminId}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Are you sure you want to delete it?
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    className="confirm-delete"
                                    onClick={() => {
                                      handleDeleteAdmin(admin.id);
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

export default AdminList;
