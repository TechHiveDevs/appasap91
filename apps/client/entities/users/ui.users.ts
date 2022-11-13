
import show from "./show.users";
import create from "./create.users";
import edit from "./edit.users";
import list from "./list.users";

export default { 
  name: "users",
  label: "users",
  hide: false,
  create,
  edit,
  list,
  show,
}