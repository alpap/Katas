
function domainName(url){
	return url.replace(/(http|https):\/\//gi,'').replace(/www./gi,'').replace(/\..*/,'')
}

console.log(domainName("http://github.com/carbonfive/raygun") );
console.log(domainName("http://www.zombie-bites.com") );
console.log(domainName("https://www.cnet.com"))
console.log(domainName("www.xakep.ru"))



function otherdomainName(url) {

url = url.toString().replace('https://', '').replace('http://', '').replace('www.', '');

return url.split('.')[0];
}

function otherdomainName(url){
return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}

function otherdomainName(url){
	return url.replace(/.+\/\/|www.|\..+/g, '')
}

function otherdomainName(url){
	return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }