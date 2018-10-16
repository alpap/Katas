


// using callbacks

function loadImageCallback(url , callback){
	let image= new Image()

	image.onload= function(){
		callback(null, image)
	}

	image.onerror= function() {
		let message = 'Could not load image at '+ url
		callback(new Error(message))
	}

	image.src=url
}

loadImageCallback('images/cat.png',(error,img)=>{
	let imgElement= document.createElement("img")
	imgElement.src= img.src
	document.body.appendChild(imgElement)
})


// using promises
function loadImagePromised(url){
	return new Promise((resolve, reject)=>{
		let image= new Image()

		image.onload= function(){
			resolve(image)
		}

		image.onerror= function() {
			let message = 'Could not load image at '+ url
			reject(new Error(message))
		}
		image.src=url
	})
}

//original
// loadImagePromised('images/cat.png')
// .then(img=>{
// 	let imgElement= document.createElement("img")
// 	imgElement.src= img.src
// 	document.body.appendChild(imgElement)
// })

let addImage=(img)=>{
	let imgElement= document.createElement("img")
	imgElement.src= img.src
	document.body.appendChild(imgElement)
}

Promise.all([
	loadImagePromised('images/cat1.png'),
	loadImagePromised('images/cat2.png'),
	loadImagePromised('images/cat3.png'),
]).then((images)=>{
	 images.forEach(image => addImage(image));
}).catch((error)=>{
	console.log(error)
})