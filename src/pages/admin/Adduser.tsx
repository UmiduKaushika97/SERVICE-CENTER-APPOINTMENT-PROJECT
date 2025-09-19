// import app from "../../../src/firebaseConfig";
// import { getDatabase, ref, set, push } from 'firebase/database';
// import TextInput from '../../components/TextInput';
import { useFormik } from 'formik'
// import * as Yup from 'yup'



const Adduser = () => {

const formik = useFormik({

    initialValues: {
      adname: '',
      email: '',
    },
    onSubmit: () => {
      
    }
  })

  return (

    
    <div>
      <form onSubmit={formik.handleSubmit}>
    {/* <TextInput
          label="Name"
          name="name"
          value={name}
          onChange={formik.handleChange}
          placeholder="Enter your username"
        /> */}

        {/* <TextInput
          label="Username"
          name="username"
          // value={formik.values.username}
          // onChange={formik.handleChange}
          placeholder="Enter your username"
        /> */}
        </form>

        <h1 className=''>jhhhhhhhhhhhhhh</h1>
    </div>
  )
}

export default Adduser
