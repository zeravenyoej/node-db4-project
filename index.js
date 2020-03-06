const express = require("express");
const recipiesRoutes = require("./recipes/recipesRoutes")
const ingredientsRoutes = require("./ingredients/ingredientsRoutes")
const server = express();
const helmet = require("helmet")
const PORT = 7000;

server.use(helmet())
server.use(express.json())

server.use('/api/recipies', recipiesRoutes)
server.use('./api/ingredients', ingredientsRoutes)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json("Something went wrong")
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${port}`)
})