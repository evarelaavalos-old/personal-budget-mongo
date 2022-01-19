const transactions = require('./transactions.mongo');

async function getBalance() {
    const queryResult = await transactions.aggregate([
        {
            $group: {
                _id: null,
                balance: { 
                    $sum: {
                        $cond: {
                            if: { $eq: ['$type', 1] },
                            then: { $abs: '$amount' },
                            else: { $multiply: [{ $abs: '$amount' }, -1]},
                        },
                    },
                },
            },
        },
    ]);

    // returns: [ { '_id': null, balance: 118200.98 } ]

    return ({
        balance: queryResult[0].balance,
    });
}

module.exports = {
    getBalance,
}