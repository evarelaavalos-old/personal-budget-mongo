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
                            then: { $round: [{ $abs: '$amount' }, 2]},
                            else: { $round: [{ $multiply: [{ $abs: '$amount' }, -1] }, 2]},
                        },
                    },
                },
            },
        },
    ]);

    // returns: [ { '_id': null, balance: 118200.98 } ]

    return ({
        balance: Number(queryResult[0].balance.toFixed(2)),
    });
}

module.exports = {
    getBalance,
}