
const model  = require('../models');
const Joi    = require('joi')




 module.exports.getComments = async(req,res,next) => {
    try{
        req.query.per_page = req.query.per_page && req.query.per_page > 0 ? req.query.per_page : 5
        req.query.page     = req.query.page && req.query.page > 0 ? req.query.page : 1
        let offset         = (req.query.page - 1) * req.query.per_page;
        req.query.sort_field = req.query.sort_field ? req.query.sort_field : 'created_at'
        req.query.sort_type  = req.query.sort_type ? req.query.sort_type : 'desc'
        
        let comments  = {}
        let response = await model.Comment.findAndCountAll({
                                    limit : parseInt(req.query.per_page),
                                    order: [[req.query.sort_field, req.query.sort_type]],
                                    offset : parseInt(offset),
                                    include : [{model  : model.Article , attributes : ['id'] },{model  : model.User , attributes : ['id'] },]
                                })
        comments.data = response.rows
        comments.count = response.count;
        comments.per_page = req.query.per_page
        comments.current_page = req.query.page
        return res.status(200).send(comments);
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.getComment = async (req,res,next) => {
    try{
       if(!req.params.id) throw new Error('id not found');
       let comment =  await model.Comment.findOne({
           where : { id : req.params.id},
           include : [{model  : model.Article , attributes : ['id'] },{model  : model.User , attributes : ['id'] },]
        })
       return res.status(200).send(comment);
               
    }catch(error) {
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.addComment = async(req,res,next) => {
    try{
        let comment = await model.Comment.create({
                                    content:req.body.content, 
likes:req.body.likes, 
dislikes:req.body.dislikes, 
article_id:req.body.article_id, 
user_id:req.body.user_id, 
article_id:req.body.article_id, 
user_id:req.body.user_id, 

                                    })
        return res.status(200).send(comment)
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.editComment = async(req,res,next) => {
    try{
        if(!req.params.id) throw new Error('id not found');
        let comment = await model.Comment.findByPk(req.params.id);
        comment.content = req.body.content 
comment.likes = req.body.likes 
comment.dislikes = req.body.dislikes 
comment.article_id = req.body.article_id 
comment.user_id = req.body.user_id 
comment.article_id = req.body.article_id 
comment.user_id = req.body.user_id 

        comment.save();
        return res.status(200).send(comment)
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.deleteComment = async(req,res,next) => {
    try{
        if(!req.params.id) throw new Error('id not found');
        let comment = await model.Comment.destroy({where : {id : req.params.id}})
        return res.status(200).send(comment)
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
