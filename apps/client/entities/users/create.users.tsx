
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateUsers(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="firstname" variant="outlined" validate={required()}  />
<TextInput source="lastname" variant="outlined" validate={required()}  />

        </SimpleForm>
      </Create>
    );
  }
