'use strict';

const homiesModel = require('./schema.js');

exports.handler = async (event) => {
  console.log(event);
 

  try {
    const byeHomie = await homiesModel.query("id").exec();
    
    const byebye = byeHomie.delete();
    
    const data = JSON.stringify(byebye);

    return {
      statusCode: 410, 
      body: data
    }



  } catch(e) {
    return {
      statusCode: 500, 
      body: e.message
    }
  }
}