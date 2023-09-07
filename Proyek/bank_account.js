// created by Najmul Azka

let run = window.prompt(`ketik 'run'`);
if (run == 'run' || run == 'Run' || run == 'RUN') {
    let saldo = 1000000;

    function tampilSaldo() {
        alert(`Saldo anda : ${saldo}`);
        console.log(`Saldo : ${saldo}`);
    }
    tampilSaldo();

    let inputSetor = `Masukan jumlah tunai yang akan disetor. contoh : 5000`;
    let inputTarik = `Masukan jumlah tunai yang akan ditarik. contoh : 5000`;
    let inputProses = `Ketik 'tarik' untuk melakukan proses tarik tunai
Ketik 'setor' untuk melakukan proses setor tunai
Ketik 'cancle' untuk membatalkan`;

    proses(window.prompt(`${inputProses}`));
    function proses(params) {
        if (params == 'setor' || params == 'Setor' || params == 'SETOR') {
            tambahSaldo(window.prompt(`${inputSetor}`));
        } else if (params == 'tarik' || params == 'Tarik' || params == 'TARIK') {
            kurangiSaldo(window.prompt(`${inputTarik}`));
        } else if (params == 'cancle' || params == 'Cancle' || params == 'CANCLE') {
        } else if (params == null) {
            return;
        } else {
            alert('Silahkan ketik sesuai kriteria yang sudah ditentukan');
            proses(window.prompt(`${inputProses}`));
        }
    }

    function tambahSaldo(params) {
        if (params == '') {
            tambahSaldo(window.prompt(`${inputSetor}`));
        } else if (params == null) {
            return;
        } else if (Number(params)) {
            alert('TRANSAKSI SETOR TUNAI BERHASIL');
            saldo += +params;
            console.log(`Setor tunai : ${params}`);
            tampilSaldo();
            proses(window.prompt(`${inputProses}`));
        } else if (params != Number) {
            alert('TRANSAKSI GAGAL!!! ANDA HANYA DAPAT MENGINPUTKAN ANGKA');
            tambahSaldo(window.prompt(`${inputSetor}`));
        }
    }

    function kurangiSaldo(params) {
        if (params == '') {
            kurangiSaldo(window.prompt(`${inputTarik}`));
        } else if (params == null) {
            return;
        } else if (Number(params)) {
            saldo -= +params;
            if (saldo >= 0) {
                alert(`TRANSAKSI TARIK TUNAI BERHASIL`);
                console.log(`Tarik tunai : ${params}`);
                tampilSaldo();
                proses(window.prompt(`${inputProses}`));
            } else {
                alert(`TRANSAKSI GAGAL!!! SALDO TIDAK CUKUP`);
                proses(window.prompt(`${inputProses}`));
            }
        } else if (params != Number) {
            alert('TRANSAKSI GAGAL!!! ANDA HANYA DAPAT MENGINPUTKAN ANGKA');
            kurangiSaldo(window.prompt(`${inputTarik}`));
        }
    }
}
