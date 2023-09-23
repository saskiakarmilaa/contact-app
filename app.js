const yargs = require('yargs');
const yargsParser = require('yargs-parser');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama:{
            describe:'nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string',
        },
        noHp: {
            describe: 'nomor handphone',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    },
})

    .demandCommand();


// menambahkan menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe: 'menampilkan semua nama & no HP contact',
    handler(){
        contacts.listContact();
    },
});

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama:{
            describe:'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    },
});

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama:{
            describe:'nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    },
});

yargs.parse();


















// const command = process.argv[2];
// if(command === 'add') {

// } else if (command === 'remove') {

// } else if (command === 'list') {

// }

// console.log(yargs.argv);

// const contacts = require('./contacts');

// const main = async () => {
//     const nama = await contacts.pertanyaan('Masukkan nama anda : ');
//     const email = await contacts.pertanyaan('Masukkan email anda : ');
//     const noHp = await contacts.pertanyaan('Masukkan noHp anda : ');

//     contacts.simpanContact (nama, email, noHp);
// };

// main();
