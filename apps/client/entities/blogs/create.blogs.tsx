
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateBlogs(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="title" variant="outlined" validate={required()}  />
<TextInput source="createddatetime" variant="outlined" validate={required()}  />
<ReferenceInput label="users" source="usersid" reference="users">
        <AutocompleteInput variant="outlined" /* optionText="users"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
