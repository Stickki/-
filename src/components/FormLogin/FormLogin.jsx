import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../../ui/Button/AddButton/AddButton";
import InputText from "../../ui/Input/InputText";

const FormLogin = ({ onSubmit }) => {
  return (
    <div className="flex justify-center flex-col items-center my-10 px-4">
      <h1 className="text-[20px]">Вхід</h1>
      <form
        onSubmit={onSubmit}
        className=" px-8 py-6 flex flex-col border-2 max-w-[500px]"
      >
        <InputText
          labelName={"Login"}
          name={"userName"}
          placeholder={"Введіть логін"}
        />
        <InputText
          labelName={"Password"}
          name={"userPassword"}
          placeholder={"Введіть пароль"}
        />
        <AddButton type={"submit"} text={"Увійти"} />
      </form>
      <p className="mt-4">
        Якщо Ви ще не зареєстровані -{" "}
        <Link to="/registration">зареєструйтесь</Link>
      </p>
    </div>
  );
};

export default FormLogin;
