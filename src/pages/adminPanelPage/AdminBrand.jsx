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
import { Link } from "react-router-dom";
import axios from "axios";

function AdminBrand() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/brands`,
      });
      setBrands(response.data);
    };
    getBrands();
  });

  return (
    <>
      <NavbarAdmin />
      <div className="d-flex">
        <SidebarAdmin />
        <section className="container p-4">
          <div className="d-flex justify-content-between">
            <h2>Brands</h2>
            <Link to="/admin/add/services">
              <Button className="btn-add-tables" variant="outline">
                <i className="bi bi-plus-circle me-3"></i> Add brand
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
                {brands.map((brand) => {
                  return (
                    <>
                      <Tr>
                        <Td key={brand.id} className="text-center">
                          {brand.id}
                        </Td>
                        <Td className="text-center">{brand.name}</Td>
                        <Td className="text-center">
                          <Link to={`/admin/edit/brands/${brand.id}`}>
                            <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                          </Link>
                          <Button className="btn-open-modal-delete">
                            <i
                              className="bi bi-trash3 mx-2 icon-delete-panel-admin"
                              onClick={() => {
                                onOpen();
                                // setDeleteServiceId(service.id);
                              }}
                            ></i>
                          </Button>
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader className="modal-header">
                                {/* Delete service ID: {deleteSerivceId} */}
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                Are you sure you want to delete it?
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  className="confirm-delete"
                                  onClick={() => {
                                    // handleDeleteService(brand.id);
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
  );
}

export default AdminBrand;
