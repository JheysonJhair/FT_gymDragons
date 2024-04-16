import React, { useState } from "react";
import Swal from "sweetalert2";
import { crearUsuario } from "../../../services/Usuario";
import { Usuario } from "../../../types/Usuario";
import { useNavigate } from "react-router-dom";
import {
  validateRequiredField,
  validateDNI,
  validateEmail,
  validatePhoneNumber,
  validatePassword,
} from "../../../utils/validations";

export function NewUser() {
  const navigate = useNavigate();
  const [nuevoUsuario, setNuevoUsuario] = useState<Partial<Usuario>>({});
  const [errorMessages, setErrorMessages] = useState({
    FirstName: "",
    LastName: "",
    Dni: "",
    PhoneNumber: "",
    Mail: "",
    Username: "",
    Password: "",
    RoleId: "",
    Access: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNuevoUsuario((prevUsuario) => ({
      ...prevUsuario,
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
      case "Dni":
        return validateDNI(value);
      case "Mail":
        return validateEmail(value);
      case "PhoneNumber":
        return validatePhoneNumber(value);
      case "Password":
        return validatePassword(value);
      default:
        return validateRequiredField(value);
    }
  };

  type UsuarioKey = keyof Partial<Usuario>;

  const handleRegistrarUsuario = async () => {
    try {
      const requiredFields: UsuarioKey[] = [
        "FirstName",
        "LastName",
        "Dni",
        "PhoneNumber",
        "Mail",
        "Username",
        "Password",
        "RoleId",
        "Access",
      ];
      const invalidFields = requiredFields.filter(
        (field) => !nuevoUsuario[field]
      );
      if (invalidFields.length > 0) {
        throw new Error("Por favor complete todos los campos obligatorios.");
      }
      console.log(nuevoUsuario);
      await crearUsuario(nuevoUsuario);
      Swal.fire({
        title: "Correcto!",
        text: "El usuario se registró correctamente!",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      navigate("/area/usuarios/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Complete todos los campos",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      console.error("Error al registrar el nuevo usuario:", error);
    }
  };
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Usuario</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="bx bx-home-alt" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Nuevo usuario
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="card p-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="row mb-3">
                <label htmlFor="input01" className="col-sm-4 col-form-label">
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
                        errorMessages.FirstName && "is-invalid"
                      }`}
                      id="input01"
                      placeholder="Nombre"
                      name="FirstName"
                      onChange={handleInputChange}
                    />
                    {errorMessages.FirstName && (
                      <div className="invalid-feedback">
                        {errorMessages.FirstName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input02" className="col-sm-4 col-form-label">
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
                        errorMessages.LastName && "is-invalid"
                      }`}
                      id="input02"
                      placeholder="Apellidos"
                      name="LastName"
                      onChange={handleInputChange}
                    />
                    {errorMessages.LastName && (
                      <div className="invalid-feedback">
                        {errorMessages.LastName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input03" className="col-sm-4 col-form-label">
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
                        errorMessages.Dni && "is-invalid"
                      }`}
                      id="input03"
                      placeholder="Dni"
                      name="Dni"
                      onChange={handleInputChange}
                    />
                    {errorMessages.Dni && (
                      <div className="invalid-feedback">
                        {errorMessages.Dni}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input04" className="col-sm-4 col-form-label">
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
                        errorMessages.PhoneNumber && "is-invalid"
                      }`}
                      id="input04"
                      placeholder="Número de teléfono"
                      name="PhoneNumber"
                      onChange={handleInputChange}
                    />
                    {errorMessages.PhoneNumber && (
                      <div className="invalid-feedback">
                        {errorMessages.PhoneNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input05" className="col-sm-4 col-form-label">
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
                        errorMessages.Mail && "is-invalid"
                      }`}
                      id="input05"
                      placeholder="Email"
                      name="Mail"
                      onChange={handleInputChange}
                    />
                    {errorMessages.Mail && (
                      <div className="invalid-feedback">
                        {errorMessages.Mail}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row mb-3">
                <label htmlFor="input06" className="col-sm-4 col-form-label">
                  Usuario
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user" />
                    </span>
                    <input
                      type="text"
                      className={`form-control ${
                        errorMessages.Username && "is-invalid"
                      }`}
                      id="input06"
                      placeholder="Usuario"
                      name="Username"
                      onChange={handleInputChange}
                    />
                    {errorMessages.Username && (
                      <div className="invalid-feedback">
                        {errorMessages.Username}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input07" className="col-sm-4 col-form-label">
                  Contraseña
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-lock" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        errorMessages.Password && "is-invalid"
                      }`}
                      id="input07"
                      placeholder="Contraseña"
                      name="Password"
                      value={nuevoUsuario.Password || ""}
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <i className="bx bx-hide" />
                      ) : (
                        <i className="bx bx-show" />
                      )}
                    </button>
                    {errorMessages.Password && (
                      <div className="invalid-feedback">
                        {errorMessages.Password}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="input08" className="col-sm-4 col-form-label">
                  Rol
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-user-circle" />
                    </span>
                    <select
                      className={`form-select ${
                        errorMessages.RoleId && "is-invalid"
                      }`}
                      name="RoleId"
                      onChange={handleInputChange}
                      id="input08"
                    >
                      <option>Seleccionar rol</option>
                      <option value={1}>Administrador</option>
                      <option value={2}>Vendedor</option>
                    </select>
                    {errorMessages.RoleId && (
                      <div className="invalid-feedback">
                        {errorMessages.RoleId}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="input09" className="col-sm-4 col-form-label">
                  Aceeso
                </label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bx bx-log-in" />
                    </span>
                    <select
                      className={`form-select ${
                        errorMessages.Access && "is-invalid"
                      }`}
                      name="Access"
                      onChange={handleInputChange}
                      id="input09"
                    >
                      <option>Seleccionar acceso</option>
                      <option value="true">Admitir</option>
                      <option value="false">Denegar</option>
                    </select>
                    {errorMessages.Access && (
                      <div className="invalid-feedback">
                        {errorMessages.Access}
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
                    onClick={handleRegistrarUsuario}
                  >
                    <i className="bx bx-user-circle" /> Registrar Usuario
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
