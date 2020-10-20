require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const cors = require('cors')
const corsOptions = require('./config/cors')
const morgan = require('morgan')
const app = express()

const categoryRouter = require('./controllers/category')
const foodRouter = require('./controllers/food')
const seedRouter = require('./db/seed')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
});

app.use("/category", categoryRouter)
app.use("/food", foodRouter)
app.use("/seed", seedRouter)

app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});