const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "src/db/db.json"));
const middlewares = jsonServer.defaults();

// Bind the auth middleware
app.db = router.db; // Assign the database to the app
app.use(middlewares);
app.use(auth);
app.use(router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
