import React, { useState, useEffect } from "react";
import { obtenerClientes } from "../../../services/Cliente";
import { Cliente } from "../../../types/Cliente";

export function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerClientes();
      console.log(data);
      setClientes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="table-responsive">
          <table
            id="example"
            className="table table-striped table-bordered"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>DNI</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Estado Civil</th>
                <th>Fecha de nacimiento</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{cliente.FirtsName}</td>
                  <td>{cliente.LastName}</td>
                  <td>{cliente.Document}</td>
                  <td>{cliente.PhoneNumber}</td>
                  <td>{cliente.MeritalStatus}</td>
                  <td>{cliente.Birdhate}</td>
                  <td>{cliente.Address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}