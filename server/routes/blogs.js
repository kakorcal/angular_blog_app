const router = require('express').Router();
const knex = require('../db/knex');
const _ = require('lodash');

router.get('/', (req, res)=>{
  knex.select(['b.*', 'p.content']).from('blogs as b')
    .join('posts as p', 'b.id', 'p.blog_id')
    .then(blogs=>{
      res.send(blogs);
    }).catch(err=>{
      res.send(err);
    });
});

router.post('/', (req, res)=>{
  const newPost = {};
  knex('blogs').insert(_.omit(req.body.blog, ['content']), '*').then(([blog])=>{
    _.assign(newPost, blog);
    return knex('posts').insert({blog_id: blog.id, content: req.body.blog.content}, '*');
  }).then(([{content}])=>{
    newPost.content = content;
    res.send(newPost);
  }).catch(err=>{
    res.send(err);
  });
});

router.get('/:id', (req, res)=>{
  knex.select(['b.*', 'p.content']).from('blogs as b')
    .join('posts as p', 'b.id', 'p.blog_id')
    .where('b.id', req.params.id).first()
    .then(blog=>{
      res.send(blog);
    }).catch(err=>{
      res.send(err);
    });
});

router.put('/:id', (req, res)=>{
  knex('blogs').where('id', req.params.id)
    .update(_.omit(req.body.blog, ['content']), 'id').then(id=>{
      return knex('posts').where('blog_id', +id).update(_.pick(req.body.blog, ['content']));
  }).then(()=>{
    res.send('Blog Post Updated');
  }).catch(err=>{
    res.send(err);
  });
});

router.delete('/:id', (req, res)=>{
  knex('blogs').where('id', req.params.id).del().then(()=>{
    res.send('Blog Post Deleted');
  }).catch(err=>{
    res.send(err);
  });
});

module.exports = router;