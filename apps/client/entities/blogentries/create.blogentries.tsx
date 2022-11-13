
import { 
  Create,
  SimpleForm,
  
TextInput,
required,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateBlogentries(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="entrytext" variant="outlined"   />
<TextInput source="entrydatetime" variant="outlined" validate={required()}  />
<ReferenceInput label="blogs" source="blogsid" reference="blogs">
        <AutocompleteInput variant="outlined" /* optionText="blogs"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
