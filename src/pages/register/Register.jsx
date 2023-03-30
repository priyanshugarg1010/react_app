import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>lava love</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi natus
            quis at in ab. Consectetur excepturi labore ea optio. Voluptas sunt,
            reprehenderit consequuntur quod neque deleniti ad amet sit
            aspernatur.
          </p>
          <span>Don't you have a account?</span>
          <Link to="/login">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
