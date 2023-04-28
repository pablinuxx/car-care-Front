import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
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
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function AdminService() {
  const { id } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [services, setServices] = useState([]);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  useEffect(() => {
    const getServices = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/services`,
      });
      setServices(response.data);
    };
    getServices();
  }, []);

  const handleDeleteService = async (id) => {
    try {
      // setServices(services.filter((item) => item.id !== id));
      const response = await axios({
        // headers: {
        //   Authorization: `bearer: ${token} `,
        // },
        method: "delete",
        url: `${import.meta.env.VITE_APP_API_URL}/services/${id}`,
      });
      console.log(serviceToDelete);
      setServiceToDelete(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    services && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Services</h2>
              <Link to="/admin/add/services">
                <Button className="btn-add-tables" variant="outline">
                  <i className="bi bi-plus-circle me-3"></i> Add services
                </Button>
              </Link>
            </div>
            <TableContainer className="mt-5">
              <Table variant="striped" colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th className="table-service-title">ID</Th>
                    <Th className="table-service-title">Name</Th>
                    <Th className="table-service-title">Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {services.map((service) => {
                    return (
                      <>
                        <Tr key={service.id}>
                          <Td>{service.id}</Td>
                          <Td>{service.name}</Td>
                          <Td>
                            <Link to={`/admin/edit/services/${service.id}`}>
                              <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            </Link>
                            <Button
                              onClick={onOpen}
                              className="btn-open-modal-delete"
                            >
                              <i className="bi bi-trash3 mx-2 icon-delete-panel-admin"></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
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
                                    onClick={() =>
                                      handleDeleteService(serviceToDelete)
                                    }
                                  >
                                    Delete
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

export default AdminService;
