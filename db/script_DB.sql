CREATE DATABASE db_tienda_ct;
USE db_tienda_ct;


	CREATE TABLE clientes(
		id_cliente integer NOT NULL AUTO_INCREMENT,
		nombre char(50),
		fecha date,
		contrasena char(50),
		correo char(50),
		PRIMARY KEY (id_cliente)
	);

	CREATE TABLE rol(
		tipo_usuario char(10),
		PRIMARY KEY (tipo_usuario)
	);

	CREATE TABLE productos(
		codigo_producto integer NOT NULL AUTO_INCREMENT,
		precio float,
		nombre_producto char(50),
		cantidad_bodega integer,
		descripcion_producto char(200),
		imagen char(255),
		PRIMARY KEY (codigo_producto)
	);

	CREATE TABLE compra(
		id_compra integer,
		nombre_courrier char(50),
		compania_tarjeta char(50),
		total_pagar float,
		PRIMARY KEY (id_compra)
	);
    
    CREATE TABLE catalogo_carrito(
		codigo_producto integer,
        nombre_producto char(50),
        precio float
	);

-- Tablas de las relaciones entre entidades
CREATE TABLE asignacion_rol(
    tipo_usuario char(10),
	id_cliente integer,
	PRIMARY KEY (tipo_usuario,id_cliente),
	FOREIGN KEY (tipo_usuario) REFERENCES rol(tipo_usuario),
	FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE compra_cliente(
	id_cliente integer,
	id_compra integer NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id_cliente,id_compra),
	FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
	FOREIGN KEY (id_compra) REFERENCES compra(id_compra)
);

CREATE TABLE carrito(
	id_cliente integer,
	codigo_producto integer,
	cantidad_producto integer,
	PRIMARY KEY (id_cliente,codigo_producto),
	FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
	FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto)
);

INSERT INTO rol (`tipo_usuario`) VALUES ('admin');
INSERT INTO rol (`tipo_usuario`) VALUES ('cliente');
INSERT INTO clientes (`nombre`,`fecha`,`contrasena`,`correo`) VALUES ('admin','2000-01-01','admin','admin@gmail.com');
INSERT INTO asignacion_rol (`tipo_usuario`,`id_cliente`) VALUES ('admin',1);