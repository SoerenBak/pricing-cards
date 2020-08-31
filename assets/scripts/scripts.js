const toggle = document.getElementById('toggle');
const flexx = document.getElementById('flexx');

toggle.addEventListener('change', e => {
	flexx.classList.toggle('show-monthly');
});