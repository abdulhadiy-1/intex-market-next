import { LoginInp, LoginModal } from "../../components";
import loginBg from "../../assets/images/loginBg.png"
import { useCookies } from "react-cookie";

const Login = () => {
  const [_, setCookie] = useCookies(["accessToken"])
  return (
   <div
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[100vh] overflow-hidden pt-[10%]"
    >
      <LoginModal
      onSubmit={() => setCookie("accessToken", "token")}
        button="Войти"
        text="Введите имя пользователя и пароль, чтобы получить доступ к системе."
        title="INTEX-MARKET.UZ"
        classList="max-w-[621px] h-[519px]"
      >
        <div className="flex flex-col gap-[16px]">
          <LoginInp placeholder="Имя пользователя" />
          <LoginInp placeholder="Пароль" />
        </div>
      </LoginModal>
    </div>
    )
};

export default Login;
