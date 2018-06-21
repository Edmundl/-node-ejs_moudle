const ejs=require('ejs');

ejs.renderFile('./5.ejs',{name:'zbd',type:'admin',json:{arr:[
	{user:'blue',pass:'123456'},
	{user:'zbd',pass:'123456'}
]}},function(err,data){
	if(err){
		console.log('编译失败');
	}else{
		console.log(data);
	}
});