const bcrypt = require('bcryptjs');
const User = require('./models/user');
const Account = require('./models/account');
const Card = require('./models/card');

class FakeDb {

    constructor(){
        this.users = [
            {
                firstName: "Hall",
                lastName: "Delacruz",
                username: "halldelacruz26",
                email: "hall.delacruz@ad.com",
                password: "hall"
            },
            {
                firstName: "Brigitte",
                lastName: "Ferguson",
                username: "brigitteferguson16",
                email: "brigitte.ferguson@adipisicing.com",
                password: "brigitte"
            },
            {
                firstName: "Kristina",
                lastName: "Smith",
                username: "kristinasmith5",
                email: "kristina.smith@duis.com",
                password: "kristina"
            },
            {
                firstName: "Cleveland",
                lastName: "Lynn",
                username: "clevelandlynn36",
                email: "cleveland.lynn@laboris.com",
                password: "cleveland"
            },
            {
                firstName: "Mcfarland",
                lastName: "Moss",
                username: "mcfarlandmoss36",
                email: "mcfarland.moss@eu.com",
                password: "mcfarland"
            },
            {
                firstName: "Gay",
                lastName: "Oneil",
                username: "gayoneil61",
                email: "gay.oneil@excepteur.com",
                password: "gay"
            },
            {
                firstName: "Elise",
                lastName: "Stafford",
                username: "elisestafford69",
                email: "elise.stafford@labore.com",
                password: "elise"
            },
            {
                firstName: "Stokes",
                lastName: "Gay",
                username: "stokesgay25",
                email: "stokes.gay@cupidatat.com",
                password: "stokes"
            },
            {
                firstName: "Blake",
                lastName: "Riggs",
                username: "blakeriggs57",
                email: "blake.riggs@in.com",
                password: "blake"
            },
            {
                firstName: "Flynn",
                lastName: "Bridges",
                username: "flynnbridges38",
                email: "flynn.bridges@enim.com",
                password: "flynn"
            },
            {
                firstName: "Lorna",
                lastName: "Orr",
                username: "lornaorr93",
                email: "lorna.orr@excepteur.com",
                password: "lorna"
            },
            {
                firstName: "Wade",
                lastName: "Briggs",
                username: "wadebriggs5",
                email: "wade.briggs@irure.com",
                password: "wade"
            },
            {
                firstName: "Elena",
                lastName: "Odonnell",
                username: "elenaodonnell15",
                email: "elena.odonnell@esse.com",
                password: "elena"
            },
            {
                firstName: "Townsend",
                lastName: "Cote",
                username: "townsendcote82",
                email: "townsend.cote@anim.com",
                password: "townsend"
            },
            {
                firstName: "Callahan",
                lastName: "Hancock",
                username: "callahanhancock38",
                email: "callahan.hancock@laborum.com",
                password: "callahan"
            }
        ];
        this.accounts = [
            {
                startDate: "Fri Oct 03 1980 20:06:35 GMT+0000 (UTC)",
                branch: "Moraida",
                plan: "payroll",
                balance: "551293.23"
            },
            {
                startDate: "Tue Aug 24 1993 00:10:09 GMT+0000 (UTC)",
                branch: "Trucksville",
                plan: "saving",
                balance: "1657615.66"
            },
            {
                startDate: "Mon Oct 15 1984 16:16:33 GMT+0000 (UTC)",
                branch: "Graball",
                plan: "saving",
                balance: "599528.61"
            },
            {
                startDate: "Tue Sep 09 2008 23:35:53 GMT+0000 (UTC)",
                branch: "Stewartville",
                plan: "payroll",
                balance: "591681.22"
            },
            {
                startDate: "Sun Dec 03 2006 05:44:16 GMT+0000 (UTC)",
                branch: "Joppa",
                plan: "payroll",
                balance: "1430080.61"
            },
            {
                startDate: "Sat Aug 22 2015 21:27:46 GMT+0000 (UTC)",
                branch: "Tyhee",
                plan: "payroll",
                balance: "195126.33"
            },
            {
                startDate: "Fri Jul 10 1981 03:29:59 GMT+0000 (UTC)",
                branch: "Monument",
                plan: "saving",
                balance: "578077.61"
            },
            {
                startDate: "Thu Mar 27 2014 20:14:55 GMT+0000 (UTC)",
                branch: "Ferney",
                plan: "checking",
                balance: "1383482.52"
            },
            {
                startDate: "Sun Aug 27 2006 10:03:58 GMT+0000 (UTC)",
                branch: "Fredericktown",
                plan: "saving",
                balance: "1121468.85"
            },
            {
                startDate: "Thu Jul 20 1995 20:21:59 GMT+0000 (UTC)",
                branch: "Grandview",
                plan: "checking",
                balance: "315907.75"
            },
            {
                startDate: "Mon Apr 13 1992 01:57:41 GMT+0000 (UTC)",
                branch: "Caron",
                plan: "checking",
                balance: "208073.24"
            },
            {
                startDate: "Thu Nov 03 1977 17:47:45 GMT+0000 (UTC)",
                branch: "Kansas",
                plan: "saving",
                balance: "113253.74"
            },
            {
                startDate: "Sat Sep 13 2008 08:59:49 GMT+0000 (UTC)",
                branch: "Leeper",
                plan: "saving",
                balance: "1475464.13"
            },
            {
                startDate: "Mon May 05 2003 16:48:47 GMT+0000 (UTC)",
                branch: "Madrid",
                plan: "payroll",
                balance: "1730173.29"
            },
            {
                startDate: "Sun Oct 03 2010 08:17:52 GMT+0000 (UTC)",
                branch: "Crayne",
                plan: "saving",
                balance: "1744114.27"
            },
            {
                startDate: "Sun Mar 08 1998 05:02:54 GMT+0000 (UTC)",
                branch: "Dale",
                plan: "checking",
                balance: "544966.59"
            },
            {
                startDate: "Tue Jun 08 2004 17:47:58 GMT+0000 (UTC)",
                branch: "Wyano",
                plan: "saving",
                balance: "1447886.02"
            },
            {
                startDate: "Tue Jan 10 2006 10:34:17 GMT+0000 (UTC)",
                branch: "Caledonia",
                plan: "checking",
                balance: "100120.64"
            },
            {
                startDate: "Mon Aug 25 1986 11:33:42 GMT+0000 (UTC)",
                branch: "Florence",
                plan: "payroll",
                balance: "1334108.67"
            },
            {
                startDate: "Sun Feb 03 1980 21:08:11 GMT+0000 (UTC)",
                branch: "Gadsden",
                plan: "payroll",
                balance: "1776868.14"
            },
            {
                startDate: "Thu Sep 14 1972 08:34:33 GMT+0000 (UTC)",
                branch: "Herbster",
                plan: "saving",
                balance: "77196.01"
            },
            {
                startDate: "Fri Jul 28 2017 09:20:05 GMT+0000 (UTC)",
                branch: "Fruitdale",
                plan: "checking",
                balance: "698919.98"
            },
            {
                startDate: "Fri Aug 24 2007 03:50:36 GMT+0000 (UTC)",
                branch: "Frank",
                plan: "checking",
                balance: "1672294.17"
            }
        ];
        this.cards = [
            {
                number: 5342627604112295,
                cvc: "106",
                type: "prepaid"
            },
            {
                number: 5602385495799814,
                cvc: "280",
                type: "prepaid"
            },
            {
                number: 5945087036820261,
                cvc: "818",
                type: "prepaid"
            },
            {
                number: 5868036862992770,
                cvc: "965",
                type: "credit"
            },
            {
                number: 5863326603108772,
                cvc: "413",
                type: "prepaid"
            },
            {
                number: 5301744690446281,
                cvc: "520",
                type: "prepaid"
            },
            {
                number: 5070204644893538,
                cvc: "263",
                type: "prepaid"
            },
            {
                number: 5097324766769207,
                cvc: "306",
                type: "prepaid"
            },
            {
                number: 5374898214810940,
                cvc: "546",
                type: "prepaid"
            },
            {
                number: 5365357495137773,
                cvc: "548",
                type: "credit"
            },
            {
                number: 5693745613583621,
                cvc: "299",
                type: "debit"
            },
            {
                number: 5317664391382239,
                cvc: "694",
                type: "prepaid"
            },
            {
                number: 5752403314237824,
                cvc: "220",
                type: "debit"
            },
            {
                number: 5559025079948064,
                cvc: "614",
                type: "prepaid"
            },
            {
                number: 5631581211486829,
                cvc: "673",
                type: "prepaid"
            },
            {
                number: 5265628213836403,
                cvc: "119",
                type: "debit"
            },
            {
                number: 5465867147673176,
                cvc: "856",
                type: "debit"
            },
            {
                number: 5397716142808509,
                cvc: "707",
                type: "prepaid"
            },
            {
                number: 5711984936843047,
                cvc: "561",
                type: "credit"
            },
            {
                number: 5055363225443026,
                cvc: "947",
                type: "debit"
            }
        ];
    }
    async cleanDb(){
        await User.deleteMany({});
        await Card.deleteMany({});
        await Account.deleteMany({});
    }

