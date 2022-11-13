
import show from "./show.blogs";
import create from "./create.blogs";
import edit from "./edit.blogs";
import list from "./list.blogs";

export default { 
  name: "blogs",
  label: "blogs",
  hide: false,
  create,
  edit,
  list,
  show,
}