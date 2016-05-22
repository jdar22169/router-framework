const http = require('http');
const Router = require('./lib/router.js');
const router = new Router();

router.get('/pokemon', (req,res) => {
  res.send('Here is a pikachu');
});

router.post('/pokemon', (req,res) => {
  // let msg= '';
  // req.on('data', (data) => {
  //   msg = data.toString();
  // })
  // req.on('end', () => {
  //   res.send(msg);
  // })
  res.send('Added new pokemon');
});

router.delete('/pokemon', (req,res) => {
  res.send('Deleted pokemon')
})

router.put('/pokemon', (req,res) => {
  res.send('You updated pokemon list');
})

router.patch('/pokemon',(req,res) => {
  res.send('You modified the pokemon list');
})

http.createServer(router.route())
  .listen(3000, () => console.log('listening on 3000'))
