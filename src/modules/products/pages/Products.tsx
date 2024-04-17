export function Productos() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-xl-2">
                    <a
                      href="ecommerce-add-new-products.html"
                      className="btn btn-primary mb-3 mb-lg-0"
                    >
                      <i className="bx bxs-plus-square" />
                      New Product
                    </a>
                  </div>
                  <div className="col-lg-9 col-xl-10">
                    <form className="float-lg-end">
                      <div className="row row-cols-lg-2 row-cols-xl-auto g-2">
                        <div className="col">
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control ps-5"
                              placeholder="Search Product..."
                            />{" "}
                            <span className="position-absolute top-50 product-show translate-middle-y">
                              <i className="bx bx-search" />
                            </span>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <button type="button" className="btn btn-white">
                              Sort By
                            </button>
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bx bx-chevron-down" />
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop1"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Dropdown link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Dropdown link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <button type="button" className="btn btn-white">
                              Collection Type
                            </button>
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bx bxs-category" />
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="btnGroupDrop1"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Dropdown link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Dropdown link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="btn-group" role="group">
                            <button type="button" className="btn btn-white">
                              Price Range
                            </button>
                            <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bx bx-slider" />
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-start"
                                aria-labelledby="btnGroupDrop1"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Dropdown link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Dropdown link
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid">
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/01.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/02.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/03.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/04.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/05.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/06.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/07.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/08.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/09.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../assets/images/products/10.png"
                className="card-img-top"
                alt="..."
              />
              <div >
                <div className="position-absolute top-0 end-0 m-3 product-discount">
                  <span >-10%</span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="card-title cursor-pointer">Nest Shaped Chair</h6>
                <div className="clearfix">
                  <p className="mb-0 float-start">
                    <strong>134</strong> Sales
                  </p>
                  <p className="mb-0 float-end fw-bold">
                    <span className="me-2 text-decoration-line-through text-secondary">
                      $350
                    </span>
                    <span>$240</span>
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 fs-6">
                  <div className="cursor-pointer">
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-warning" />
                    <i className="bx bxs-star text-secondary" />
                  </div>
                  <p className="mb-0 ms-auto">4.2(182)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
