
this.id = "sads";
const testerObj = {
	
	
	func1: function(){
		console.log("f:",this);
	},
	
	func2:() => { console.log("func2",this)}
	
};

testerObj.func1();
testerObj.func2();