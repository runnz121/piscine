export const setTimer = (callback, interval) => {
	let count = 0;
	const times = setTimeout(function continues() {
		if(!callback(count)){
			clearTimeout(times);
		}else{
			setTimeout(continues, interval);
		}
		count += 1;
	}, interval);
}
