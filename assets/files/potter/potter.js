console.log("Script loaded successfully ");

Java.perform(function () {
	console.log("Inside java perform function");
	var main_activity = Java.use("com.hz.potter.MainActivity");

	main_activity.onCreate.overload("android.os.Bundle").implementation = function (var_0) {
		console.log(this.r.value);
		this.r.value = 0;
		console.log(this.r.value);
		var ret = this.onCreate.overload("android.os.Bundle").call(this, var_0);
	}
});

//frida -H 192.168.1.41 -f com.hz.potter -l potter.js --no-pause
