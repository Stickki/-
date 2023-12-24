import React from "react";
import InputText from "../../ui/Input/InputText";
import AddButton from "../../ui/Button/AddButton/AddButton";
import { Link, useNavigate } from "react-router-dom";
import { errorAddGoods } from "../../utils/list";
import { useAddUserMutation } from "../../redux/goodsApi";
import Spinner from "../../ui/Spinner/Spinner";

const FormRegistration = () => {
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();

  const onSubmit = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let login = event.target.login.value;
    let password = event.target.userPassword.value;
    let avatar = event.target.avatar.value;
    let role = event.target.role.value;
    if (
      email == "" ||
      login == "" ||
      password == "" ||
      avatar == "" ||
      role == ""
    ) {
      errorAddGoods();
    } else {
      await addUser({
        email: email,
        password: password,
        name: login,
        role: role,
        avatar: avatar,
      }).unwrap();
      navigate("/login");
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="flex justify-center flex-col items-center my-10">
      <h1 className="text-[20px]">Реєстрація</h1>
      <form
        onSubmit={onSubmit}
        className=" px-8 py-6 flex flex-col border-2 max-w-[500px]"
      >
        <InputText
          labelName={"Пошта"}
          name={"email"}
          placeholder={"Введіть Email"}
        />
        <InputText
          labelName={"Пароль"}
          name={"userPassword"}
          placeholder={"Придумайте пароль"}
        />
        <InputText
          labelName={"Логин"}
          name={"login"}
          placeholder={"Придумайте логін"}
        />
        <InputText
          labelName={"Аватар"}
          name={"avatar"}
          placeholder={"Загрузіть URL аватар"}
        />
        <label>
          Тип користувача
          <select
            name="role"
            className="w-full bg-slate-100 px-6 py-3 rounded-full mb-2"
          >
            <option value="customer">Покупець</option>
            <option value="admin">Адміністратор</option>
          </select>
        </label>
        <AddButton type={"submit"} text={"Зареєструватися"} />
      </form>
      <p className="mt-4">
        Якщо Ви вже зареєстровані - <Link to="/login">увійдіть</Link>
      </p>
    </div>
  );
};

export default FormRegistration;
