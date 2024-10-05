let but1 = document.querySelector('.but1')
let but2 = document.querySelector('.but2')
let but3 = document.querySelector('.but3')
let but4 = document.querySelector('.but4')
but1.addEventListener('click', () => {
	let inp1 = parseFloat(document.querySelector('.inp1').value)
	let inp2 = parseFloat(document.querySelector('.inp2').value)
	res = inp1 + inp2
	document.querySelector('.rez').innerHTML = res
})
but2.addEventListener('click', () => {
	let inp1 = parseFloat(document.querySelector('.inp1').value)
	let inp2 = parseFloat(document.querySelector('.inp2').value)
	res = inp1 / inp2
	document.querySelector('.rez').innerHTML = res
})
but3.addEventListener('click', () => {
	let inp1 = parseFloat(document.querySelector('.inp1').value)
	let inp2 = parseFloat(document.querySelector('.inp2').value)
	res = inp1 - inp2
	document.querySelector('.rez').innerHTML = res
})
but4.addEventListener('click', () => {
	let inp1 = parseFloat(document.querySelector('.inp1').value)
	let inp2 = parseFloat(document.querySelector('.inp2').value)
	res = inp1 * inp2
	document.querySelector('.rez').innerHTML = res
})
let img = document.querySelector('img')
img.classList.add('d')
let but5 = document.querySelector('.but5')
but5.addEventListener('click', () => {
	img.classList.toggle('dd')
})