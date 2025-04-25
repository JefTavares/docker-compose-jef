db.createUser({
  user: "jeftavares",
  pwd: "12345",
  roles: [
    {
      role: "readWrite",
      db: "webhook_db",
    },
  ],
});
db.createCollection("test"); //MongoDB creates the database when you first store data in that database
