
const cuentaContabilidad = value => value.cuenta.replace(/-/g,"").substring(0,10).concat('0000000000','3');
const cuentaConGuiones =  value => value.cuenta.substring(0,12);

exports.insertCompra =  value => `INSERT INTO Proveedores (Num_Cta,Proveedor,RFC,Direccion,Telefono,Email) VALUES ('${cuentaContabilidad(value)}','${value.razonSocial}','${value.rfc}','','','')`;
exports.insertBitacora = value => `INSERT INTO BitacoraDigital.Proveedores (Cuenta,Proveedor,RFC,Direccion,Telefono,Email) VALUES ('${cuentaContabilidad(value)}','${value.razonSocial}','${value.rfc}','','','')`;
exports.insertWincaja = value => `INSERT INTO Proveedores (Proveedor,Nombre,RFC,Representante) VALUES ('${cuentaConGuiones(value)}','${value.razonSocial}','${value.rfc}','${value.razonSocial}')`;

exports.selectCompra = value => `SELECT Num_Cta FROM Proveedores WHERE Num_Cta = '${cuentaContabilidad(value)}'`;
exports.selectBitacora = value => `SELECT Cuenta FROM BitacoraDigital.Proveedores WHERE Cuenta = '${cuentaContabilidad(value)}'`;
exports.selectWincaja = value => `SELECT Proveedor FROM Proveedores WHERE Proveedor = '${cuentaConGuiones(value)}'`;