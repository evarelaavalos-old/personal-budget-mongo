const transactions = require('./transactions.mongo');
const types = require('./types.mongo');

const DEFAULT_ID = 100;

async function getLatestId() {
    const latestId = await transactions.findOne({}).sort('-id');

    if (!latestId) {
        return DEFAULT_ID;
    }

    return latestId.id + 1;
}

async function upsertTransaction(transaction) {
    if ('type' in transaction) {
        const type = await types.findOne({
            id: transaction.type,
        });
    
        if (!type) {
            throw new Error('No matching type found');
        }
    }

    return await transactions.findOneAndUpdate({
        id: transaction.id,
    }, transaction, {
        upsert: true,
    });
}

async function getAllTransactions() {
    return await transactions.find({}, {
        '_id': 0,
        '__v': 0,
    });
}

async function addNewTransaction(transaction) {
    const newTransaction = {
        id: await getLatestId(),
        ...transaction,
    }

    return await upsertTransaction(newTransaction);
}

async function editTransaction(id, transaction) {
    const updatedTransaction = {
        id,
        ...transaction,
    }

    return await upsertTransaction(updatedTransaction);
}

async function deleteTransaction(id) {
    const queryResult = await transactions.deleteOne({
        id,
    });

    return queryResult?.deletedCount;
}

async function existsTransactionWithId(id) {
    return await transactions.findOne({
        id,
    });
}

module.exports = {
    getAllTransactions,
    addNewTransaction,
    editTransaction,
    deleteTransaction,
    existsTransactionWithId,
};
