import React, { useContext, useState, useEffect, useLayoutEffect, useRef } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useParams } from 'react-router-dom';

const EditBlog = () => {

    const context = useContext(DataContext);

    const { editBlog, category, getCategory, url } = context;

    const { id } = useParams();

    const getBlogs2 = async (data) => {

        await fetch(`${url}/getpost/${data}`, {
            method: 'GET',
            headers: new Headers({ 'content-Type': 'application/json' })
        })
            .then(res => res.json())
            .then(data => {
                setBlogData({
                    id: id,
                    heading: data[0].post_title,
                    category: data[0].category,
                    contant: data[0].post_contant,
                    oldImagePath: data[0].post_image,
                    image: null
                })
            })
    }

    useEffect(() => {

        getBlogs2(id);

        getCategory();

    }, [])


    const [blogData, setBlogData] = useState({})



    const OnChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value })

    }

    const onImage = (e) => {
        setBlogData({ ...blogData, image: e.target.files[0] });
    }

    const updateBlogHandle = (e) => {

        e.preventDefault();
        editBlog(blogData);

    }


    return (
        <section className="form_section">
            <div className="container form_container">
                <h2>update Post</h2>
                <div className="alert_message error">
                    <p>this is an error message</p>
                </div>

                <form action="" encType="multipart/form-data" method="POST">
                    <input type="text" value={blogData.heading} onChange={(e) => OnChange(e)} name="heading" placeholder="Title" />
                    <select name="category" value={blogData.category} onChange={(e) => OnChange(e)}>
                        <option value="uncategorize">select category</option>

                        {
                            category.map((item) => {



                                return (<option key={item.id} value={item.id}>{item.title}</option>)


                            })
                        }
                    </select>
                    <textarea value={blogData.contant} onChange={(e) => OnChange(e)} rows="5" name="contant" placeholder="Body"></textarea>
                    <div className="form_control">
                        <label htmlFor="thumbnail">Add Thumbnail</label>
                        <input type="file" onChange={(e) => onImage(e)} name="image" id="thumbnail" />
                    </div>

                    <button type="submit" name="submit" onClick={(e) => updateBlogHandle(e)} className="btn">update Post</button>

                </form>

            </div>
        </section>
    )
}

export default EditBlog