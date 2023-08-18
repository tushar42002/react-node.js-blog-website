import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';

const ManageBlogs = () => {


    const context = useContext(DataContext);

    const { deleteBlog, editBlog, blogs, getBlogs } = context;

    useEffect(() => {
        getBlogs();
    }, [])


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
                                    <td>{item.category}</td>
                                    <td><span onClick={() => editBlog(item.blog)} className="btn sm">Edit</span></td>
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