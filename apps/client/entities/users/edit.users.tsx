
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUsers(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="firstname" variant="outlined" validate={required()}  />
<TextInput source="lastname" variant="outlined" validate={required()}  />

      </SimpleForm>
    </Edit>
  );
}