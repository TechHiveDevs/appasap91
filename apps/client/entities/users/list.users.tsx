
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
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

export default function ListUsers(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <NumberField source="id" />
<TextField source="firstname" />
<TextField source="lastname" />
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