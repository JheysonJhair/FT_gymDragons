import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./../index.css";
function AppLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img
                src="assets/images/logo_small.png"
                className="logo-icon"
                alt="logo icon"
              />
            </div>
            <div>
              <h4 className="logo-text red-text">DRAGONS</h4>
            </div>
            <div className="toggle-icon ms-auto">
              <i className="bx bx-arrow-back red-text" />
            </div>
          </div>
          {/*navigation*/}
          <ul className="metismenu" id="menu">
            <li className="mm-active">
              <a href="#" className="">
                <div className="parent-icon">
                  <i className="bx bx-home-alt" />
                </div>
                <div className="menu-title">PANEL PRINCIPAL</div>
              </a>
            </li>

            <li className="menu-label">GESTIÓN DEL CENTRO</li>
            <li>
              <Link to="/operaciones/membresiaspagos/">
                <div className="parent-icon">
                  <i className="bx bx-cookie" />
                </div>
                <div className="menu-title">Membresías y pago</div>
              </Link>
            </li>
            <li>
              <a href="#" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-cart" />
                </div>
                <div className="menu-title">Productos</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="ecommerce-products.html">
                    <i className="bx bx-radio-circle" />
                    Productos
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="ecommerce-products-details.html">
                    <i className="bx bx-radio-circle" />
                    Detalle de productos
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="ecommerce-add-new-products.html">
                    <i className="bx bx-radio-circle" />
                    Nuevo producto
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-bookmark-heart" />
                </div>
                <div className="menu-title">Cliente</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="component-alerts.html">
                    <i className="bx bx-radio-circle" />
                    Clientes
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-accordions.html">
                    <i className="bx bx-radio-circle" />
                    Detalle de clientes
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-badges.html">
                    <i className="bx bx-radio-circle" />
                    Nuevo cliente
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-repeat" />
                </div>
                <div className="menu-title">Inventario</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="content-grid-system.html">
                    <i className="bx bx-radio-circle" />
                    Opcion 1
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="content-typography.html">
                    <i className="bx bx-radio-circle" />
                    Opcion 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Plataforma</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-message-square-edit" />
                </div>
                <div className="menu-title">Caja</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="form-elements.html">
                    <i className="bx bx-radio-circle" />
                    Detalle caja
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-input-group.html">
                    <i className="bx bx-radio-circle" />
                    Gastos caja
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-message-square-edit" />
                </div>
                <div className="menu-title">Asistencias</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="form-elements.html">
                    <i className="bx bx-radio-circle" />
                    Asistencias
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-input-group.html">
                    <i className="bx bx-radio-circle" />
                    Ultimos clientes
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-grid-alt" />
                </div>
                <div className="menu-title">Membresias</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="table-basic-table.html">
                    <i className="bx bx-radio-circle" />
                    Estado
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Informes &amp; Gráficos</li>
            <li>
              <a href="widgets.html">
                <div className="parent-icon">
                  <i className="bx bx-cookie" />
                </div>
                <div className="menu-title">Reportes</div>
              </a>
            </li>
            <li>
              <a href="widgets.html">
                <div className="parent-icon">
                  <i className="bx bx-cookie" />
                </div>
                <div className="menu-title">Tablas</div>
              </a>
            </li>
            <li className="menu-label">Configuración</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-menu" />
                </div>
                <div className="menu-title">Usuarios</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="component-alerts.html">
                    <i className="bx bx-radio-circle" />
                    Clientes
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-accordions.html">
                    <i className="bx bx-radio-circle" />
                    Detalle de clientes
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-badges.html">
                    <i className="bx bx-radio-circle" />
                    Nuevo cliente
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://themeforest.net/user/codervent" target="_blank">
                <div className="parent-icon">
                  <i className="bx bx-support" />
                </div>
                <div className="menu-title">Ayuda</div>
              </a>
            </li>
          </ul>
          {/*end navigation*/}
        </div>
        <header>
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand gap-3">
              <div className="mobile-toggle-menu">
                <i className="bx bx-menu" />
              </div>

              <div className="top-menu ms-auto">
                <ul className="navbar-nav align-items-center gap-1">
                  <li
                    className="nav-item mobile-search-icon d-flex d-lg-none"
                    data-bs-toggle="modal"
                    data-bs-target="#SearchModal"
                  >
                    <a className="nav-link" href="avascript:;">
                      <i className="bx bx-search" />
                    </a>
                  </li>

                  <li className="nav-item dropdown dropdown-large">
                    <h4
                      style={{
                        fontSize: "110%",
                        fontWeight: "bold",
                        marginTop: "5px",
                      }}
                    >
                      ADMINISTRADOR
                    </h4>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="alert-count">7</span>
                      <i className="bx bx-bell" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#">
                        <div className="msg-header">
                          <p className="msg-header-title">Notifications</p>
                          <p className="msg-header-badge">8 New</p>
                        </div>
                      </a>
                      <div className="header-notifications-list">
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-1.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Daisy Anderson
                                <span className="msg-time float-end">
                                  5 sec ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                The standard chunk of lorem
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-danger text-danger">
                              dc
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Orders{" "}
                                <span className="msg-time float-end">
                                  2 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                You have recived new orders
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-2.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Althea Cabardo{" "}
                                <span className="msg-time float-end">
                                  14 sec ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Many desktop publishing packages
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <img
                                src="assets/images/app/outlook.png"
                                width={25}
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Account Created
                                <span className="msg-time float-end">
                                  28 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Successfully created new email
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-info text-info">
                              Ss
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Product Approved{" "}
                                <span className="msg-time float-end">
                                  2 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Your new product has approved
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-4.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Katherine Pechon{" "}
                                <span className="msg-time float-end">
                                  15 min ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Making this the first true generator
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <i className="bx bx-check-square" />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Your item is shipped{" "}
                                <span className="msg-time float-end">
                                  5 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                Successfully shipped your item
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary">
                              <img
                                src="assets/images/app/github.png"
                                width={25}
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New 24 authors
                                <span className="msg-time float-end">
                                  1 day ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                24 new authors joined last week
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="assets/images/avatars/avatar-8.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Peter Costanzo{" "}
                                <span className="msg-time float-end">
                                  6 hrs ago
                                </span>
                              </h6>
                              <p className="msg-info">
                                It was popularised in the 1960s
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="#">
                        <div className="text-center msg-footer">
                          <button className="btn btn-primary w-100">
                            View All Notifications
                          </button>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="user-box dropdown px-3">
                <a
                  className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/avatars/avatar-11.png"
                    className="user-img"
                    alt="user avatar"
                  />
                  <div className="user-info">
                    <p className="user-name mb-0">Jhair Arone</p>
                    <p className="designattion mb-0">Usuario supremo</p>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-user fs-5" />
                      <span>Perfil</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-cog fs-5" />
                      <span>Configuracion</span>
                    </a>
                  </li>

                  <li>
                    <div className="dropdown-divider mb-0" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-log-out-circle" />
                      <span>Cerrar sesión</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <Outlet />
        <div className="overlay toggle-icon" />
        <a href="#" className="back-to-top">
          <i className="bx bxs-up-arrow-alt" />
        </a>
        <footer className="page-footer">
          <p className="mb-0">
            Copyright © DRAGON'S GYM 2024. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}

export default AppLayout;
