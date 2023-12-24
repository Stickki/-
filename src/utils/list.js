import { message } from "antd";

export const list = [
  "React",
  "Redux-toolkit",
  "TRK-query",
  "Redux-persist",
  "React-router-dom",
  "JSON Server",
  "AntDesign",
  "Tailwind CSS",
  "JavaScript",
];

export const errorMessageLogin = () => {
  message.error("Увійдіть в профіль", [1]);
};
export const successAddInBasket = () => {
  message.success("Товар успішно доданий в кошик", [1]);
};
export const alreadyInBasket = () => {
  message.error("Товар вже є в кошику", [1]);
};
export const successAddCategories = () => {
  message.success("Категорія додана!", [1]);
};
export const errorAddCategories = () => {
  message.error("Заповніть всі дані!", [1]);
};
export const successAddGoods = () => {
  message.success("Товар доданий!", [1]);
};
export const errorAddGoods = () => {
  message.error("Заповніть всі дані!", [1]);
};
export const successConfirm = () => {
  message.success("Заказ успішно оформлений!", [1]);
};
export const successRemove = () => {
  message.success("Товар успішно видалений!", [1]);
};
export const successAdd = () => {
  message.success("+1", [1]);
};
export const successChangeGoods = () => {
  message.success("Товар відредагований", [1]);
};
export const successMessageAdmin = () => {
  message.success("Ви увійшли як адміністратор", [1]);
};
export const successMessageCustomer = () => {
  message.success("Ви увійшли як користувач", [1]);
};
export const errorMessage = () => {
  message.error("Введіть коректний логін та пароль або зареєструйтесь", [1]);
};
export const errorUserLogIn = () => {
  message.error("Спочатку потрібно вийти з профілю, щоб зайти в новий", [1]);
};
