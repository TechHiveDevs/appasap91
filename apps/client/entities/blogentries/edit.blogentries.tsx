
import { 
  Edit,
  SimpleForm,
  
TextInput,
required,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditBlogentries(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="entrytext" variant="outlined"   />
<TextInput source="entrydatetime" variant="outlined" validate={required()}  />
<ReferenceInput label="blogs" source="blogsid" reference="blogs">
        <AutocompleteInput variant="outlined" /* optionText="blogs"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}