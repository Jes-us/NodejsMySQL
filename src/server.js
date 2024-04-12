
const express = require('express');
const allitems = require('./allitems');

const app = express();


app.use(express.json());

const port = 3003;

app.listen(3003, () => {

  console.log(`Server is running on port ${port}`);

  app.get('/', async (req, res) => {
    const items = await allitems();
    res.status(201).json(items);
  });

});
