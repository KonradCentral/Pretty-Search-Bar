function focusSearch(e) {
	e.currentTarget.querySelector('.search-input').focus()
}

function toggleSearchFocus(e) {
	e.currentTarget.parentElement.parentElement.classList.toggle('focused')
}
function searchClear(e) {
	const searchInput = e.currentTarget.parentElement.querySelector('.search-input')
	searchInput.value = '';
	searchInput.blur()
}

window.addEventListener('load', () => {
	document.querySelectorAll('.search-bar').forEach(el => el.addEventListener('focus', focusSearch))
	document.querySelectorAll('.search-input').forEach(el => el.addEventListener('focus', toggleSearchFocus))
	document.querySelectorAll('.search-input').forEach(el => el.addEventListener('blur', toggleSearchFocus))
	document.querySelectorAll('.search-bar-clear').forEach(el => el.addEventListener('click', searchClear))
})
