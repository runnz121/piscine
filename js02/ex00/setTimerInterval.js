export const setTimer = (callback, interval) => {
	let count = 0;
	const times = setInterval(function continues() {
		if(!callback(count)){
			clearTimeout(times);
		}else{
			setInterval(continues, interval);
		}
		count += 1;
	}, interval);
}
