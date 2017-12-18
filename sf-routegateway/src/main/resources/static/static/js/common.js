exports.Common = {
	compareVersion(template, compare){
	    var tplEach = template.split(".");
		var compareEach = compare.split(".");
		var min = Math.min(tplEach.length, compareEach.length);
		for (var i = 0; i < min; i++) {
			var tem = parseInt(tplEach[i]);
			var com = parseInt(compareEach[i]);
			if (tem > com) {
				return 1;
			} else if (tem < com){
				return -1;
			}
		}
		if(tplEach.length == compareEach.length) {
			return 0;
		}
		return (tplEach.length > compareEach.length ? 1 : -1);
	}
}

