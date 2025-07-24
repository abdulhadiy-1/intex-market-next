import CreateAdminBg from "../../assets/images/CreateAdminBg.png";
import { LoginInp, LoginModal } from "../../components";

const CreateAdmin = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${CreateAdminBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[100vh] overflow-hidden pt-[10%]"
    >
      <LoginModal
        button="Создать"
        text="Заполните поля что бы создать админа."
        title="INTEX-MARKET.UZ"
        classList="max-w-[621px] h-[519px]"
      >
        <div className="flex flex-col gap-[16px]">
          <LoginInp type="tel" placeholder="Телефонный номер" />
          <LoginInp placeholder="Имя пользователя" />
          <LoginInp type="password" placeholder="Пароль" />
        </div>
      </LoginModal>
    </div>
  );
};

export default CreateAdmin;
