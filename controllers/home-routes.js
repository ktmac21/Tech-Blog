const router = require('express').Router();
const { Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const blogdata = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const allblogposts = blogdata.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render('homepage', { blogdata: allblogposts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogposts/:id', async (req, res) => {
  const blogdata = await Blogpost.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });

  const oneBlogpost = blogdata.get({ plain: true });

  res.render('dashboard', oneBlogpost);
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  } else {
    res.render('login');
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Blogpost,
        },
      ],
    });
    const blogpostByUser = userData.get({ plain: true });

    console.log(blogpostByUser);

    res.render('dashboard', { blogposts: blogpostByUser.blogposts });
  } catch (err) {
    console.log(err);
    res.status(500).json(e); 
  }
});

module.exports = router; 