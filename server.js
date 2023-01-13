const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get("/api", (req, res) => {
    res.json('{"users": ["user1", "user2", "user3", "user4", "user5", "user6"]}')
})

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})


