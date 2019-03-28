// This exercise wants you to replace space(s) and tab(s) with a single space.
if (process.argv[2])
	console.log(process.argv[2].trim().replace(/\s+\t+/g,' '));