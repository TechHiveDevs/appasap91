
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditComments(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="commentdatetime" variant="outlined" validate={required()}  />
<TextInput source="commentcontent" variant="outlined" validate={required()}  />
<ReferenceInput label="blogentries" source="blogentriesid" reference="blogentries">
        <AutocompleteInput variant="outlined" /* optionText="blogentries"   */ />
      </ReferenceInput>
    
<ReferenceInput label="users" source="usersid" reference="users">
        <AutocompleteInput variant="outlined" /* optionText="users"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}