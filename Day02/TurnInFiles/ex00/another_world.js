// This exercise wants you to replace space(s) and tab(s) with a single space.
function singleSpace(string){
	console.log(string.trim().replace(/\s+/g,' '));
}

if (process.argv[2])
	singleSpace(process.argv[2]);

// For Test
//singleSpace(" This has	tabs		and multiple      spaces   here");