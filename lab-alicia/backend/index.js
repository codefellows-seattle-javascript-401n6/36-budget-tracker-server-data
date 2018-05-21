let express = require('express');
let cors = require('cors');
const app = express();

app.use(cors());

const uuidv4 = require('uuid/v4');

let categoryId = uuidv4();

app.get('*', (req, res) => {
  res.send([
    {
      categories: [
        {
          id: categoryId,
          isEditing: false,
          timestamp: `${new Date()}`,
          name: 'Sports',
          budget: '500'
        }
      ]
    }
  ]);
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:3000');
});