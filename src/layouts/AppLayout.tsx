import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar-wrapper" data-simplebar="true">
          <div className="sidebar-header">
            <div>
              <img
                src="assets/images/logo-icon.png"
                className="logo-icon"
                alt="logo icon"
              />
            </div>
            <div>
              <h4 className="logo-text">Rocker</h4>
            </div>
            <div className="toggle-icon ms-auto">
              <i className="bx bx-arrow-back" />
            </div>
          </div>
          {/*navigation*/}
          <ul className="metismenu" id="menu">
            <li>
              <a href="#" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-home-alt" />
                </div>
                <div className="menu-title">Dashboard</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="index.html">
                    <i className="bx bx-radio-circle" />
                    Default
                  </a>
                </li>
                <li>
                  {" "}
                  <Link to="/prueba">
                    <i className="bx bx-radio-circle" />
                    Alternate
                  </Link>
                </li>
                <li>
                  {" "}
                  <a href="index3.html">
                    <i className="bx bx-radio-circle" />
                    Graphical
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-category" />
                </div>
                <div className="menu-title">Application</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="app-emailbox.html">
                    <i className="bx bx-radio-circle" />
                    Email
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="app-chat-box.html">
                    <i className="bx bx-radio-circle" />
                    Chat Box
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="app-file-manager.html">
                    <i className="bx bx-radio-circle" />
                    File Manager
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="app-contact-list.html">
                    <i className="bx bx-radio-circle" />
                    Contatcs
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="app-to-do.html">
                    <i className="bx bx-radio-circle" />
                    Todo List
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="app-invoice.html">
                    <i className="bx bx-radio-circle" />
                    Invoice
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="app-fullcalender.html">
                    <i className="bx bx-radio-circle" />
                    Calendar
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">UI Elements</li>
            <li>
              <a href="widgets.html">
                <div className="parent-icon">
                  <i className="bx bx-cookie" />
                </div>
                <div className="menu-title">Widgets</div>
              </a>
            </li>
            <li>
              <a href="#" className="has-arrow">
                <div className="parent-icon">
                  <i className="bx bx-cart" />
                </div>
                <div className="menu-title">eCommerce</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="ecommerce-products.html">
                    <i className="bx bx-radio-circle" />
                    Products
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="ecommerce-products-details.html">
                    <i className="bx bx-radio-circle" />
                    Product Details
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="ecommerce-add-new-products.html">
                    <i className="bx bx-radio-circle" />
                    Add New Products
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="ecommerce-orders.html">
                    <i className="bx bx-radio-circle" />
                    Orders
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-bookmark-heart" />
                </div>
                <div className="menu-title">Components</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="component-alerts.html">
                    <i className="bx bx-radio-circle" />
                    Alerts
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-accordions.html">
                    <i className="bx bx-radio-circle" />
                    Accordions
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-badges.html">
                    <i className="bx bx-radio-circle" />
                    Badges
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-buttons.html">
                    <i className="bx bx-radio-circle" />
                    Buttons
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-cards.html">
                    <i className="bx bx-radio-circle" />
                    Cards
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-carousels.html">
                    <i className="bx bx-radio-circle" />
                    Carousels
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-list-groups.html">
                    <i className="bx bx-radio-circle" />
                    List Groups
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-media-object.html">
                    <i className="bx bx-radio-circle" />
                    Media Objects
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-modals.html">
                    <i className="bx bx-radio-circle" />
                    Modals
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-navs-tabs.html">
                    <i className="bx bx-radio-circle" />
                    Navs &amp; Tabs
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-navbar.html">
                    <i className="bx bx-radio-circle" />
                    Navbar
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-paginations.html">
                    <i className="bx bx-radio-circle" />
                    Pagination
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-popovers-tooltips.html">
                    <i className="bx bx-radio-circle" />
                    Popovers &amp; Tooltips
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-progress-bars.html">
                    <i className="bx bx-radio-circle" />
                    Progress
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-spinners.html">
                    <i className="bx bx-radio-circle" />
                    Spinners
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-notifications.html">
                    <i className="bx bx-radio-circle" />
                    Notifications
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="component-avtars-chips.html">
                    <i className="bx bx-radio-circle" />
                    Avatrs &amp; Chips
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-repeat" />
                </div>
                <div className="menu-title">Content</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="content-grid-system.html">
                    <i className="bx bx-radio-circle" />
                    Grid System
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="content-typography.html">
                    <i className="bx bx-radio-circle" />
                    Typography
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="content-text-utilities.html">
                    <i className="bx bx-radio-circle" />
                    Text Utilities
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  {" "}
                  <i className="bx bx-donate-blood" />
                </div>
                <div className="menu-title">Icons</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="icons-line-icons.html">
                    <i className="bx bx-radio-circle" />
                    Line Icons
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="icons-boxicons.html">
                    <i className="bx bx-radio-circle" />
                    Boxicons
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="icons-feather-icons.html">
                    <i className="bx bx-radio-circle" />
                    Feather Icons
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="form-froala-editor.html">
                <div className="parent-icon">
                  <i className="bx bx-code-alt" />
                </div>
                <div className="menu-title">Froala Editor</div>
              </a>
            </li>
            <li className="menu-label">Forms &amp; Tables</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-message-square-edit" />
                </div>
                <div className="menu-title">Forms</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="form-elements.html">
                    <i className="bx bx-radio-circle" />
                    Form Elements
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-input-group.html">
                    <i className="bx bx-radio-circle" />
                    Input Groups
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-radios-and-checkboxes.html">
                    <i className="bx bx-radio-circle" />
                    Radios &amp; Checkboxes
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-layouts.html">
                    <i className="bx bx-radio-circle" />
                    Forms Layouts
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-validations.html">
                    <i className="bx bx-radio-circle" />
                    Form Validation
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-wizard.html">
                    <i className="bx bx-radio-circle" />
                    Form Wizard
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-text-editor.html">
                    <i className="bx bx-radio-circle" />
                    Text Editor
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-file-upload.html">
                    <i className="bx bx-radio-circle" />
                    File Upload
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-date-time-pickes.html">
                    <i className="bx bx-radio-circle" />
                    Date Pickers
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-select2.html">
                    <i className="bx bx-radio-circle" />
                    Select2
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="form-repeater.html">
                    <i className="bx bx-radio-circle" />
                    Form Repeater
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-grid-alt" />
                </div>
                <div className="menu-title">Tables</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="table-basic-table.html">
                    <i className="bx bx-radio-circle" />
                    Basic Table
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="table-datatable.html">
                    <i className="bx bx-radio-circle" />
                    Data Table
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Pages</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-lock" />
                </div>
                <div className="menu-title">Authentication</div>
              </a>
              <ul>
                <li>
                  <a className="has-arrow" href="#">
                    <i className="bx bx-radio-circle" />
                    Basic
                  </a>
                  <ul>
                    <li>
                      <a href="auth-basic-signin.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-signup.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-forgot-password.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="auth-basic-reset-password.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow" href="#">
                    <i className="bx bx-radio-circle" />
                    Cover
                  </a>
                  <ul>
                    <li>
                      <a href="auth-cover-signin.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-signup.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-forgot-password.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a href="auth-cover-reset-password.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="has-arrow" href="#">
                    <i className="bx bx-radio-circle" />
                    With Header Footer
                  </a>
                  <ul>
                    <li>
                      <a href="auth-header-footer-signin.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="auth-header-footer-signup.html" target="_blank">
                        <i className="bx bx-radio-circle" />
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        href="auth-header-footer-forgot-password.html"
                        target="_blank"
                      >
                        <i className="bx bx-radio-circle" />
                        Forgot Password
                      </a>
                    </li>
                    <li>
                      <a
                        href="auth-header-footer-reset-password.html"
                        target="_blank"
                      >
                        <i className="bx bx-radio-circle" />
                        Reset Password
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="user-profile.html">
                <div className="parent-icon">
                  <i className="bx bx-user-circle" />
                </div>
                <div className="menu-title">User Profile</div>
              </a>
            </li>
            <li>
              <a href="timeline.html">
                <div className="parent-icon">
                  {" "}
                  <i className="bx bx-video-recording" />
                </div>
                <div className="menu-title">Timeline</div>
              </a>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-error" />
                </div>
                <div className="menu-title">Errors</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="errors-404-error.html" target="_blank">
                    <i className="bx bx-radio-circle" />
                    404 Error
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="errors-500-error.html" target="_blank">
                    <i className="bx bx-radio-circle" />
                    500 Error
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="errors-coming-soon.html" target="_blank">
                    <i className="bx bx-radio-circle" />
                    Coming Soon
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="error-blank-page.html" target="_blank">
                    <i className="bx bx-radio-circle" />
                    Blank Page
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="faq.html">
                <div className="parent-icon">
                  <i className="bx bx-help-circle" />
                </div>
                <div className="menu-title">FAQ</div>
              </a>
            </li>
            <li>
              <a href="pricing-table.html">
                <div className="parent-icon">
                  <i className="bx bx-diamond" />
                </div>
                <div className="menu-title">Pricing</div>
              </a>
            </li>
            <li className="menu-label">Charts &amp; Maps</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-line-chart" />
                </div>
                <div className="menu-title">Charts</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="charts-apex-chart.html">
                    <i className="bx bx-radio-circle" />
                    Apex
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="charts-chartjs.html">
                    <i className="bx bx-radio-circle" />
                    Chartjs
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="charts-highcharts.html">
                    <i className="bx bx-radio-circle" />
                    Highcharts
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-map-alt" />
                </div>
                <div className="menu-title">Maps</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a href="map-google-maps.html">
                    <i className="bx bx-radio-circle" />
                    Google Maps
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="map-vector-maps.html">
                    <i className="bx bx-radio-circle" />
                    Vector Maps
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-label">Others</li>
            <li>
              <a className="has-arrow" href="#">
                <div className="parent-icon">
                  <i className="bx bx-menu" />
                </div>
                <div className="menu-title">Menu Levels</div>
              </a>
              <ul>
                <li>
                  {" "}
                  <a className="has-arrow" href="#">
                    <i className="bx bx-radio-circle" />
                    Level One
                  </a>
                  <ul>
                    <li>
                      {" "}
                      <a className="has-arrow" href="#">
                        <i className="bx bx-radio-circle" />
                        Level Two
                      </a>
                      <ul>
                        <li>
                          {" "}
                          <a href="#">
                            <i className="bx bx-radio-circle" />
                            Level Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://codervent.com/rocker/documentation/index.html"
                target="_blank"
              >
                <div className="parent-icon">
                  <i className="bx bx-folder" />
                </div>
                <div className="menu-title">Documentation</div>
              </a>
            </li>
            <li>
              <a href="https://themeforest.net/user/codervent" target="_blank">
                <div className="parent-icon">
                  <i className="bx bx-support" />
                </div>
                <div className="menu-title">Support</div>
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
              <div
                className="search-bar d-lg-block d-none"
                data-bs-toggle="modal"
                data-bs-target="#SearchModal"
              >
                <a href="avascript:;" className="btn d-flex align-items-center">
                  <i className="bx bx-search" />
                  Search
                </a>
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
                  <li className="nav-item dropdown dropdown-laungauge d-none d-sm-flex">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                      href="avascript:;"
                      data-bs-toggle="dropdown"
                    >
                      <img src="assets/images/county/02.png" width={22} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/01.png" width={20} />
                          <span className="ms-2">English</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/02.png" width={20} />
                          <span className="ms-2">Catalan</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/03.png" width={20} />
                          <span className="ms-2">French</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/04.png" width={20} />
                          <span className="ms-2">Belize</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/05.png" width={20} />
                          <span className="ms-2">Colombia</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/06.png" width={20} />
                          <span className="ms-2">Spanish</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/07.png" width={20} />
                          <span className="ms-2">Georgian</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center py-2"
                          href="#"
                        >
                          <img src="assets/images/county/08.png" width={20} />
                          <span className="ms-2">Hindi</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dark-mode d-none d-sm-flex">
                    <a className="nav-link dark-mode-icon" href="#">
                      <i className="bx bx-moon" />
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-app">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <i className="bx bx-grid-alt" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end p-0">
                      <div className="app-container p-2 my-2">
                        <div className="row gx-0 gy-2 row-cols-3 justify-content-center p-2">
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/slack.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Slack</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/behance.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Behance</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/google-drive.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Dribble</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/outlook.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Outlook</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/github.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">GitHub</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/stack-overflow.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Stack</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/figma.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Stack</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/twitter.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Twitter</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/google-calendar.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Calendar</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/spotify.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Spotify</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/google-photos.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Photos</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/pinterest.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Photos</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/linkedin.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">linkedin</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/dribble.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Dribble</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/youtube.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">YouTube</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/google.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">News</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/envato.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Envato</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col">
                            <a href="#">
                              <div className="app-box text-center">
                                <div className="app-icon">
                                  <img
                                    src="assets/images/app/safari.png"
                                    width={30}
                                  />
                                </div>
                                <div className="app-name">
                                  <p className="mb-0 mt-1">Safari</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        {/*end row*/}
                      </div>
                    </div>
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
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <span className="alert-count">8</span>
                      <i className="bx bx-shopping-bag" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#">
                        <div className="msg-header">
                          <p className="msg-header-title">My Cart</p>
                          <p className="msg-header-badge">10 Items</p>
                        </div>
                      </a>
                      <div className="header-message-list">
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/11.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/02.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/03.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/04.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/05.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/06.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/07.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/08.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex align-items-center gap-3">
                            <div className="position-relative">
                              <div className="cart-product rounded-circle bg-light">
                                <img
                                  src="assets/images/products/09.png"
                                  alt="product image"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title mb-0">
                                Men White T-Shirt
                              </h6>
                              <p className="cart-product-price mb-0">
                                1 X $29.00
                              </p>
                            </div>
                            <div>
                              <p className="cart-price mb-0">$250</p>
                            </div>
                            <div className="cart-product-cancel">
                              <i className="bx bx-x" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="#">
                        <div className="text-center msg-footer">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Total</h5>
                            <h5 className="mb-0 ms-auto">$489.00</h5>
                          </div>
                          <button className="btn btn-primary w-100">
                            Checkout
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
                    src="assets/images/avatars/avatar-2.png"
                    className="user-img"
                    alt="user avatar"
                  />
                  <div className="user-info">
                    <p className="user-name mb-0">Pauline Seitz</p>
                    <p className="designattion mb-0">Web Designer</p>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-user fs-5" />
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-cog fs-5" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-home-circle fs-5" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-dollar-circle fs-5" />
                      <span>Earnings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="#"
                    >
                      <i className="bx bx-download fs-5" />
                      <span>Downloads</span>
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
                      <span>Logout</span>
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
          <p className="mb-0">Copyright © 2022. All right reserved.</p>
        </footer>
      </div>
      <div>
        {/* search modal */}
        <div className="modal" id="SearchModal" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">
            <div className="modal-content">
              <div className="modal-header gap-2">
                <div className="position-relative popup-search w-100">
                  <input
                    className="form-control form-control-lg ps-5 border border-3 border-primary"
                    type="search"
                    placeholder="Search"
                  />
                  <span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-4">
                    <i className="bx bx-search" />
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-close d-md-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="search-list">
                  <p className="mb-1">Html Templates</p>
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action active align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-angular fs-4" />
                      Best Html Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-vuejs fs-4" />
                      Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-magento fs-4" />
                      Responsive Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-shopify fs-4" />
                      eCommerce Html Templates
                    </a>
                  </div>
                  <p className="mb-1 mt-3">Web Designe Company</p>
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-windows fs-4" />
                      Best Html Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-dropbox fs-4" />
                      Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-opera fs-4" />
                      Responsive Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-wordpress fs-4" />
                      eCommerce Html Templates
                    </a>
                  </div>
                  <p className="mb-1 mt-3">Software Development</p>
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-mailchimp fs-4" />
                      Best Html Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-zoom fs-4" />
                      Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-sass fs-4" />
                      Responsive Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-vk fs-4" />
                      eCommerce Html Templates
                    </a>
                  </div>
                  <p className="mb-1 mt-3">Online Shoping Portals</p>
                  <div className="list-group">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-slack fs-4" />
                      Best Html Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-skype fs-4" />
                      Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-twitter fs-4" />
                      Responsive Html5 Templates
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action align-items-center d-flex gap-2 py-1"
                    >
                      <i className="bx bxl-vimeo fs-4" />
                      eCommerce Html Templates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end search modal */}
        {/*start switcher*/}
        <div className="switcher-wrapper">
          <div className="switcher-btn">
            {" "}
            <i className="bx bx-cog bx-spin" />
          </div>
          <div className="switcher-body">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
              <button
                type="button"
                className="btn-close ms-auto close-switcher"
                aria-label="Close"
              />
            </div>
            <hr />
            <h6 className="mb-0">Theme Styles</h6>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="lightmode"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="lightmode">
                  Light
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="darkmode"
                />
                <label className="form-check-label" htmlFor="darkmode">
                  Dark
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="semidark"
                />
                <label className="form-check-label" htmlFor="semidark">
                  Semi Dark
                </label>
              </div>
            </div>
            <hr />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="minimaltheme"
                name="flexRadioDefault"
              />
              <label className="form-check-label" htmlFor="minimaltheme">
                Minimal Theme
              </label>
            </div>
            <hr />
            <h6 className="mb-0">Header Colors</h6>
            <hr />
            <div className="header-colors-indigators">
              <div className="row row-cols-auto g-3">
                <div className="col">
                  <div className="indigator headercolor1" id="headercolor1" />
                </div>
                <div className="col">
                  <div className="indigator headercolor2" id="headercolor2" />
                </div>
                <div className="col">
                  <div className="indigator headercolor3" id="headercolor3" />
                </div>
                <div className="col">
                  <div className="indigator headercolor4" id="headercolor4" />
                </div>
                <div className="col">
                  <div className="indigator headercolor5" id="headercolor5" />
                </div>
                <div className="col">
                  <div className="indigator headercolor6" id="headercolor6" />
                </div>
                <div className="col">
                  <div className="indigator headercolor7" id="headercolor7" />
                </div>
                <div className="col">
                  <div className="indigator headercolor8" id="headercolor8" />
                </div>
              </div>
            </div>
            <hr />
            <h6 className="mb-0">Sidebar Colors</h6>
            <hr />
            <div className="header-colors-indigators">
              <div className="row row-cols-auto g-3">
                <div className="col">
                  <div className="indigator sidebarcolor1" id="sidebarcolor1" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor2" id="sidebarcolor2" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor3" id="sidebarcolor3" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor4" id="sidebarcolor4" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor5" id="sidebarcolor5" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor6" id="sidebarcolor6" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor7" id="sidebarcolor7" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor8" id="sidebarcolor8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
