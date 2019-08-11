const express = require('express');

const projectsController = {};

projectsController.index = (req, res) => {
  const projects = [
    {
      title: 'Dashboard',
      slug: 'dashboard',
      tags: ['html', 'css', 'javascript', 'php'],
      date: '12/3/2017',
      img:
        'https://cdn.dribbble.com/users/425904/screenshots/6966841/media/6bd49c1576685ffd81cb052941f6f6c5.png'
    },
    {
      title: 'Mobile',
      slug: 'mobile',
      tags: ['html', 'css', 'javascript', 'php'],
      date: '12/3/2017',
      img:
        'https://cdn.dribbble.com/users/1987152/screenshots/6970032/preview_2x.png'
    },
    {
      title: 'FoxWeather',
      slug: 'foxweather',
      tags: ['Svelte', 'PostGres', 'React', 'Node'],
      date: '12/3/2017',
      img:
        'https://cdn.dribbble.com/users/3803079/screenshots/6968682/aye2_2x.jpg'
    },
    {
      title: 'DribbbleTown',
      slug: 'dribbbletown',
      tags: ['html', 'python', 'R', 'Django'],
      date: '12/3/2017',
      img:
        'https://cdn.dribbble.com/users/2272442/screenshots/6969704/shhot_1-01_2x.jpg'
    },
    {
      title: 'Pitch',
      slug: 'pitch',
      tags: ['html', 'Python', 'Express', 'Next'],
      date: '12/3/2017',
      img:
        'https://cdn.dribbble.com/users/1209862/screenshots/6968312/___2x.png'
    },
    {
      title: 'Hotel',
      slug: 'hotel',
      tags: ['IOS', 'Python', 'Express', 'Next'],
      date: '12/3/2017',
      img:
        'https://cdn.dribbble.com/users/1997192/screenshots/6967654/app_17_shot_2x.png'
    }
  ];
  res.render('projects/index', {
    projects: projects
  });
};
projectsController.create = (req, res) => {
  res.render('projects/create');
};
projectsController.store = (req, res) => {
  res.send({
    saved: true
  });
};
projectsController.show = (req, res) => {
  res.render('projects/show');
};
projectsController.edit = (req, res) => {
  res.render('projects/edit');
};
projectsController.update = (req, res) => {
  res.send({
    updated: true
  });
};
projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  });
};

module.exports = projectsController;
