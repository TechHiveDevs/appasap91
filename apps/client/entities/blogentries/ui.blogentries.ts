
import show from "./show.blogentries";
import create from "./create.blogentries";
import edit from "./edit.blogentries";
import list from "./list.blogentries";

export default { 
  name: "blogentries",
  label: "blogentries",
  hide: false,
  create,
  edit,
  list,
  show,
}