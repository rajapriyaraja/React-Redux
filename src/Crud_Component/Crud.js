
import { DELETE_USER,FORM_SUBMIT,EDIT_USER, UPDATE_DATA} from './Action';
import { useReducer } from 'react';
import Reducer from './Reducer';
import './Style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Crud(){

    const initialValue = {
        user:[],
        userName:"",
        userPassword:"",
        editingIndex:-1
    };

    const [ formData,dispatch] = useReducer( Reducer,initialValue);

    const handleChange = (e) => {

        const { name,value } = e.target;
        dispatch( {type:name,data:value});

    };
    const handleSubmit = (e) => {

        e.preventDefault();
        if (formData.editingIndex !== -1) {
            const newUserList = [...formData.user];
            
            newUserList[formData.editingIndex] = { userName: formData.userName, userPassword: formData.userPassword };
          
            dispatch({ type: UPDATE_DATA,data:newUserList });
            console.log(newUserList);
        }else{
            dispatch( {type:FORM_SUBMIT});
        };
        dispatch( {
            type:EDIT_USER,
            data:{ 
                userName:"",
                userPassword:"",
                index:-1
            }
            } 
          );
    };

    const handleEdit = (index) => {
      
      const userEdit = formData.user[index]
      dispatch( {
        type:EDIT_USER,
        data:{ 
            userName:userEdit.userName,
            userPassword:userEdit.userPassword,
            index:index
        }
        } 
      );
    };

    const handleDelete = (index) => {

        const newUserList = [...formData.user];
        newUserList.splice(index, 1); 
        dispatch({ type:DELETE_USER, data: newUserList });

    };

    return(

        <>
        <div id="formContainer">

            <h1>Crud Operation</h1>

            <form onSubmit={handleSubmit}>

                <label className='first'>Name:</label>
                <input
                name='userName'
                value={formData.userName}
                onChange={handleChange}
                />

                <label className='second'>Password:</label>
                <input
                name='userPassword'
                value={formData.userPassword}
                onChange={handleChange}
                />

                <button>Submit</button>

            </form>

        </div>

        <div className='customers'>
            <table>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        formData.user.map(
                            (value,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{value.userName}</td>
                                        <td>{value.userPassword}</td>
                                        <td>
                                            <button className='del'
                                            onClick={() => handleEdit(index)}
                                            >
                                                Edit

                                            </button>
                                            <button className='del'
                                            onClick={() => handleDelete(index)}
                                            >
                                                Delete

                                            </button>
                                        </td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Crud;


