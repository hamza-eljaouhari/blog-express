
    const express             = require('express');
    const router              = express.Router();
    const articleController  = require('../controllers/articleController')
    const webMiddleware       = require('../middleware/web');
  
    router.get('/api/articles',webMiddleware.checkJWT,articleController.getArticles);
    router.get('/api/articles/:id',webMiddleware.checkJWT,articleController.getArticle);
    router.post('/api/articles',webMiddleware.checkJWT,articleController.addArticle);
    router.patch('/api/articles/:id',webMiddleware.checkJWT,articleController.editArticle);
    router.delete('/api/articles/:id',webMiddleware.checkJWT,articleController.deleteArticle);

    
    

    module.exports = router;
    