let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

app.get('*', (req, res) => {
  res.send([
    {
      id: '123fdsa987poi',
      timestamp: `${new Date()}`,
      name: 'Sports',
      budget: 500
    }
  ]);
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:3000');
});