
import show from "./show.comments";
import create from "./create.comments";
import edit from "./edit.comments";
import list from "./list.comments";

export default { 
  name: "comments",
  label: "comments",
  hide: false,
  create,
  edit,
  list,
  show,
}