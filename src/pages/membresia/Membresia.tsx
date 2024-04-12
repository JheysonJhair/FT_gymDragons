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
                <div className="row mb-4">
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
                            placeholder=""
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
                            placeholder=""
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
                            <i className="bx bx-microphone" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="input50"
                            placeholder="Phone No"
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
                            <i className="bx bx-user" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="input49"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                         src="assets/images/avatars/avatar-1.png"
                        alt="Admin"
                        className="rounded-circle p-1 bg-primary"
                        width={110}
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
                        <i className="bx bx-flag" />
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
                        <i className="bx bx-flag" />
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
                        <i className="bx bx-microphone" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="Phone No"
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
                <div className="row mb-3">
                  <label htmlFor="input49" className="col-sm-3 col-form-label">
                    Enter Your Name
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
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input50" className="col-sm-3 col-form-label">
                    Phone No
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-microphone" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input50"
                        placeholder="Phone No"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input51" className="col-sm-3 col-form-label">
                    Email Address
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
                  <label htmlFor="input52" className="col-sm-3 col-form-label">
                    Choose Password
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-lock-open" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="input52"
                        placeholder="Choose Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input53" className="col-sm-3 col-form-label">
                    Select Country
                  </label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bx bx-flag" />
                      </span>
                      <select className="form-select" id="input53">
                        <option selected>Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-3 col-form-label" />
                  <div className="col-sm-9">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="input54"
                      />
                      <label className="form-check-label" htmlFor="input54">
                        Check me out
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-3 col-form-label" />
                  <div className="col-sm-9">
                    <div className="d-md-flex d-grid align-items-center gap-3">
                      <button type="button" className="btn btn-primary px-4">
                        Submit
                      </button>
                      <button type="button" className="btn btn-light px-4">
                        Reset
                      </button>
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
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    @example.com
                  </span>
                </div>
                <label htmlFor="basic-url" className="form-label">
                  Your vanity URL
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3">
                    https://example.com/users/
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span className="input-group-text">.00</span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Server"
                    aria-label="Server"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-text">With textarea</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    defaultValue={""}
                  />
                </div>
              </fieldset>
            </div>
            <div className="col-12 col-lg-6">
              <fieldset>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    @example.com
                  </span>
                </div>
                <label htmlFor="basic-url" className="form-label">
                  Your vanity URL
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3">
                    https://example.com/users/
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span className="input-group-text">.00</span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                  />
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Server"
                    aria-label="Server"
                  />
                </div>
                <div className="input-group">
                  <span className="input-group-text">With textarea</span>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    defaultValue={""}
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
