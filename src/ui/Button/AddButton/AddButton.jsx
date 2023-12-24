import React from "react";
import { useTranslation } from "react-i18next";

const AddButton = ({ onClick, text, type }) => {
  const { t } = useTranslation();

  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 rounded-3xl bg-green-100 hover:bg-green-300 duration-200 dark:bg-slate-200 dark:hover:bg-gray-400"
    >
      {t(text)}
    </button>
  );
};

export default AddButton;
