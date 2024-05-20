const userQueries = {
    selectByEmail: 'select u.email, u.password, u.activo, r.codigo, r.nombre from usuarios u join roles r on u.rolID = r.rolID WHERE u.email = ?;',
}

export default userQueries;