const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from verifiysubscriber where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from verifiysubscriber";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	insert: function(supAdmin, callback){
		var sql = "insert into supadmin VALUES ('', '"+supAdmin.name+"' , '"+supAdmin.mobile+"' , '"+supAdmin.email+"', '"+supAdmin.gender+"' , '"+supAdmin.address+"' )";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update user set username='"+user.username+"' , password='"+user.password+"' , type='"+user.type+"' where id = '"+user.id+"'";
		db.execute(sql,function(status){
			callback(status)
		});

	},
	delete: function(id, callback){
		var sql = "DELETE FROM verifiysubscriber WHERE id = '"+id+"'";
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