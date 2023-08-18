import db from "../database/db.js";

export const getCategory = (req, res)=>{

    // console.log(req.body);

    let sql = `SELECT * FROM categories`;
    db.query(sql, function(err, result){
        if(err){
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            res.json(result);
        }
    })
}

export const addCategory = (req, res)=>{

    console.log(req.body);

    let { title, desc, email } = req.body;

    let sql = `INSERT INTO categories (title, descripton, user_email) VALUES ('${title}', '${desc}', '${email}')`;
    db.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            res.status(200).json({"success": "post is added"});
        }
    })
}

export const updateCategory = (req, res) =>{

    console.log(req.body);

    let sql = `UPDATE categories SET title ='${title}', desc= '${desc}', user_email = '${email}' where id = ${id}`;

    db.query(sql, function(err, result){
        if(err){
            res.status(500).json({ "error": "some error occured please try later" });
        }
    })
}

export const deleteCategory = (req, res) => {

    console.log(req.params);

    let { id } = req.params;

    let sql = `DELETE FROM categories WHERE id = ${id}`;

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).json({ "error": "sommething is wrong" });
        } else {
            res.json({'success':'product is deleted'});
        }
    })
}

