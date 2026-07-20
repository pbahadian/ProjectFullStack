// indice que va a recoger los distintos modelos y los va a exportar 

// la caperta collections contiene un archivo .js por cada ddbb que conecte

// ej. frutasModel, peopleModel, todosModel

const models = {
    Products : require('./collections/productsModel'),
}

module.exports = models