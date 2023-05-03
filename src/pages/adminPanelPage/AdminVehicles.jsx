import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

function AdminVehicles() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [vehicles, setVehicles] = useState([]);
  const [deleteVehicleId, setDeleteVehicleId] = useState(null);

  const token = useSelector((state) => state.session.token);

  useEffect(() => {
    const getVehicles = async () => {
      const response = await axios({
        // headers: { Authorization: `bearer: ${token}` },
        method: "get",
        url: `${import.meta.env.VITE_APP_API_URL}/vehicles`,
      });
      setVehicles(response.data);
    };
    getVehicles();
  }, []);

  const handleDeleteVehicle = async () => {
    try {
      await axios({
        // headers: { Authorization: `bearer: ${token}` },
        method: "delete",
        url: `${import.meta.env.VITE_APP_API_URL}/vehicles/${deleteVehicleId}`,
      });
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== deleteVehicleId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    vehicles && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Vehicles</h2>
              <Link to="/admin/add/vehicles">
                <Button className="btn-add-tables" variant="outline">
                  <i className="bi bi-plus-circle me-3"></i> Add vehicles
                </Button>
              </Link>
            </div>
            <TableContainer className="mt-5">
              <Table variant="striped" colorScheme="gray">
                <Thead>
                  <Tr className="table-title">
                    <Th className="table-service-title text-center">ID</Th>
                    <Th className="table-service-title text-center">Name</Th>
                    <Th className="table-service-title text-center">Year</Th>
                    <Th className="table-service-title text-center">Color</Th>
                    <Th className="table-service-title text-center">Price</Th>
                    <Th className="table-service-title text-center">
                      Brand id
                    </Th>
                    <Th className="table-service-title text-center">Type id</Th>
                    <Th className="table-service-title text-center">Action</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {vehicles.map((vehicle) => {
                    return (
                      <>
                        <Tr>
                          <Td key={vehicle.id} className="text-center">
                            {vehicle.id}
                          </Td>
                          <Td className="text-center">{vehicle.name}</Td>
                          <Td className="text-center">{vehicle.year}</Td>
                          <Td className="text-center">{vehicle.color}</Td>
                          <Td className="text-center">USD {vehicle.price}</Td>
                          <Td className="text-center">{vehicle.brandId}</Td>
                          <Td className="text-center">{vehicle.typeId}</Td>
                          <Td className="text-center">
                            <Link to={`/admin/edit/vehicles/${vehicle.id}`}>
                              <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            </Link>
                            <Button className="btn-open-modal-delete">
                              <i
                                className="bi bi-trash3 mx-2 icon-delete-panel-admin"
                                onClick={() => {
                                  onOpen();
                                  setDeleteVehicleId(vehicle.id);
                                }}
                              ></i>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader className="modal-header">
                                  Delete vehicle ID: {deleteVehicleId}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  Are you sure you want to delete it?
                                </ModalBody>

                                <ModalFooter>
                                  <Button
                                    className="confirm-delete"
                                    onClick={() => {
                                      handleDeleteVehicle(vehicle.id);
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

export default AdminVehicles;
