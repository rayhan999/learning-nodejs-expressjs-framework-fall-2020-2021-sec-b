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
		var sql = "select * from member where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from member";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	insert: function(user, callback){
		var sql = "insert into member VALUES ('', '"+user.username+"' , '' , '', '', '', '', '' )";
		
		console.log(sql);

		db.execute(sql, function(status){
			console.log("exeute done");
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
		var sql = "DELETE FROM member WHERE id = '"+id+"'";
		console.log(sql);
		db.execute(sql,function(status){
			callback(status);
		});
	}
}