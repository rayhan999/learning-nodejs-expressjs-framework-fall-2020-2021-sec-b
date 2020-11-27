const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		console.log(sql);
		db.getResults(sql, function(results){
			if(results.length > 0){
				// callback(true);
			//	console.log("validate hoise");
				callback(results[0]);
				//console.log(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from cars where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	getByUname: function(uname, callback){
		var sql = "select * from admin where username='"+uname+"'";
		console.log(sql);
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from admin";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	getprofile: function(uname, callback){
		var sql = "select * from admin where username='"+uname+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into admin VALUES ('', '"+user.username+"' , '"+user.name+"' , '"+user.email+"', '"+user.mobile+"', '"+user.address+"', '"+user.image+"'   )";
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update cars set name='"+user.model+"' , description='"+user.description+"', rentprice='"+user.rentprice+"' , type='"+user.type+"', image='"+user.image+"' where id = '"+user.id+"'";
		console.log(sql);
		db.execute(sql,function(status){
			callback(status)
		});

	},
	delete: function(id, callback){
		var sql = "DELETE FROM cars WHERE id = '"+id+"'";
		console.log(sql);
		db.execute(sql,function(status){
			callback(status);
		});
    },
    search: function(user, callback){
        var sql = "SELECT username FROM user WHERE username = '"+user.search+"'";

		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	}
}