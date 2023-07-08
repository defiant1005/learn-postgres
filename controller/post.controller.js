const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {name, content, userId} = req.body
        const newPost = await db.query('INSERT INTO post (name, content, user_id) values ($1, $2, $3) RETURNING *', [name, content, userId])
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req, res) {
        const id = req.query.id
        const posts = await db.query('select * from post where user_id = $1', [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController()