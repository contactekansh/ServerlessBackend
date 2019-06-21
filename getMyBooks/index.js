
var AWS = require('aws-sdk'),
mydocumentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event,context,callback){  

   var params = {
      TableName : process.env.TABLE_NAME
   };   
   mydocumentClient.scan(params,function(err, data){
      if(err){
         callback(err, null);
      }
      else{
         callback(null, {
         statusCode: '200',
         body: JSON.stringify(data.Items),
         headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "*"}
         });
      } 
   });
}


