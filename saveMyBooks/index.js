
var AWS = require('aws-sdk'),
uuid = require('uuid'),
mydocumentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event,context,callback){  
var params = {
  Item: {
      "bookId" : uuid.v1(),
      "author" : event.authorname,
      "bookName" : event.bookname
  },
  TableName : process.env.TABLE_NAME
};   

mydocumentClient.put(params,function(err, data){
     callback(err,data);
});
}

