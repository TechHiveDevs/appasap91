
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowBlogs(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="title" />
<TextField source="createddatetime" />
<ReferenceField source="usersid" reference="users" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}