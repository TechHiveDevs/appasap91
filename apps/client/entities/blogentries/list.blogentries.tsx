
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
ReferenceField,
  ShowButton,
  EditButton, 
  DeleteButton,
  TextInput
} from "react-admin";
import Actions from "../../react-admin/components/Actions";

// ------------------------------------------------

const filters = [
  <TextInput label="Search" source="q" variant="outlined" />,
];

// ------------------------------------------------

export default function ListBlogentries(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <NumberField source="id" />
<TextField source="entrytext" />
<TextField source="entrydatetime" />
<ReferenceField source="blogsid" reference="blogs" />
<DateField source="createdAt" />
<Actions>
        <ShowButton />
        <EditButton />
        <DeleteButton />
        </Actions>
    </Datagrid>
    </List>
  );
}