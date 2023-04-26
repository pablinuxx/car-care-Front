import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/adminPanel/NavbarAdmin";
import SidebarAdmin from "../components/adminPanel/SidebarAdmin";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminService() {
  const [services, setServices] = useState([]);

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

  return (
    services && (
      <>
        <NavbarAdmin />
        <div className="d-flex">
          <SidebarAdmin />
          <section className="container p-4">
            <div className="d-flex justify-content-between">
              <h2>Services</h2>
              <Link to="/create/service">
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
                            <i className="bi bi-pencil-square mx-2 icon-modify-panel-admin"></i>
                            <i className="bi bi-trash3 mx-2 icon-delete-panel-admin"></i>
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
