document.addEventListener('DOMContentLoaded', mostrarUsuarios);

function mostrarUsuarios() {
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.querySelector('#usuarios tbody');
    tbody.innerHTML = ''; // Limpiar el contenido actual

    Users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.nickname}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.telefono}</td>
        `;
        tbody.appendChild(tr);
    });
}
