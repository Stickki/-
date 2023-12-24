import React, { useState } from "react";
import {
  useAddGoodsMutation,
  useGetCategoryQuery,
} from "../../../redux/goodsApi";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../../../ui/Spinner/Spinner";
import { successAddGoods, errorAddGoods } from "../../../utils/list";
import AddButton from "../../../ui/Button/AddButton/AddButton";
import InputText from "../../../ui/Input/InputText";

const FormAddGoods = () => {
  const [addGoods, isLoading] = useAddGoodsMutation();

  const { data = [] } = useGetCategoryQuery();
  let allCategories = data.slice(2);

  const [img, setImg] = useState([1, 2, 3]);

  const handleAddGoods = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let title = e.target.title.value;
    let price = Number(e.target.price.value);
    let description = e.target.description.value;
    let category = e.target.category.value;
    let img1 = e.target.img1.value;
    let img2 = e.target.img2.value;
    let img3 = e.target.img3.value;
    if (
      title === "" ||
      price === 0 ||
      description === "" ||
      category === "" ||
      img1 === "" ||
      img2 === "" ||
      img3 === ""
    ) {
      errorAddGoods();
    } else {
      successAddGoods();
      let images = [];
      images.push(img1, img2, img3);
      await addGoods({
        title: title,
        price: price,
        description: description,
        category: category,
        images: images,
      }).unwrap();
      e.target.title.value = "";
      e.target.price.value = "";
      e.target.description.value = "";
      e.target.category.value = "";
      e.target.img1.value = "";
      e.target.img2.value = "";
      e.target.img3.value = "";
    }
  };

  if (!isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-[20px] dark:text-white">
        Форма для додаваня товару
      </div>
      <form
        onSubmit={handleAddGoods}
        className="flex flex-col max-w-[500px] border-2 p-6"
      >
        <InputText
          labelName={"Назва товару"}
          type={"text"}
          name={"title"}
          placeholder={"Введіть назву товару"}
        />
        <InputText
          labelName={"Вартість товару"}
          type={"number"}
          name={"price"}
          placeholder={"Введіть вартість числом в гривнях"}
        />
        <InputText
          labelName={"Опис товару"}
          type={"text"}
          name={"description"}
          placeholder={"Введить опис товару"}
        />
        <label className="mb-2">
          <span className="dark:text-white">Категорія товару:</span>
          <select
            name="category"
            className="px-6 py-4 bg-slate-100 w-full rounded-full"
          >
            {allCategories?.map((item) => {
              return (
                <option key={uuidv4()} value={item.name}>
                  {item.visibleName}
                </option>
              );
            })}
          </select>
        </label>
        <label className="mb-2 ">
          <span className="dark:text-white">Зображеня товару:</span>
          {img?.map((item) => {
            return (
              <input
                key={uuidv4()}
                type="text"
                name={`img${item}`}
                className="w-full bg-slate-100 px-6 py-2 rounded-full mb-2 "
                placeholder="URL зображення"
              />
            );
          })}
        </label>
        <AddButton text={"Додати товар"} />
      </form>
    </div>
  );
};

export default FormAddGoods;
