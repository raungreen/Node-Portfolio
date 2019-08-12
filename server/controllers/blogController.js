const express = require('express');
const PostModel = require('../models/Post.js').model;
const slugify = require('../global/slugify.js');
const blogController = {};

blogController.index = (req, res) => {
  // Find all the post
  PostModel.find({}, (err, data) => {
    if (err) {
      console.log('Error cant find the posts');
    } else {
      console.log(data);
      res.render('blog/index', {
        posts: data
      });
    }
  });
};

blogController.show = (req, res) => {
  PostModel.find({ slug: req.params.slug }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.render('blog/show', {
        post: data[0]
      });
    }
  });
};

blogController.create = (req, res) => {
  res.render('blog/create');
};

blogController.store = (req, res) => {
  const { title, category, description } = req.body;

  PostModel.create(
    {
      title: title,
      category: category,
      description: description,
      slug: slugify(title)
    },
    (err, data) => {
      if (err) {
        console.log('Error cant save posts');
      } else {
        console.log(data);
        res.redirect('/blog');
      }
    }
  );
};

blogController.edit = (req, res) => {
  PostModel.find({ slug: req.params.slug }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.render('blog/edit', {
        post: data[0]
      });
    }
  });
};

blogController.update = (req, res) => {
  const { _id, title, category, description } = req.body;

  PostModel.update(
    {
      _id: _id
    },
    {
      title: title,
      category: category,
      description: description,
      slug: slugify(title)
    },
    (err, data) => {
      if (err) {
        console.log('Error cant save posts');
      } else {
        console.log(data);
        res.redirect('/blog');
      }
    }
  );
};

blogController.destroy = (req, res) => {
  PostModel.remove({ slug: req.params.slug }, err => {
    if (err) {
      res.redirect('/blog');
      console.log('Error cannot delete post');
      console.log(err);
    } else {
      console.log('deleted');
      res.redirect('/blog');
    }
  });
};

module.exports = blogController;
