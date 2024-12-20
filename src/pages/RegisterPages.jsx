import GoogleLogo from "../assets/img/google-logo.png";

const RegisterPages = () => {
  return (
    <div className="login-pages">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 mx-auto">
            <div className="login-box rounded shadow">
              <div className="login-title mx-auto text-center pb-3 pt-3">
                <h4 className="fw-bold">Create an Account</h4>
                <p className="text-secondary">
                  You must log in first to be able to use all the features of
                  Tendo.
                </p>
              </div>

              <div className="email-box pb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                />
              </div>

              <div className="password-box pb-3">
                <input
                  placeholder="Passwords"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="password-box">
                <input
                  placeholder="Confirm Passwords"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <a href="login" className="btn btn-login mt-4">
                Create Account
              </a>
              <a href="" className="btn-login-google mt-3">
                <img src={GoogleLogo} className="google-logo" alt="" /> Create
                With Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;
