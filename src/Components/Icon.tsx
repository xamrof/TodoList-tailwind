import React from "react";
import AddIcon from "../../public/add.png";
import EditIcon from "../../public/edit.png";
import DeleteIcon from "../../public/cancel.png";
import SaveIcon from "../../public/save.png";

type IconProps = {
  name: "add" | "edit" | "delete" | "save";
  className?: string;
};

const icons = {
  add: AddIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  save: SaveIcon,
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const svgIcon = icons[name];
  return <img src={svgIcon} alt={name} className={className} />;
};

export default Icon;
