const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
const port = 3001;
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'base4mesestmo'
});
connection.connect((err) => {
    if (err) {
        console.error('No se puedo conectr a la BD', err);
        return;
    }
    console.log('conexion exitosa');
});
app.listen(port, () => {
    console.log('servidor escuchando mediante el puerto', port)
});

//VISUALIZAR AREAS TMO
app.get('/area', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_areas()', (err, results) => {
        if (err) {
            console.error('Error al obtener las areas:', err);
            res.status(500).json({ error: 'Error al obtener las areas' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR AREAS MAQUINAS TMO
app.get('/areaMaquina', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_areas_maquinado()', (err, results) => {
        if (err) {
            console.error('Error al obtener las areas de maquinado:', err);
            res.status(500).json({ error: 'Error al obtener las areas de maquinado' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR BITACORA GALVANIZADO TMO
app.get('/bitacora', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_bitacora()', (err, results) => {
        if (err) {
            console.error('Error al obtener las bitacoras:', err);
            res.status(500).json({ error: 'Error al obtener las bitacoras' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR CLIENTE TMO
app.get('/cliente', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_cliente()', (err, results) => {
        if (err) {
            console.error('Error al obtener los clientes:', err);
            res.status(500).json({ error: 'Error al obtener los clientes' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR COMPRA TMO
app.get('/compra', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_compra()', (err, results) => {
        if (err) {
            console.error('Error al obtener las compras:', err);
            res.status(500).json({ error: 'Error al obtener las compras' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR CONTROL PRODUCCION TMO
app.get('/controlProduccion', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_control_produccion()', (err, results) => {
        if (err) {
            console.error('Error al obtener el control de produccion:', err);
            res.status(500).json({ error: 'Error al obtener el control de produccion' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR COORDENADAS TMO
app.get('/coordenadas', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_coordenadas()', (err, results) => {
        if (err) {
            console.error('Error al obtener las coordenadas:', err);
            res.status(500).json({ error: 'Error al obtener las coordenadas' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR DETALLE COMPRA TMO
app.get('/detalleCompra', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_detalle_compra()', (err, results) => {
        if (err) {
            console.error('Error al obtener el detalle de compra:', err);
            res.status(500).json({ error: 'Error al obtener el detalle de compra' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR DETALLE ORDEN PRODUCCION TMO
app.get('/detalleOrdenProduccion', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_detalle_orden_produccion()', (err, results) => {
        if (err) {
            console.error('Error al obtener el detalle de orden de producción:', err);
            res.status(500).json({ error: 'Error al obtener el detalle de orden de producción' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR DETALLE RECETA TMO
app.get('/detalleReceta', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_detalle_receta()', (err, results) => {
        if (err) {
            console.error('Error al obtener el detalle receta:', err);
            res.status(500).json({ error: 'Error al obtener el detalle receta' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR ENTRADA SALIDA PRODUCTO TMO
app.get('/entSalMateria', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_entrada_salida_materia()', (err, results) => {
        if (err) {
            console.error('Error al obtener la entrada o salida de materia:', err);
            res.status(500).json({ error: 'Error al obtener la entrada o salida de materia' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR ENTRADA SALIDA PRODUCTO TMO
app.get('/entSalProducto', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_detalle_receta()', (err, results) => {
        if (err) {
            console.error('Error al obtener la entrada o salida de producto:', err);
            res.status(500).json({ error: 'Error al obtener la entrada o salida de producto' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR HERRAMNETALES TMO
app.get('/herramentales', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_herramentales()', (err, results) => {
        if (err) {
            console.error('Error al obtener herramentales:', err);
            res.status(500).json({ error: 'Error al obtener herramentales' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR HORA TURNO TMO
app.get('/horaTurno', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_hora_turno()', (err, results) => {
        if (err) {
            console.error('Error al obtener la hora turno:', err);
            res.status(500).json({ error: 'Error al obtener la hora turno' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR LIBERACION DE PIEZA TMO
app.get('/liberacion', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_liberacion_pieza()', (err, results) => {
        if (err) {
            console.error('Error al obtener la liberacion de pieza:', err);
            res.status(500).json({ error: 'Error al obtener la liberacion de pieza' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR MAQUINADO TMO
app.get('/maquinado', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_maquinado()', (err, results) => {
        if (err) {
            console.error('Error al obtener el maquinado:', err);
            res.status(500).json({ error: 'Error al obtener el maquinado' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR MATERIA PRIMA TMO
app.get('/materiaPrima', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_materia_prima()', (err, results) => {
        if (err) {
            console.error('Error al obtener la materia prima:', err);
            res.status(500).json({ error: 'Error al obtener la materia prima' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR ORDEN DE TRABAJO HERRAMENTALES TMO
app.get('/ordenHerramentales', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_orden_herramentales()', (err, results) => {
        if (err) {
            console.error('Error al obtener la orden de trabajo de herramentales', err);
            res.status(500).json({ error: 'Error al obtener la orden trabajo de herramentales' });
            return;
        }
        res.json(results);
    });
});


//VISUALIZAR ORDEN DE TRABAJO MANTENIMIENTO TMO
app.get('/ordenMantenimiento', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_orden_mantenimiento()', (err, results) => {
        if (err) {
            console.error('Error al obtener la orden de trabajo de mantenimiento:', err);
            res.status(500).json({ error: 'Error al obtener la orden de trabajo de mantenimiento' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR ORDEN DE TRABAJO PRODUCCION TMO
app.get('/ordenProduccion', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_orden_produccion()', (err, results) => {
        if (err) {
            console.error('Error al obtener la orden de trabajo de producción:', err);
            res.status(500).json({ error: 'Error al obtener la orden de trabajo de producción' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR PAGOS TMO
app.get('/pagos', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_pagos()', (err, results) => {
        if (err) {
            console.error('Error al obtener los pagos:', err);
            res.status(500).json({ error: 'Error al obtener los pagos' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR PERSONAL TMO
app.get('/personal', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_personal()', (err, results) => {
        if (err) {
            console.error('Error al obtener el personal:', err);
            res.status(500).json({ error: 'Error al obtener el personal' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR PRODUCTOS TMO
app.get('/productos', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_productos()', (err, results) => {
        if (err) {
            console.error('Error al obtener los productos:', err);
            res.status(500).json({ error: 'Error al obtener los productos' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR PROVEEDOR TMO
app.get('/proveedor', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_proveedor()', (err, results) => {
        if (err) {
            console.error('Error al obtener los proveedores:', err);
            res.status(500).json({ error: 'Error al obtener los proveedores' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR REALACION DE PROVEEDOR Y MATERIA TMO
app.get('/proveedorMateria', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_proveedor_materia()', (err, results) => {
        if (err) {
            console.error('Error al obtener la relacion entre proveedores y materia:', err);
            res.status(500).json({ error: 'Error al obtener la relacion entre proveedores y materia' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR RECETA PRODUCTOS TMO
app.get('/receta', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_receta()', (err, results) => {
        if (err) {
            console.error('Error al obtener las recetas de productos:', err);
            res.status(500).json({ error: 'Error al obtener las recetas de productos' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR RECOLECCIONES TMO
app.get('/recoleccion', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_recolecciones()', (err, results) => {
        if (err) {
            console.error('Error al obtener las recolecciones:', err);
            res.status(500).json({ error: 'Error al obtener las recolecciones' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR REMISIONES TMO
app.get('/remision', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_remisiones()', (err, results) => {
        if (err) {
            console.error('Error al obtener las remisiones:', err);
            res.status(500).json({ error: 'Error al obtener las remisiones' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR ROLES TMO
app.get('/roles', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_rol()', (err, results) => {
        if (err) {
            console.error('Error al obtener los roles :', err);
            res.status(500).json({ error: 'Error al obtener los roles' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR SEGUIMIENTO DE ORDENES TMO
app.get('/seguimientoOrdenes', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_seguimiento_ordenes()', (err, results) => {
        if (err) {
            console.error('Error al obtener el seguimiento de ordenes:', err);
            res.status(500).json({ error: 'Error al obtener el seguimiento de ordenes' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR SUBAREAS TMO
app.get('/subarea', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_subarea()', (err, results) => {
        if (err) {
            console.error('Error al obtener las subareas:', err);
            res.status(500).json({ error: 'Error al obtener las subareas' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR UNIDADES TMO
app.get('/unidades', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_unidades()', (err, results) => {
        if (err) {
            console.error('Error al obtener las unidades:', err);
            res.status(500).json({ error: 'Error al obtener las unidades' });
            return;
        }
        res.json(results);
    });
});

//VISUALIZAR VERIFICACION DE PROCESOS TMO
app.get('/verificacionProcesos', (req, res) => { //obtener datos req lo que manda le usuario res lo que se muestra (se manda front)
    connection.query('CALL sp_visualizar_verificacion_procesos()', (err, results) => {
        if (err) {
            console.error('Error al obtener la verificacion de procesos:', err);
            res.status(500).json({ error: 'Error al obtener la verificacion de procesos' });
            return;
        }
        res.json(results);
    });
});

//INSERTAR AREA TMO
app.post('/insertarAreas', (req, res) => {

    const { NOMBRE_AREA, DESCRIPCION } = req.body;

    connection.query('CALL sp_insertar_areas(?, ?)', [NOMBRE_AREA, DESCRIPCION], (err, results) => {
        if (err) {
            console.error('Error al insertar áreas:', err);
            res.status(500).json({ error: 'Error al insertar áreas' });
            return;
        }
        res.json({ message: 'Áreas insertadas exitosamente' });
    });
});

// INSERTAR AREA DE MAQUINADO
app.post('/insertarAreaMaquinado', (req, res) => {
    const { NOMBRE_AREA_MAQUINADO, DESCRIPCION_AREA_MAQUINADO, STATUS_MAQUINADO } = req.body;

    console.log('Datos recibidos:', {
        NOMBRE_AREA_MAQUINADO,
        DESCRIPCION_AREA_MAQUINADO,
        STATUS_MAQUINADO
    });

    const sql = `CALL sp_insertar_area_maquinado(?, ?, ?)`;

    connection.query(
        sql,
        [NOMBRE_AREA_MAQUINADO, DESCRIPCION_AREA_MAQUINADO, STATUS_MAQUINADO],
        (err, results) => {
            if (err) {
                console.error('Error al llamar al procedimiento almacenado:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
                return;
            }
            res.json({ message: 'Areas de maquino insertados correctamente' });
        }
    );
});

//INSERTAR ROL TMO
app.post('/insertarRol', (req, res) => {

    const { NOMBRE_ROL, DESCRIPCION } = req.body;

    connection.query('CALL sp_insertar_rol(?, ?)', [NOMBRE_ROL, DESCRIPCION], (err, results) => {
        if (err) {
            console.error('Error al insertar áreas:', err);
            res.status(500).json({ error: 'Error al insertar rol' });
            return;
        }
        res.json({ message: 'Rol insertado exitosamente' });
    });
});

//INSERTAR HERRAMENTALES TMO
app.post('/insertarHerramental', (req, res) => {
    const {
        CODIGO_HERRAMENTAL,
        NOMBRE_HERRAMENTAL,
        DESCRIPCION_HERRAMENTAL,
        TIPO_HERRAMENTAL,
        STATUS_HERRAMENTAL
    } = req.body;

    console.log('Datos recibidos:', {
        CODIGO_HERRAMENTAL,
        NOMBRE_HERRAMENTAL,
        DESCRIPCION_HERRAMENTAL,
        TIPO_HERRAMENTAL,
        STATUS_HERRAMENTAL
    });

    const sql = 'CALL sp_insertar_herramental(?, ?, ?, ?, ?)';

    connection.query(
        sql,
        [
            CODIGO_HERRAMENTAL,
            NOMBRE_HERRAMENTAL,
            DESCRIPCION_HERRAMENTAL,
            TIPO_HERRAMENTAL,
            STATUS_HERRAMENTAL
        ],
        (err, results) => {
            if (err) {
                console.error('Error al llamar al procedimiento almacenado:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
                return;
            }

            res.json({ message: 'Herramental insertado correctamente' });
        }
    );
});

// INSERTAR HORA TURNO TMO
app.post('/insertarHoraTurno', (req, res) => {
    const { HORA_ENTRADA, HORA_SALIDA } = req.body;

    console.log('Datos recibidos:', {
        HORA_ENTRADA,
        HORA_SALIDA
    });

    const sql = 'CALL sp_insertar_hora_turno(?, ?)';

    connection.query(
        sql,
        [HORA_ENTRADA, HORA_SALIDA],
        (err, results) => {
            if (err) {
                console.error('Error al llamar al procedimiento almacenado:', err);
                res.status(500).json({ error: 'Error interno del servidor' });

                re
                return;
            }

            res.json({ message: 'Hora turno insertado correctamente' });
        }
    );
});

// INSERTAR PRODUCTOS TMO
app.post('/insertarProducto', (req, res) => {
    const {  CODIGO_PRODUCTO,
        NOMBRE,
        DESCRIPCION,
        CANTIDAD,
        STOCK_MIN,
        STOCK_MAX } = req.body;

        console.log('Datos recibidos:', {
        CODIGO_PRODUCTO,
        NOMBRE,
        DESCRIPCION,
        CANTIDAD,
        STOCK_MIN,
        STOCK_MAX
        });
    connection.query('CALL sp_insertar_producto(?, ?, ?, ?, ?, ?)', [ CODIGO_PRODUCTO,
        NOMBRE,
        DESCRIPCION,
        CANTIDAD,
        STOCK_MIN,
        STOCK_MAX], (err, results) => {
        if (err) {
            console.error('Error al insertar producto:', err);
            res.status(500).json({ error: 'Error al insertar producto' });
            return;
        }
        res.json({ message: 'Producto insertado exitosamente' });
    });
});

//INSERTAR PROVEEDOR
app.post('/insertarProveedor', (req, res) => {
    const {
        NOMBRE_PROVEEDOR,
        RAZON_SOCIAL,
        DIRECCION,
        TELEFONO,
        EMAIL,
        STATUS_PROVEEDOR
    } = req.body;

    console.log('Datos recibidos:', {
        NOMBRE_PROVEEDOR,
        RAZON_SOCIAL,
        DIRECCION,
        TELEFONO,
        EMAIL,
        STATUS_PROVEEDOR
    });

    connection.query( 'CALL sp_insertar_proveedor(?, ?, ?, ?, ?, ?)',[NOMBRE_PROVEEDOR, RAZON_SOCIAL, DIRECCION, TELEFONO, EMAIL, STATUS_PROVEEDOR],
        (err, results) => {
            if (err) {
                console.error('Error al insertar proveedor:', err);
                res.status(500).json({ error: 'Error al insertar proveedor' });
                return;
            }
            res.json({ message: 'Proveedor insertado exitosamente' });
        }
    );
});

//INSERTAR UNIDADES
app.post('/insertarUnidades', (req, res) => {
    const {
        NOMBRE_UNIDADES,
        ABREVIATURA_UNIDADES
    } = req.body;

    console.log('Datos recibidos:', {
        NOMBRE_UNIDADES,
        ABREVIATURA_UNIDADES
    });


    connection.query('CALL sp_insertar_unidades(?, ?)', [NOMBRE_UNIDADES, ABREVIATURA_UNIDADES], (err, results) => {
            if (err) {
                console.error('Error al insertar unidades:', err);
                res.status(500).json({ error: 'Error al insertar unidades' });
                return;
            }
            res.json({ message: 'Unidades insertadas exitosamente' });
        }
    );
});
