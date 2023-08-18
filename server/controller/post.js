import db from "../database/db.js";

export const getPost = (req, res)=>{
    
    let sql = `SELECT * FROM posts ORDER BY date DESC`;
    db.query(sql, function(err, result){
        if(err){
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            res.json(result);
        }
    })
}

export const getPostWithId = (req, res)=>{

    const category = req.query.category;
    const id = req.params.id;

    if(id){
        var sql = `SELECT * FROM posts WHERE id = '${id}'  ORDER BY date DESC`;
    }else if(category){
        var sql = `SELECT * FROM posts WHERE category = '${category}'  ORDER BY date DESC`;
    }
    db.query(sql, function(err, result){
        if(err){
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            res.json(result);
        }
    })
}

export const addPost = (req, res)=>{

    const {heading, category, contant} = req.body;
    const userID = req.body.user_id;

    console.log(req.body);
    console.log(req.file);

    let sql = `INSERT INTO posts (post_title, post_contant, post_image, category, user_id, date) VALUES ("${heading}","${req.body.contant}","${req.file.filename}","${category}","${userID}", current_timestamp())`;
    db.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            res.status(200).json({"success": "post is added"});
        }
    })
}

export const updatePost = (req, res) =>{

    let sql = `UPDATE posts SET post_title ='${title}', post_contant = '${contant}', post_image = '${thumbnail}', category = '${category}' where id = ${id}`;

    db.query(sql, function(err, result){
        if(err){
            res.status(500).json({ "error": "some error occured please try later" });
        }
    })
}

export const deletePost = (req, res) => {

    let { id } = req.params;

    let sql = `DELETE FROM posts WHERE id = ${id}`;

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).json({ "error": "sommething is wrong" });
        } else {
            res.json({'success':'product is deleted'});
        }
    })
}

