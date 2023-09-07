class BankAccount {
    constructor(saldo = 0) {
        this.saldo = saldo;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            if (typeof amount != 'number') amount = Number(amount);
            if (isNaN(amount)) return reject('value salah');

            setTimeout(() => {
                if (amount <= 0) return reject('Deposit harus lebih dari 0');

                this.saldo += amount;
                // if (amount > 0) return resolve(`Deposit : Rp${amount} berhasil`);
                return resolve(`Deposit : Rp${amount} berhasil`);
            }, 2000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            if (typeof amount != 'number') amount = Number(amount);
            if (isNaN(amount)) return reject('value salah');

            setTimeout(() => {
                if (amount <= 0) return reject('Withdraw harus lebih dari 0');
                if (amount > this.saldo) return reject('Maaf saldo tidak cukup');

                this.saldo -= amount;
                return resolve(`Withdraw : Rp${amount} berhasil`);
            }, 2000);
        });
    }
}

async function main() {
    try {
        let user1 = new BankAccount();
        // let result1 = await user1.deposit(10000);
        // console.log(result1);
        // console.log(user1);

        // result1 = await user1.deposit(2000);
        // console.log(result1);
        // console.log(user1);

        // result1 = await user1.deposit(3000);
        // console.log(result1);
        // console.log(user1);

        // result1 = await user1.withdraw(4000);
        // console.log(result1);
        // console.log(user1);

        // result1 = await user1.withdraw(9000);
        // console.log(result1);
        // console.log(user1);

        let repeat = true;
        do {
            let menu = Number(
                window.prompt(`Pilih Transaksi
            (1) Deposit
            (2) Withdraw`)
            );

            switch (menu) {
                case 1:
                    let deposit = Number(window.prompt('Input jumlah deposit'));
                    console.log(await user1.deposit(deposit));
                    console.log(user1);
                    break;
                case 2:
                    let withdraw = Number(window.prompt('Input jumlah withdraw'));
                    console.log(await user1.withdraw(withdraw));
                    console.log(user1);
                    break;
                default:
                    alert('Menu tidak tersedia');
                    break;
            }

            repeat = confirm('Transaksi lagi?');
        } while (repeat);
    } catch (err) {
        console.log(err);
    }
}

main();
