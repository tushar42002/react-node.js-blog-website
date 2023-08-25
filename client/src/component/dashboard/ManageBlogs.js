import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom'

const ManageBlogs = () => {

    const navigate = useNavigate();


    const context = useContext(DataContext);

    const { deleteBlog, editBlog, blogs, getBlogs } = context;

    useEffect(() => {
        getBlogs();
    }, [])

    // const updateBlog = (id) => {
    //     navigate(`/updateCategory/${id}`); 
    // }


    return (
        <main>
            <h2>Manage Blog</h2>
            <table>
                <thead>
                    <tr>
                        <td><b>Title</b></td>
                        <td><b>Category</b></td>
                        <td><b>Edit</b></td>
                        <td><b>Delete</b></td>
                    </tr>
                </thead>
                <tbody>

                    {

                        blogs.length === 0 ?
                            <tr><td style={{color: 'green', fontWeight: '600'}}>add blogs to show</td></tr> :

                            blogs.map((item) => {

                                return(
                                <tr key={item.id}>
                                    <td>{item.post_title}</td>
                                    <td>{item.title}</td>
                                    <td><span onClick={() =>  navigate(`/updatepost/${item.id}`)} className="btn sm">Edit</span></td>
                                    <td><span onClick={() => deleteBlog(item.id)} className="btn sm danger">Delete</span></td>
                                </tr> 
                                )
                            })
                    }

                </tbody>
            </table>
        </main>
    )
}

export default ManageBlogs