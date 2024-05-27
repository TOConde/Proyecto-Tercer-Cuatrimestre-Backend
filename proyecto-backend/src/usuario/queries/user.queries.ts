const userQueries = {
    selectByEmail: 'select u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre from usuarios u join roles r on u.rolID = r.rolID WHERE u.email = ?;',
    selectAll: 'select * from usuarios;',
}

export default userQueries;