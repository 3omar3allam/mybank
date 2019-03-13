const Account = require('../models/account');
const Card = require('../models/card');

exports.getAccounts = async (req, res) => {
    try{
        const accounts = await Account.find({owner:req.userData.userId}, {plan:1, balance:1});
        res.status(200).json({
            message: 'Success!',
            accounts: accounts.map(account => {
                const {_id, ...rest} = account.toObject();
                return {
                    id: _id,
                    ...rest,
                };
            })
        });
    } catch(err){
        console.log(err);
        res.status(404).json({
           message: 'Failed to fetch accounts',
        });
    }
};

exports.getAccountDetails = async (req, res) => {
    try{
        const accountDetails = await Account.findOne(
            {_id: req.params.id, owner: req.userData.userId},
            {_id: 0, startDate: 1, branch: 1, balance: 1, card: 1}
        );
        if(!accountDetails) {
            res.status(401).json({
                message: 'Unauthorized!'
            });
            return;
        }
        res.status(200).json({
            message: 'Success!',
            account: accountDetails,
        });
    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to fetch accounts',
        });
    }
};

exports.getCards = async (req, res) => {
    try{
        const cards = await Card.find(
            {owner:req.userData.userId},
            {number:1, type: 1}
        );
        res.status(200).json({
            message: 'Success!',
            cards: cards.map(card => {
                const {_id, ...rest} = card.toObject();
                return {
                    id: _id,
                    ...rest,
                };
            })
        });
    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to fetch accounts',
        });
    }
};

exports.getCardDetails = async (req, res) => {
    try{
        const cardDetails = await Card.findOne(
            {_id: req.params.id, owner: req.userData.userId},
            {_id: 0, expireDate: 1, cvc: 1, accounts: 1}
        );
        if(!cardDetails) {
            res.status(401).json({
                message: 'Unauthorized!'
            });
            return;
        }
        res.status(200).json({
            message: 'Success!',
            account: cardDetails,
        });
    } catch(err){
        console.log(err);
        res.status(404).json({
            message: 'Failed to fetch accounts',
        });
    }
};
