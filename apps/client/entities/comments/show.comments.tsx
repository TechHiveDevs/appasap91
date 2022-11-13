
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowComments(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="commentdatetime" />
<TextField source="commentcontent" />
<ReferenceField source="blogentriesid" reference="blogentries" />
<ReferenceField source="usersid" reference="users" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}