let connectdb=require("../config/config.js").connectdb;
async function Customer()
{
    try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    	return new Promise((resolve,reject)=>
	{
     db.collection('Customer').find({}).toArray(function(err, result) {
    if (err)
    {
    reject("database query error");
    }
    else
    {
        //console.log(result);
    	resolve(result);
    }
});
	});
}
async function addcustomer(params)
{
    //console.log(params);
    try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        db.collection('Movies').insertOne(params, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve([{"status":0}]);
                                }
    });
    });
}
async function updatecustomer(params)
{
     try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        //console.log(params);
        let id=params.id;

        db.collection('Customer').updateOne({"id":id},{$set:params}, function(err, res) {
                                 if (err)
                                 {
                                  reject("database insertion error");
                                }
                                else{
                                    resolve([{"status":0}]);
                                }
    });
    });
}
async function readcustomer(params)
{
     try{
    var db= await connectdb();
    }catch(err)
    {
        res.send(err);
    }
    return new Promise((resolve,reject)=>
    {
        db.collection('customer').findOne(params.id, function(err, res) {
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
exports.Customer=Customer;
exports.addCustomer=addCustomer;
exports.updateCustomer=this.updateCustomer;
exports.readCustomer=this.readCustomer;