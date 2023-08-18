import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Link, useNavigate } from 'react-router-dom'

const ManageCategories = () => {

    const navigate = useNavigate();

    const context = useContext(DataContext);

    const { deleteCategory, editCategory, category, getCategory } = context;

    useEffect(() => {
        getCategory();
    }, [])

    const updateCategory = (data)=>{

        sessionStorage.removeItem('category');   
        sessionStorage.setItem('category', JSON.stringify(data));

        navigate('/updateCategory'); 
    }

    return (
        <main>
            <h2>Manage Categories</h2>
            <table>
                <thead>
                    <tr>
                        <td><b>Title</b></td>
                        <td><b>Edit</b></td>
                        <td><b>Delete</b></td>
                    </tr>
                </thead>
                <tbody>

                    {
                        category.length === 0 || category === null
                            ? <tr><td style={{ color: 'green', fontWeight: '600' }}>add category to show</td></tr>
                            : category.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td><p onClick={() => updateCategory({id:item.id, title: item.title, desc: item.descripton})} className="btn sm">Edit</p></td>
                                        <td><p onClick={() => deleteCategory(item.id)} className="btn sm danger">Delete</p></td>
                                    </tr>
                                )

                            })
                    }


                </tbody>
            </table>
        </main>
    )
}

export default ManageCategories