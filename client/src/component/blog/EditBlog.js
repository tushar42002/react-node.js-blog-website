import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useParams } from 'react-router-dom';

const EditBlog = () => {

    const context = useContext(DataContext);

    const { editBlog, category, getCategory, getBlogs2, blogs2 } = context;

    const blogId = useParams();

    useEffect(() => {
        console.log('start');
        getBlogs2(blogId.id);

        console.log('start2');
        console.log('blog2');

        getCategory();

    }, [])

    const initialBlogData = { id: blogId, heading: blogs2[0].post_title, category: blogs2[0].title, contant: blogs2[0].post_contant, image: '' };

    const [blogData, setBlogData] = useState(initialBlogData)




    const OnChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value })
    }

    const onImage = (e) => {
        setBlogData({ ...blogData, image: e.target.files[0] });
    }

    const updateBlogHandle = (e) => {

        e.preventDefault();

        console.log(blogData);
        console.log(Object.keys(blogData).length);

        editBlog(blogData);

    }


    return (
        <section className="form_section">
            <div className="container form_container">
                <h2>update Post</h2>
                <div className="alert_message error">
                    <p>this is an error message</p>
                </div>
                {blogs2.length > 0 ?
                    <form action="" encType="multipart/form-data" method="POST">
                        <input type="text" value={blogData.heading} onChange={(e) => OnChange(e)} name="heading" placeholder="Title" />
                        <select name="category" onChange={(e) => OnChange(e)}>
                            <option value="uncategorize">select category</option>

                            {
                                category.map((item) => {

                                    if (blogs2) {
                                        if (blogs2[0].title === item.title) {
                                            return (<option selected key={item.id} value={item.id}>{item.title}</option>)
                                        }
                                    } else {
                                        return (<option selected key={item.id} value={item.id}>{item.title}</option>)
                                    }

                                })
                            }
                        </select>
                        <textarea value={blogData.contant} onChange={(e) => OnChange(e)} rows="5" name="contant" placeholder="Body"></textarea>
                        <div className="form_control">
                            <label htmlFor="thumbnail">Add Thumbnail</label>
                            <input type="file" onChange={(e) => onImage(e)} name="image" id="thumbnail" />
                        </div>

                        <button type="submit" name="submit" onClick={(e) => updateBlogHandle(e)} className="btn">update Post</button>

                    </form> : null}
            </div>
        </section>
    )
}

export default EditBlog