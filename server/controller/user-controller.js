import bcrypt from 'bcryptjs';
import db from '../database/db.js'


export const getUsers = (req, res)=>{
    let sql = `SELECT * FROM posts`;
    db.query(sql, function(err, result){
        if(err){
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            res.json(result);
        }
    })
}

export const signupUser = async (req, res) => {

    let { firstname, lastname, email, password } = req.body;
    let user_role = false;

    let image = req.file.filename;

    let userRole = req.body.userrole;

    if(userRole == 'yes'){
        user_role = true;
    }

    let sql = `SELECT * FROM users WHERE email = '${email}'`;

    db.query(sql, async function(err, result){
        if(result.lenght){
            return res.json({ 'alert': 'email already exists' })
        } else if(err){
            console.log(err);
            res.status(500).json({ "error": "some error occured please try later" });
        }else{
            try {
                // const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
                let {firstname, lastname, email} = req.body;
                let avatar_name = req.file.filename;
        
                let sql = `INSERT INTO users (firstname, lastname, email, password, avatar, is_admin) VALUES ('${firstname}', '${lastname}', '${email}', '${hashedPassword}', '${image}', '${user_role}')`;
        
                db.query(sql, function (err, result) {
                    if (result) {
                        res.status(200).json({"success": "sign up succesfull"});
                    } else{
                        console.log(err);
                        res.status(500).json({ "error": "some error occured please try later" });
                    }
                })
            } catch (error) {
                console.log(error);
                return res.status(500).json({"error":'Error while signup the user'})
                
            }
        }
    })


}

export const loginUser = async (req, res) => {


    let {email, password} = req.body;
    
    let sql = `SELECT * FROM users WHERE email = '${email}'`;

    db.query(sql, async function(err,result){
        if(!result.length){
            return res.status(400).json({"alert": 'invalid username or password'})
        }else if(result.length){
            try {
                let match  = await bcrypt.compare(password, result[0].password);
                if(match){
                    return res.status(200).json(result[0]);
                }else{
                    res.status(400).json({"error": 'invalid username or password'});
                }
        
            } catch (error) {
                return res.status(500).json({"error":'Error while login in user'});
            }
        }
    })
}

export const updateUser = async (req, res) => {
    
    let sql = `UPDATE users SET firstname ='${firstname}', lastname= '${lastname}', is_admin = '${userrole}' where id = ${id}`;

    db.query(sql, async function(err,result){
        if(!result.length){
            return res.status(400).json({"alert": 'invalid username or password'})
        }else if(result.length){
            try {
                let match  = await bcrypt.compare(req.body.password, result[0].password);
                if(match){
                    return res.status(200).json(result[0]);
                }else{
                    res.status(400).json({"error": 'invalid username or password'});
                }
        
            } catch (error) {
                console.log(error);
                return res.status(500).json({"error":'Error while login in user'});
            }
        }
    })
}

export const deleteUser = (req, res) => {

    let { id } = req.body;

    let sql = `DELETE FROM users WHERE id = ${id}`;

    db.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).json({ "error": "sommething is wrong" });
        } else {
            res.json({'success':'user is deleted'});
        }
    })
}