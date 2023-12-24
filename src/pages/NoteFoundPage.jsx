import React from "react";
import { Link } from "react-router-dom";

const NoteFoundPage = () => {
  return (
    <div className="text-[50px] font-[700]">
      Повернутися на <Link to="/">Головну</Link>
    </div>
  );
};

export default NoteFoundPage;
