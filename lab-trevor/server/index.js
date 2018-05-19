let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

app.get('*', (req, res) => {
  res.send([
    {
      id: '12324gafh4335rgf',
      timestamp: `${new Date()}`,
      name: 'Food',
      budget: 600
    }
  ]);
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log('http://localhost:3000');
});