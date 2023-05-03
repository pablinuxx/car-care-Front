import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function AdminTypes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state) => state.session.token);

  const [types, setTypes] = useState([]);
  const [deleteTypeId, setDeleteTypeId] = useState(null);

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/types`,
      });
      setTypes(response.data);
    };
    getTypes();
  }, []);

  const handleDeleteType = async () => {
    try {
      await axios({
        // headers: {
        //   Authorization: `bearer: ${token} `,
        // },
        method: "delete",
        url: `${import.meta.env.VITE_APP_API_URL}/types/${deleteTypeId}`,
      });
      setTypes(types.filter((type) => type.id !== deleteTypeId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    types && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Types</h2>
              <Link to="/admin/add/types">
                <Button className="btn-add-tables" variant="outline">
                  <i className="bi bi-plus-circle me-3"></i> Add type
                </Button>
              </Link>
            </div>
            <TableContainer className="mt-5">
              <Table variant="striped" colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th className="table-service-title text-center">ID</Th>
                    <Th className="table-service-title text-center">Name</Th>
                    <Th className="table-service-title text-center">Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {types.map((type) => {
                    return (
                      <>
                        <Tr>
                          <Td key={type.id} className="text-center">
                            {type.id}
                          </Td>
                          <Td className="text-center">{type.name}</Td>
                          <Td className="text-center">
                            <Link to={`/admin/edit/types/${type.id}`}>
                              <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            </Link>
                            <Button className="btn-open-modal-delete">
                              <i
                                className="bi bi-trash3 mx-2 icon-delete-panel-admin"
                                onClick={() => {
                                  onOpen();
                                  setDeleteTypeId(type.id);
                                }}
                              ></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader className="modal-header">
                                  Delete type ID: {deleteTypeId}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Are you sure you want to delete it?
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    className="confirm-delete"
                                    onClick={() => {
                                      handleDeleteType(type.id);
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

export default AdminTypes;
