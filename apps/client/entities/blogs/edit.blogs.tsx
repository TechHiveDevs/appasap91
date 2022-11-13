
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditBlogs(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="title" variant="outlined" validate={required()}  />
<TextInput source="createddatetime" variant="outlined" validate={required()}  />
<ReferenceInput label="users" source="usersid" reference="users">
        <AutocompleteInput variant="outlined" /* optionText="users"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}