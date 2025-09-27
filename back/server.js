const express = require('express')
const app = express()
const port = 3001

const cors = require("cors");
app.use(cors());
app.use(express.json());

const admin = require("firebase-admin");
const serviceAccount = require('./hokie-hub-firebase-adminsdk-fbsvc-4bd57a41c5.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hokie-hub-default-rtdb.firebaseio.com"
});

const db = admin.database();


app.get('/reviews', (req, res) => {
  const location = req.query.location;
  console.log(location);

  db.ref('/Dining Halls/' + location).once('value').then((snapshot) => {
    const data = snapshot.val();
    const arr = Object.values(data);
    console.log(arr);
    res.send(arr);
  });
})

app.post('/addReview', (req, res) => {
  const body = req.body;

  const location = body.location;
  const review = body.review;

  db.ref(type + '/' + location + '/').once('value').then((snapshot) => {
    const reviewID = Object.keys(snapshot.val()).length;

    db.ref('Dining Halls/' + location + '/review' + reviewID).update(review);
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})