// Simulated blog data (replace with actual database interactions)
const blogs = [
    { id: 1, authorId: 1, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 2, authorId: 2, title: 'Blog 2', content: 'Content of Blog 2' },
    { id: 3, authorId: 1, title: 'Blog 3', content: 'Content of Blog 3' }
];

// Controller for blog endpoints
function getAllBlogs(req, res) {
    // Fetch all blogs from the database (simulated)
    res.json(blogs);
}

function createBlog(req, res) {
    const { title, content } = req.body;
    const authorId = req.user.id; // Assuming the user ID is attached to the request object after authentication

    // Create a new blog object
    const newBlog = {
        id: blogs.length + 1,
        authorId,
        title,
        content
    };

    // Add the new blog to the blogs array (simulated database)
    blogs.push(newBlog);

    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
}

function getBlogByAuthorId(req, res) {
    const authorId = parseInt(req.params.authorId);

    // Filter blogs by author ID
    const authorBlogs = blogs.filter(blog => blog.authorId === authorId);

    if (authorBlogs.length === 0) {
        return res.status(404).json({ message: 'Blogs not found for the given author ID' });
    }

    res.json(authorBlogs);
}

module.exports = { getAllBlogs, createBlog, getBlogByAuthorId };
