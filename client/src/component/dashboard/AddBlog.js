import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useLocation, useParams } from 'react-router-dom';

const AddBlog = () => {

    const location = useLocation();

    const context = useContext(DataContext);

    const { addBlog, category, getCategory } = context;

    const blogId = useParams();

    let initialBlogData = {};

    console.log(location.pathname.slice(0, 11));

    useEffect(() => {

        getCategory();

    }, [])


    const [blogData, setBlogData] = useState(initialBlogData)




    const OnChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value })
    }

    const onImage = (e) => {
        setBlogData({ ...blogData, image: e.target.files[0] });
    }

    const addBlogHandle = (e) => {

        e.preventDefault();

        console.log(blogData);
        console.log(Object.keys(blogData).length);

        addBlog(blogData);

    }



    return (
        <section className="form_section">
            <div className="container form_container">
                <h2>Add Post</h2>
                <div className="alert_message error">
                    <p>this is an error message</p>
                </div>
                <form action="" encType="multipart/form-data" method="POST">
                    <input type="text" onChange={(e) => OnChange(e)} name="heading" placeholder="Title" />
                    <select name="category" onChange={(e) => OnChange(e)}>
                        <option value="uncategorize">select category</option>

                        {
                            category.map((item) => {

                                return (<option key={item.id} value={item.id}>{item.title}</option>)

                            })
                        }
                    </select>
                    <textarea onChange={(e) => OnChange(e)} rows="5" name="contant" placeholder="Body"></textarea>
                    <div className="form_control">
                        <label htmlFor="thumbnail">Add Thumbnail</label>
                        <input type="file" onChange={(e) => onImage(e)} name="image" id="thumbnail" />
                    </div>
                    {
                        <button type="submit" name="submit" onClick={(e) => addBlogHandle(e)} className="btn">Add Post</button>
                    }
                </form>
            </div>
        </section>
    )
}

export default AddBlog