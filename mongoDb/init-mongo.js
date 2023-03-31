db.createUser({
  user: "jeftavares",
  pwd: "010407",
  roles: [
    {
      role: "readWrite",
      db: "my_db",
    },
  ],
});
db.createCollection("test"); //MongoDB creates the database when you first store data in that database
