import React, { useState } from "react";
import Swal from "sweetalert2";
import { crearCliente } from "../../../services/Cliente";
import { Cliente } from "../../../types/Cliente";
import { useNavigate } from "react-router-dom";
import {
  validateRequiredField,
  validateDNI,
  validateEmail,
  validatePhoneNumber,
} from "../../../utils/validations";

export function NuevoCliente() {
  const navigate = useNavigate();
  const [nuevoCliente, setNuevoCliente] = useState<Partial<Cliente>>({});
  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    lastName: "",
    address: "",
    maritalStatus: "",
    gender: "",
    documentType: "",
    document: "",
    birdhate: "",
    email: "",
    phoneNumber: "",
    whatsapp: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNuevoCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (
    name: string,
    value: string | undefined
  ): string | null => {
    switch (name) {
      case "document":
        return validateDNI(value);
      case "email":
        return validateEmail(value);
      case "phoneNumber":
      case "whatsapp":
        return validatePhoneNumber(value);
      default:
        return validateRequiredField(value);
    }
  };

  type ClienteKey = keyof Partial<Cliente>;

  const handleRegistrarCliente = async () => {
    try {
      const requiredFields: ClienteKey[] = [
        "firstName",
        "lastName",
        "address",
        "maritalStatus",
        "gender",
        "documentType",
        "document",
        "birdhate",
        "email",
        "phoneNumber",
        "whatsapp",
      ];
      const invalidFields = requiredFields.filter(
        (field) => !nuevoCliente[field]
      );
      if (invalidFields.length > 0) {
        throw new Error("Por favor complete todos los campos obligatorios.");
      }

      await crearCliente(nuevoCliente);
      Swal.fire({
        title: "Correcto!",
        text: "El cliente se registró correctamente!",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      navigate("/area/clientes/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Complete todos los campos",
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
                      className={`form-control ${
                        errorMessages.firstName && "is-invalid"
                      }`}
                      id="input49"
                      placeholder="Nombre"
                      name="firstName"
                      onChange={handleInputChange}
                    />
                    {errorMessages.firstName && (
                      <div className="invalid-feedback">
                        {errorMessages.firstName}
                      </div>
                    )}
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
                      className={`form-control ${
                        errorMessages.lastName && "is-invalid"
                      }`}
                      id="input49"
                      placeholder="Apellidos"
                      name="lastName"
                      onChange={handleInputChange}
                    />
                    {errorMessages.lastName && (
                      <div className="invalid-feedback">
                        {errorMessages.lastName}
                      </div>
                    )}
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
                      className={`form-control ${
                        errorMessages.address && "is-invalid"
                      }`}
                      id="input49"
                      placeholder="Dirección"
                      name="address"
                      onChange={handleInputChange}
                    />
                    {errorMessages.address && (
                      <div className="invalid-feedback">
                        {errorMessages.address}
                      </div>
                    )}
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
                      className={`form-select ${
                        errorMessages.maritalStatus && "is-invalid"
                      }`}
                      name="maritalStatus"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option>Seleccionar estado civil</option>
                      <option value="Soltero">Soltero</option>
                      <option value="Casado">Casado</option>
                      <option value="Viudo">Viudo</option>
                    </select>
                    {errorMessages.maritalStatus && (
                      <div className="invalid-feedback">
                        {errorMessages.maritalStatus}
                      </div>
                    )}
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
                      className={`form-select ${
                        errorMessages.gender && "is-invalid"
                      }`}
                      name="gender"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option>Seleccionar genero</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                    {errorMessages.gender && (
                      <div className="invalid-feedback">
                        {errorMessages.gender}
                      </div>
                    )}
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
                      className={`form-select ${
                        errorMessages.documentType && "is-invalid"
                      }`}
                      name="documentType"
                      onChange={handleInputChange}
                      id="input53"
                    >
                      <option>Seleccionar tipo</option>
                      <option value="dni">DNI</option>
                      <option value="carnet">Carnet</option>
                    </select>
                    {errorMessages.documentType && (
                      <div className="invalid-feedback">
                        {errorMessages.documentType}
                      </div>
                    )}
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
                      className={`form-control ${
                        errorMessages.document && "is-invalid"
                      }`}
                      id="input50"
                      placeholder="Dni"
                      name="document"
                      onChange={handleInputChange}
                    />
                    {errorMessages.document && (
                      <div className="invalid-feedback">
                        {errorMessages.document}
                      </div>
                    )}
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
                      name="birdhate"
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
                      className={`form-control ${
                        errorMessages.email && "is-invalid"
                      }`}
                      id="input51"
                      placeholder="Email"
                      name="email"
                      onChange={handleInputChange}
                    />
                    {errorMessages.email && (
                      <div className="invalid-feedback">
                        {errorMessages.email}
                      </div>
                    )}
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
                      className={`form-control ${
                        errorMessages.phoneNumber && "is-invalid"
                      }`}
                      id="input50"
                      placeholder="Número de teléfono"
                      name="phoneNumber"
                      onChange={handleInputChange}
                    />
                    {errorMessages.phoneNumber && (
                      <div className="invalid-feedback">
                        {errorMessages.phoneNumber}
                      </div>
                    )}
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
                      className={`form-control ${
                        errorMessages.whatsapp && "is-invalid"
                      }`}
                      id="input50"
                      placeholder="Número de whatssap"
                      name="whatsapp"
                      onChange={handleInputChange}
                    />
                    {errorMessages.whatsapp && (
                      <div className="invalid-feedback">
                        {errorMessages.whatsapp}
                      </div>
                    )}
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
