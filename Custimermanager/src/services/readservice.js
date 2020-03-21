let connectdb=require("../config/config.js").connectdb;
async function readCustomer(params)
{
     try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        console.log(params);
        db.collection('Customer').findOne(params.id, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve(res);
                                }
    });
    });
}
exports.readCustomer=readCustomer;