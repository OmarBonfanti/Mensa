var Cdb = require("mysql");

var connetion = mysql.createConnection({
    host: "??????",
    user: "??????",
    password: "???????"
  });

  connetion.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE user (mail VARCHAR(255) PRIMARY KEY, password VARCHAR(255), name VARCHAR(255),surname VARCHAR(255), allergy VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created"); 
    });
    var sql2 = "CREATE TABLE menu (piatti VARCHAR(255),OrderID int PRIMARY KEY UNIVUQUE, cost int)";
    con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    // decidere come gestire 
    var sql3 = "CREATE TABLE booking (FOREIGN KEY mail VARCHAR(255) REFERENCES user(mail) ,FOREIGN KEY OrderID int REFERENCES menu(OrderID) , FOREIGN KEY cost int REFERENCES menu(OrderID))";
    con.query(sql3, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

var SingUP = function(intput) {
     
}  ;