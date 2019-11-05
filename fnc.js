//test file with js code 

let url = "test_code_file.js";

// run the function and:
// 1.to get content from file
// 2.cleare it from commentaries
// 3. put cleared content to the new modified file
// 4. load it in download folder
//

function file_get_contents(filename) {
	fetch(filename)
	.then((resp) => resp.text())
	.then(function(data) {
		return data.replace(/(\/\*[\wа-я\'\s\r\n\*]*\*\/)|(\/\/[\wа-я\s\'\;].*)|(\<![\-\-\s\wа-я\>\/]*\>)/ig, "");
	})
	.then(function(data) {
		return data.replace(/\/\*.*?\//gsi, "");
	})
	.then(function(data){
		file_put_contents('test.txt', data)
	})
	;
}



let file_put_contents = function (file_name, data) {
    let a = document.createElement('a');
    a.href = 'data:attachment/txt,%EF%BB%BF' + encodeURI(data);
    a.target = '_blank';
    a.download = 'modified_js_File_' + url;
    a.style.visibility = 'hidden';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
    }, 200);
};

//run the function
file_get_contents(url);