    // async fillOneUser(){
    //     await this.users.forEach(async (user, i, arr) => {
    //         const {password, ...rest} = user;
    //         const hash = await bcrypt.hash(password, 10);
    //         const record = new User({
    //             password: hash,
    //             ...rest,
    //         });
    //         await record.save(async err => {
    //             if(!err && i === arr.length-1) await this.addCards();
    //         });
    //     });
    //
    //     await this.cards.forEach(async (card,i,arr) => {
    //         const record = new Card(card);
    //         await record.save(async)
    //     })
    //
    //     const user = await User.findOne({username:'kristinasmith5'});
    //     const card1 = await Card.
    // }



    async addUsers(){
        await this.users.forEach(async (user, i, arr) => {
            const {password, ...rest} = user;
            const hash = await bcrypt.hash(password, 10);
            const record = new User({
                password: hash,
                ...rest,
            });
            await record.save(async err => {
                if(!err && i === arr.length-1) await this.addCards();
            });
        });
    }

    async addCards(){
        let users = await User.find({});
        await this.cards.forEach(async (card,i, arr) => {
            let userIndex = i % users.length;
            const record = new Card({
                owner: users[userIndex],
                ...card,
            });

            try {
                await record.save();
                users[userIndex].cards.push(record);
                await users[userIndex].save(async err =>{
                    if(!err && i === arr.length-1) await this.addAccounts();
                });
            }catch(err) {
                if(err.name !== 'ParallelSaveError') console.log(err);
            }
        });
    }

    async addAccounts(){
        let users = await User.find({});
        let cards = await Card.find({})
        await this.accounts.forEach(async (account,i, arr) => {
            let userIndex = i%users.length;
            let cardIndex = i%cards.length;
            const record = new Account({
                ...account,
                owner: users[userIndex],
                card: cards[cardIndex],
            });
            try{
                await record.save();
                users[userIndex].accounts.push(record);
                await users[userIndex].save();
            }catch(err) {
                if(err.name !== 'ParallelSaveError') console.log(err);
            }finally {
                try{
                    cards[cardIndex].accounts.push(record);
                    await cards[cardIndex].save();
                }catch(err){
                    if(err.name !== 'ParallelSaveError') console.log(err);
                }
            }
            
        });
        
    }

    async fillDb() {
        // await this.cleanDb();
        // await this.addUsers();
    }
}

module.exports = FakeDb;
