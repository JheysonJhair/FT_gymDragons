import React, { useState, useEffect } from "react";
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
    console.log("Datos del nuevo cliente:", nuevoCliente);
    try {
      await crearCliente(nuevoCliente);
      console.log("¡Cliente registrado con éxito!");
    } catch (error) {
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
            <div className="col-sm-7">
              <div className="row mb-3">
                <label htmlFor="input49" className="col-sm-3 col-form-label">
                  Nombres
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input49"
                      placeholder="Nombre"
                      name="FirtsName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input49" className="col-sm-3 col-form-label">
                  Apellidos
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input49"
                      placeholder="Apellidos"
                      name="LastName"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input50" className="col-sm-3 col-form-label">
                  DNI
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-id-card" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input50"
                      placeholder="Dni"
                      name="Document"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input49" className="col-sm-3 col-form-label">
                  Direccion
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-map" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="input49"
                      placeholder="Dirección"
                      name="Address"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-3 col-form-label">
                  Estado civil
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-heart" />
                    </span>
                    <select
                      className="form-select"
                      name="MeritalStatus"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option >Seleccionar estado civil</option>
                      <option value={1}>Soltero</option>
                      <option value={2}>Casado</option>
                      <option value={3}>Viudo</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-3 col-form-label">
                  Género
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user-circle" />
                    </span>
                    <select
                      className="form-select"
                      name="Gender"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option >Seleccionar genero</option>
                      <option value={1}>Masculino</option>
                      <option value={2}>Femenino</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-3 col-form-label">
                  Departamento
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-globe" />
                    </span>
                    <select className="form-select" id="input53">
                      <option >Seleccionar Departamento</option>
                      <option value="apurimac">Apurímac</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-3 col-form-label">
                  Provincia
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-map" />
                    </span>
                    <select className="form-select" id="input53">
                      <option >Seleccionar Provincia</option>
                      <option value="andahuaylas">Andahuaylas</option>
                      <option value="antabamba">Antabamba</option>
                      <option value="aymaraes">Aymaraes</option>
                      <option value="cotabambas">Cotabambas</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input53" className="col-sm-3 col-form-label">
                  Distrito
                </label>
                <div className="col-sm-9">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-location-plus" />
                    </span>
                    <select className="form-select" id="input53">
                      <option >Seleccionar Distrito</option>
                      <option value="andahuaylas">Andahuaylas</option>
                      <option value="san_jeronimo">San Jerónimo</option>
                      <option value="talavera">Talavera</option>
                      <option value="antabamba">Antabamba</option>
                      <option value="el_oro">El Oro</option>
                      <option value="juan_espinoza_medrano">
                        Juan Espinoza Medrano
                      </option>
                      <option value="chalhuanca">Chalhuanca</option>
                      <option value="chincheros">Chincheros</option>
                      <option value="cotabambas">Cotabambas</option>
                      <option value="tambobamba">Tambobamba</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
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
                      name="Email"
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
                      placeholder="Número"
                      name="PhoneNumber"
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
