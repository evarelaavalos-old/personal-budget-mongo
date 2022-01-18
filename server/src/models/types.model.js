const types = require('./types.mongo');

async function loadTypesData() {
    const data = [
        {
            id: 1,
            name: 'Ingreso', // Income
        },
        {
            id: 2,
            name: 'Egreso', // Expense
        },
    ]

    const promises = data.map(async (type) => storeType(type));

    Promise.all(promises);
}

async function storeType(type) {
    try {
        await types.updateOne({
            id: type.id,
        }, type, {
            upsert: true,
        })
    } catch (err) {
        console.error(`Could not save type ${err}`);
    }
}

async function getAllTypes() {
    return await types.find({}, { '_id': 0, '__v': 0 });
}

module.exports = {
    loadTypesData,
    getAllTypes,
};
