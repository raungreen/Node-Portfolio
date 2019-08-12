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
  const { title, description } = req.body;

  PostModel.create(
    {
      title: title,
      description: description,
      slug: slugify(title)
    },
    (err, data) => {
      if (err) {
        console.log('Error cant save posts');
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
};

module.exports = blogController;
