//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let promise1 = new Promise((resolve,reject) => {
	resolve(images[0].url);
})
let promise2 = new Promise((resolve,reject) => {
	resolve(images[1].url);
})
let promise3 = new Promise((resolve,reject) => {
	resolve(images[2].url);
});

async function display(){
	try{
		let data1 = await promise1;
		let data2 = await promise2;
		let data3 = await promise3;
	document.getElementById("output").innerHTML = 
		`
		<img src = "${data1}">
		<img src = "${data2}">
		<img src = "${data3}">
		`
	}catch(err){
		document.getElementById("output").innerHTML = 
			`
			<p>Failed to load image's URL:${images.url}</p>
			`
	}


}
document.getElementById("download-images-button").addEventListener("click", display);
