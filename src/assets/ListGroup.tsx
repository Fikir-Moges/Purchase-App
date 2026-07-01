import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Message(){
    return (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg">
          <div className="card-body">

            <h1 className="text-center mb-3">
              Welcome to React
            </h1>

            <h5 className="text-center text-muted mb-4">
              Fill the following form correctly and properly
            </h5>

            <form>

              <div className="input-group mb-3">
                
  <span className="input-group-text">
    <i className="bi bi-person-fill"></i>
  
              <input
                className="form-control"
                type="text"
                placeholder="Enter first name"
              /></span>
              </div>

              <label>Middle Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter middle name"
              />
              <br />

              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter last name"
              />
              <br />

              <div className="input-group mb-3">
  <span className="input-group-text">
    <i className="bi bi-envelope-fill"></i>
  </span>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
              />
              </div>

              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
              />
              <br />

              <button
                className="btn btn-primary w-100"
                type="submit"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default Message;