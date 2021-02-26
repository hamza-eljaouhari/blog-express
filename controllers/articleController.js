
const model  = require('../models');
const Joi    = require('joi')




 module.exports.getArticles = async(req,res,next) => {
    try{
        req.query.per_page = req.query.per_page && req.query.per_page > 0 ? req.query.per_page : 5
        req.query.page     = req.query.page && req.query.page > 0 ? req.query.page : 1
        let offset         = (req.query.page - 1) * req.query.per_page;
        req.query.sort_field = req.query.sort_field ? req.query.sort_field : 'created_at'
        req.query.sort_type  = req.query.sort_type ? req.query.sort_type : 'desc'
        
        let articles  = {}
        let response = await model.Article.findAndCountAll({
                                    limit : parseInt(req.query.per_page),
                                    order: [[req.query.sort_field, req.query.sort_type]],
                                    offset : parseInt(offset),
                                    include : [{model  : model.User , attributes : ['id'] },]
                                })
        articles.data = response.rows
        articles.count = response.count;
        articles.per_page = req.query.per_page
        articles.current_page = req.query.page
        return res.status(200).send(articles);
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.getArticle = async (req,res,next) => {
    try{
       if(!req.params.id) throw new Error('id not found');
       let article =  await model.Article.findOne({
           where : { id : req.params.id},
           include : [{model  : model.User , attributes : ['id'] },]
        })
       return res.status(200).send(article);
               
    }catch(error) {
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.addArticle = async(req,res,next) => {
    try{
        let article = await model.Article.create({
                                    title:req.body.title, 
content:req.body.content, 
user_id:req.body.user_id, 
user_id:req.body.user_id, 

                                    })
        return res.status(200).send(article)
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.editArticle = async(req,res,next) => {
    try{
        if(!req.params.id) throw new Error('id not found');
        let article = await model.Article.findByPk(req.params.id);
        article.title = req.body.title 
article.content = req.body.content 
article.user_id = req.body.user_id 
article.user_id = req.body.user_id 

        article.save();
        return res.status(200).send(article)
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
 module.exports.deleteArticle = async(req,res,next) => {
    try{
        if(!req.params.id) throw new Error('id not found');
        let article = await model.Article.destroy({where : {id : req.params.id}})
        return res.status(200).send(article)
    }catch(error){
        return res.status(400).send({message : 'something went wrong'})
    }
}
