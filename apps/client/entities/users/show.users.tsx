
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowUsers(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="firstname" />
<TextField source="lastname" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}