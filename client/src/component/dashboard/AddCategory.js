import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataProvider';
import { useLocation } from 'react-router-dom';





const AddCategory = () => {

    const location = useLocation();

    let initialCategory = JSON.parse(sessionStorage.getItem('category'));


    const context = useContext(DataContext);

    const { addCategory, editCategory } = context;



    const [categoryData, setCategoryData] = useState(initialCategory === null ? {} : initialCategory);




    const OnChange = (e) => {
        setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
    }

    const categoryHandle = (e) => {
        e.preventDefault();
        // console.log(categoryData);
        addCategory(categoryData);
    }

    const updateCategoryHandle = (e,data) => {

        e.preventDefault();

        editCategory(data);

        sessionStorage.removeItem('category');

    }




    return (
        <section className="form_section">
            <div className="container form_container">
                <h2>Add Category</h2>
                
                <div className="alert_message error">
                    <p>{initialCategory === null ? 'some error occured or category not exists try again later ' : 'some error ocurred'}</p>
                </div>

                {location.pathname !== '/updateCategory' ?
                    <form>
                        <input type="text" name="title" onChange={(e) => OnChange(e)} placeholder="Title" />
                        <textarea rows="4" name="desc" onChange={(e) => OnChange(e)} placeholder="Description"></textarea>
                        <button type="submit" name="submit" onClick={(e)=>categoryHandle(e)} className="btn">Add Category</button>
                    </form>
                    :
                    <form>
                        <input type="text" name="title" value={categoryData.title} onChange={(e) => OnChange(e)} placeholder="Title" />
                        <textarea rows="4" name="desc" value={categoryData.desc} onChange={(e) => OnChange(e)} placeholder="Description"></textarea>
                        <button onClick={(e) => updateCategoryHandle(e,categoryData)} className="btn">update Category</button>
                    </form>
                }



            </div>
        </section>
    )
}

export default AddCategory