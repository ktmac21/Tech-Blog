const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const addComment = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(addComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comments.destroy({
            where: {
                id: req.params.id,
                blog_id: req.session.blog_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: "No blogpost found with this id!" });
            return;
        }
        res.status(200).json(commentData);

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;

 