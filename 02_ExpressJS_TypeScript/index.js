express = require('express')
app = express()

app.set('port', 1337)

app.listen(
  app.get('port'),
  () => console.log(`Server listening on ${app.get('port')}`)
)

app.get(
  '/hello/:name',
  (req, res) => res.render('hello.ejs' , {name: req.params.name} )
)

app.post('/', (req, res) => {
  // POST
})

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app
  .put('/', function (req, res) {
    // PUT
  })

  .delete('/', (req, res) => {
    // DELETE
  })