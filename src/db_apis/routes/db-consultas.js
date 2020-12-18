const express = require('express');
const conexion = require('./db-connection');

var router = express.Router();

/* Acceso a la base de datos (Metodos) */

/*###########################################*/
/* Consulta maetros */
router.get('/maestros', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM docente` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    });
});
router.get('/maestro/:id', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM docente WHERE id_doce = ${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});
router.post('/addDocente', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    const { nombre, direccion, tel, turno, salario, depa } = req.body;
    res.json({
        message: 'A funcionado👋',
        nombre,
        direccion,
        tel,
        turno,
        salario,
        depa,
    });
    /* let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try { */
    /* Eso es lo que cambiara nuestra consulta */
    /* const result = await connection.execute(
        `SELECT * FROM docente WHERE id_doce = ${id}` // bind value for :id
    ); */
    /* Imprimiros por consola y en el navegador */
    /* console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) { */
    /* Por si hay errores */
    /* console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally { */
    /* Esto debe hacerse siempre para que se cierre la conexión */
    /* if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    }); */
});
/*###########################################*/
/* Para los alumnos */
router.get('/alumnos', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM alumno` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    });
});
/* Unico Alumno */
router.get('/alumno/:id', async(req, res) => {
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM alumno WHERE id_al = ${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});


/*###########################################*/
/* Para las materias */
router.get('/materias', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM materia` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    });
});
/*###########################################*/
router.get('/materia/:id', async(req, res) => {
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM materia WHERE id_mat = ${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});

/*###########################################*/
/* Para las calificaciones */
router.get('/calificaciones', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM calif` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    });
});
/*###########################################*/
router.get('/calificacion/:id', async(req, res) => {
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT * FROM calif WHERE id_calif = ${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});
/*###########################################*/
/* Para la calificacacion */
router.get('/calif/primer', async(req, res) => {
    /* Hacemos el then por la promesa que nos devuelve. Esto se debera hacer en cada cosnulta */
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT calif1 FROM calif` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    });
});
/*###########################################*/
router.get('/calif/segunda', async(req, res) => {
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT calif2 FROM calif` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});

/*###########################################*/
router.get('/calif/tercera', async(req, res) => {
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT calif3 FROM calif` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});
/*###########################################*/
/*###########################################*/
router.get('/al/calif/primera/:id', async(req, res) => {
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT calif1 FROM calif WHERE id_calif_al=${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});
/*###########################################*/
/*###########################################*/
router.get('/al/calif/segunda/:id', async(req, res) => {
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT calif2 FROM calif WHERE id_calif_al=${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});
/*###########################################*/
/*###########################################*/
router.get('/al/calif/tercera/:id', async(req, res) => {
    let id = req.params.id;
    let exitoConectado = conexion.conexionBD();
    exitoConectado.then(async(connection) => {
        try {
            /* Eso es lo que cambiara nuestra consulta */
            const result = await connection.execute(
                `SELECT calif3 FROM calif WHERE id_calif_al=${id}` // bind value for :id
            );
            /* Imprimiros por consola y en el navegador */
            console.log(result.rows);
            res.send(JSON.stringify(result.rows));
        } catch (err) {
            /* Por si hay errores */
            console.error(err);
            res.json({
                message: 'Lo sentimos a habido un error 👋',
            });
        } finally {
            /* Esto debe hacerse siempre para que se cierre la conexión */
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    console.error(err);
                    res.send(JSON.stringify(err));
                }
            }
        }
    });
});
/*###########################################*/
module.exports = router;