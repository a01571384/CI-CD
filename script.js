document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  alert(`Registrado: ${nombre} (${email})`);
});
