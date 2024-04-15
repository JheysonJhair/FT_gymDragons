import React, { useState } from "react";
import Swal from "sweetalert2";
import { crearCliente } from "../../../services/Cliente";
import { Cliente } from "../../../types/Cliente";

export function NuevoCliente() {
  const [nuevoCliente, setNuevoCliente] = useState<Partial<Cliente>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNuevoCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleRegistrarCliente = async () => {
    try {
      await crearCliente(nuevoCliente);
      Swal.fire({
        title: "Correcto!",
        text: "El cliente se registro correctamente!",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Oppss, algo salio mal!",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      console.error("Error al registrar el nuevo cliente:", error);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Cliente</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="bx bx-home-alt" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Nuevo cliente
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="card p-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="row mb-3">
                <label htmlFor="input49" className="col-sm-4 col-form-label">
                  Nombres
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input49"
                      placeholder="Nombre"
                      name="firstName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input49" className="col-sm-4 col-form-label">
                  Apellidos
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input49"
                      placeholder="Apellidos"
                      name="lastName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="input49" className="col-sm-4 col-form-label">
                  Direccion
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-map" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input49"
                      placeholder="Dirección"
                      name="address"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-4 col-form-label">
                  Estado civil
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-heart" />
                    </span>
                    <select
                      className="form-select"
                      name="maritalStatus"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option>Seleccionar estado civil</option>
                      <option value="Soltero">Soltero</option>
                      <option value="Casado">Casado</option>
                      <option value="Viudo">Viudo</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-4 col-form-label">
                  Género
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user-circle" />
                    </span>
                    <select
                      className="form-select"
                      name="gender"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option>Seleccionar genero</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-4 col-form-label">
                  Tipo de documento
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-globe" />
                    </span>
                    <select
                      className="form-select"
                      name="documentType"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option>Seleccionar tipo</option>
                      <option value="dni">DNI</option>
                      <option value="carnet">Carnet</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input50" className="col-sm-4 col-form-label">
                  DNI
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-id-card" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input50"
                      placeholder="Dni"
                      name="document"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input50" className="col-sm-4 col-form-label">
                  Fecha de nacimiento
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-calendar-plus"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Fecha de Inicio"
                      name="Birdhate"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex flex-column align-items-center text-center mb-5">
                <img
                  src="../../assets/images/avatars/avatar-1.png"
                  alt="Admin"
                  className=" p-1 bg-danger"
                  width={220}
                />
              </div>
              <div className="row mb-3">
                <label htmlFor="input51" className="col-sm-4 col-form-label">
                  Correo Electrónico
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-envelope" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input51"
                      placeholder="Email"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input50" className="col-sm-4 col-form-label">
                  Telefono
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-phone" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input50"
                      placeholder="Número de teléfono"
                      name="phoneNumber"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input50" className="col-sm-4 col-form-label">
                  Whatssap
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-phone" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input50"
                      placeholder="Número de whatssap"
                      name="whatsapp"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">{/* Contenido */}</div>
                <div className="col-auto ml-auto">
                  <button
                    className="btn btn-danger btn-block"
                    onClick={handleRegistrarCliente}
                  >
                    <i className="bx bx-user-circle" /> Registrar cliente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
