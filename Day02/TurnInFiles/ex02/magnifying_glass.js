// Titles of Links and text between <a> tags should be changed to Uppercase.

if (process.argv[2]){
	var fs = require('fs');
	var text = fs.readFileSync(process.argv[2],'utf8')

	//Replace title="*"
	result = text.replace(/<a.*?title="(.*?)">/g, function getSubstring(match){
		return(match.replace(/[^title="]*".*/, function getUpper(submatch){
			return(submatch = submatch.toUpperCase());
		}));
	})

	//Replace words between <a></a>
	result = result.replace(/<a.*</g, function getSubstring(match){
		return(match.replace(/(>)(.*?)(<)/, function getUpper(submatch){
			return(submatch = submatch.toUpperCase());
		}));
	})

console.log(result)
}

