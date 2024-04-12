export function Membresias() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/*breadcrumb*/}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Membresia y pagos</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="bx bx-home-alt" />
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Nueva membresia
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-7 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">
                      PASO 1 : Busque o agregue un cliente nuevo
                    </h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <button className="btn btn-danger btn-block">
                      <i className="bx bx-user-plus"></i> Nuevo cliente
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DNI"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Código"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        <i className="bx bx-search"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-7">
                    <div className="row mb-3">
                      <label
                        htmlFor="input49"
                        className="col-sm-3 col-form-label"
                      >
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="input49"
                        className="col-sm-3 col-form-label"
                      >
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="input50"
                        className="col-sm-3 col-form-label"
                      >
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="input49"
                        className="col-sm-3 col-form-label"
                      >
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="../../assets/images/avatars/avatar-1.png"
                        alt="Admin"
                        className=" p-1 bg-danger"
                        width={190}
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
                      <select className="form-select" id="input53">
                        <option selected>Seleccionar estado civil</option>
                        <option value={1}>Soltero</option>
                        <option value={2}>Casado</option>
                        <option value={3}>Viudo</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input53" className="col-sm-3 col-form-label">
                    Seleccionar genero
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-user-circle" />
                      </span>
                      <select className="form-select" id="input53">
                        <option selected>Seleccionar genero</option>
                        <option value={1}>Masculino</option>
                        <option value={2}>Femenino</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input51" className="col-sm-3 col-form-label">
                    Correo Electrónico
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-envelope" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input51"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-3 col-form-label">
                    Telefono
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-phone" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="Número"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">PASO 2 : Membresia</h6>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col">
                    <button className="btn btn-danger btn-block">
                      <i className="bx bx-purchase-tag"></i> Nueva membresía
                    </button>
                  </div>
                  <div className="col">
                    <button className="btn btn-danger btn-block">
                      <i className="bx bx-transfer-alt"></i> Nuevo traspaso
                    </button>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="">Fecha inicio</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bx bx-calendar-plus"></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Fecha de Inicio"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <label htmlFor="">Fecha fin</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bx bx-calendar-check"></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Fecha de Fin"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input53" className="col-sm-3 col-form-label">
                    Paquete
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-package"></i>
                      </span>
                      <select className="form-select" id="input53">
                        <option selected>Seleccionar paquete aquí</option>
                        <option value={1}>paquete1</option>
                        <option value={2}>paquete 2</option>
                        <option value={3}>paquite 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-5 col-form-label">
                    Sub Total
                  </label>
                  <div className="col-sm-7">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-dollar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-5 col-form-label">
                    Descuento
                  </label>
                  <div className="col-sm-7">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-down-arrow-alt" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-5 col-form-label">
                    Precio
                  </label>
                  <div className="col-sm-7">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-dollar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-6 col-form-label">
                    Numero de sesiones
                  </label>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-calendar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="#00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-6 col-form-label">
                    Dias congelados
                  </label>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-pause-circle" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="#00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-6 col-form-label">
                    Dias congelados Disponibles
                  </label>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-check-circle" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="#00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card radius-10">
          <div className="card-header">
            <div className="d-flex align-items-center">
              <div>
                <h6 className="mb-0">PASO 3: Ingrese pago.</h6>
              </div>
            </div>
          </div>
          <div className="row card-body">
            <div className="col-12 col-lg-6">
              <fieldset>
                <div className="input-group mb-3 ">
                  <label className="mb-3 " htmlFor="">
                    INGRESE LA FECHA Y MONTO DE PAGO
                  </label>
                  <div className="input-group ">
                    <span className="input-group-text">
                      <i className="bx bx-calendar-plus"></i>
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Fecha de Inicio"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-2 col-form-label">
                    A cuenta
                  </label>
                  <div className="col-sm-5">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-dollar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-2 col-form-label">
                    Vuelto
                  </label>
                  <div className="col-sm-5">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-dollar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-2 col-form-label">
                    Debe
                  </label>
                  <div className="col-sm-5">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-down-arrow-alt" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-2 col-form-label">
                    Total
                  </label>
                  <div className="col-sm-5">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-dollar" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-12 col-lg-6">
              <fieldset>
                <div className="input-group ">
                  <label className="mb-3 " htmlFor="">
                    INGRESE LA FORMA Y COMPROBANTE DE PAGO
                  </label>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input53" className="col-sm-4 col-form-label">
                    Forma de pago
                  </label>
                  <div className="col-sm-8">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-package"></i>
                      </span>
                      <select className="form-select" id="input53">
                        <option selected>Seleccionar forma de pago</option>
                        <option value={1}>paquete1</option>
                        <option value={2}>paquete 2</option>
                        <option value={3}>paquite 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input53" className="col-sm-4 col-form-label">
                    Comprobante de pago
                  </label>
                  <div className="col-sm-8">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-package"></i>
                      </span>
                      <select className="form-select" id="input53">
                        <option selected>Seleccionar comprobante</option>
                        <option value={1}>paquete1</option>
                        <option value={2}>paquete 2</option>
                        <option value={3}>paquite 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <span className="input-group-text">Observaciones</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    defaultValue={""}
                  />
                </div>
                <div className="row mt-4">
                  <div className="col">{/* Contenido */}</div>
                  <div className="col-auto ml-auto">
                    <button className="btn btn-danger btn-block">
                      <i className="bx bx-dollar"></i> Realizar pago
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
