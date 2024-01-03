import { loginUsingGithub } from "@/lib/actions/action";

const Login = () => {
    return (
      <div>
        <form action={loginUsingGithub}>
          <input type="submit" value="Login Using Github" className="p-2 bg-white text-blue-600 rounded" />
        </form>
      </div>
    )
  }
  export default Login;