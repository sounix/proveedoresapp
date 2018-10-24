
const { proveedor } = require('./config/parametros');
const { 
    insertCompra, insertBitacora, insertWincaja,
    selectCompra, selectBitacora, selectWincaja
} = require('./tools/generador');

console.log(selectWincaja(proveedor));
