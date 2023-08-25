import { createContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export const DataContext = createContext();


const DataProvider = ({ children }) => {

    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    const [blogs2, setBlogs2] = useState([]);
    const [isLogin, setIsLogin] = useState(false);

    const [category, setCategory] = useState([]);

    const url = 'http://localhost:8000';


    // get category and blogs =======================================

    const getBlogs = async () => {

        const response = await fetch(`${url}/getpost`, {
            method: 'GET',
            headers: new Headers({ 'content-Type': 'application/json' })
        })
        const json = await response.json();
        setBlogs(json)
    }

    const getBlogs2 = async (data) => {

        const response = await fetch(`${url}/getpost/${data}`, {
            method: 'GET',
            headers: new Headers({ 'content-Type': 'application/json' })
        })
        const json = await response.json();

        console.log(json, 'dataprovider');

        setBlogs2(json)

        
    }

    const getCategory = async () => {

        const response = await fetch(`${url}/getcategory`, {
            method: 'GET',
            headers: new Headers({ 'content-Type': 'application/json' })
        })
        const json = await response.json();
        setCategory(json)
    }

    // login and sign up ======================================================

    const login = async (data) => {

        // console.log(data);

        const response = await fetch(`${url}/login`, {
            method: 'POST',
            headers: new Headers({ 'content-Type': 'application/json' }),
            body: JSON.stringify(data)
        })
        const json = await response.json();
        sessionStorage.setItem('user', JSON.stringify(json));
        
        setIsLogin(true);

        sessionStorage.setItem('login', true);

        navigate('/', { replace: true });


    }

    const signup = async (data) => {

        // console.log(data);

        const file = new FormData();

        file.append('firstname', data.firstname)
        file.append('lastname', data.lastname)
        file.append('email', data.email)
        file.append('password', data.password)
        file.append('image', data.image)


        const response = await fetch(`http://localhost:8000/signup`, {
            method: 'POST',
            body: file
        })

        const json = await response.json();

        if(json.error){
            console.log(json.error);
        } else{
            navigate('/login', { replace: true });
        }
       
    }

    //add category or blog ===============================================

    const addBlog = async (data) => {

        const file = new FormData();

        let user = JSON.parse(sessionStorage.getItem('user'));

        file.append('heading', data.heading)
        file.append('category', data.category)
        file.append('contant', data.contant)
        file.append('image', data.image)
        file.append('user_id', '0')
        console.log(file);

        const response = await fetch(`${url}/addpost`, {
            method: 'POST',
            body: file
        })

        const json = await response.json();

        if(json.error){

        } else{
            navigate('/dashboard', { replace: true });
        }
       
    }

    const addCategory = async (data) => {

        console.log(JSON.parse(sessionStorage.getItem('user')));

        // let userEmail = JSON.parse(sessionStorage.getItem('user')).email;

        // data.email = userEmail;

        // console.log(data);

        const response = await fetch(`${url}/addcategory`, {
            method: 'POST',
            headers: new Headers({ 'content-Type': 'application/json' }),
            body: JSON.stringify(data)
        })
        const json = await response.json();

        if(json.error){

        } else{
            navigate('/dashboard', { replace: true });
             
        }
       
    }

    // delete category or blog ==================================================

    const deleteBlog = async (data) => {

        const response = await fetch(`${url}/deletepost/${data}`, {
            method: 'GET',
            headers: new Headers({ 'content-Type': 'application/json' })
        })
        const json = await response.json();

        if(json.error){

        } else{
            navigate('/dashboard', { replace: true });
        }
       
    }

    const deleteCategory = async (data) => {

        const response = await fetch(`${url}/deletecategory/${data}`, {
            method: 'GET',
            headers: new Headers({ 'content-Type': 'application/json' })
        })
        const json = await response.json();

        if(json.error){

        } else{
            navigate('/dashboard', { replace: true });
            
        }
       
    }

    //  =================== edit category or blog  =====================

    const editBlog = async (data) => {

        console.log(data, 'editBlog');

        const file = new FormData();

        file.append('id', data.id);
        file.append('heading', data.heading);
        file.append('category', data.category);
        file.append('contant', data.contant);
        file.append('image', data.image);
        file.append('oldImagePath', data.oldImagePath);
        console.log(file);

        const response = await fetch(`${url}/updatepost`, {
            method: 'POST',
            body: file
        })
        const json = await response.json();

        if(json.error){

        } else{
            navigate('/dashboard', { replace: true });
        }
       
    }

    const editCategory = async (data) => {

        const response = await fetch(`${url}/updatecategory`, {
            method: 'POST',
            headers: new Headers({ 'content-Type': 'application/json' }),
            body: JSON.stringify(data)
        })
        const json = await response.json();

        if(json.error){

        } else{
            navigate('/dashboard', { replace: true });
        }
       
    }

    return (
        <DataContext.Provider value={{
          isLogin, blogs,blogs2, category, url, login, signup, getBlogs,getBlogs2, addBlog, deleteBlog, editBlog, getCategory, addCategory, deleteCategory, editCategory
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider