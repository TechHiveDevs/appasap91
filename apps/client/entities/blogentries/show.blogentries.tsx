
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowBlogentries(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="entrytext" />
<TextField source="entrydatetime" />
<ReferenceField source="blogsid" reference="blogs" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}