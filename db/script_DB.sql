CREATE DATABASE db_tienda_ct;
USE db_tienda_ct;

	CREATE TABLE clientes(
		id_cliente integer NOT NULL,
		nombre char(50),
		fecha date,
		contrasena char(50),
		correo char(50),
		PRIMARY KEY (id_cliente)
	);

	CREATE TABLE productos(
		codigo_producto integer NOT NULL,
		tipo_producto char(50),
		precio float,
		nombre_producto char(50),
		cantidad_bodega integer,
		PRIMARY KEY (codigo_producto)
	);

CREATE TABLE compra(
    id_compra integer,
    nombre_courrier char(50),
    compania_tarjeta char(50),
    monto_pagar float,
    id_cliente integer NOT NULL,
    codigo_producto integer NOT NULL,
    PRIMARY KEY (id_compra),
		FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
		FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto)
);

-- Tablas de las relaciones entre entidades
CREATE TABLE compra_realizada(
    id_cliente integer,
    codigo_producto integer,
    id_compra integer,
	monto_pagar float,
	cantidad_comprada integer,
    PRIMARY KEY (id_cliente,codigo_producto,id_compra),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto),
    FOREIGN KEY (id_compra) REFERENCES compra(id_compra)
);