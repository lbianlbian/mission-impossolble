var solanaWeb3 = require("@solana/web3.js");
var connection = new solanaWeb3.Connection("https://api.devnet.solana.com");
var keypair = xxxxxxx;

async function sendTx(){
    var msg = "instructions are bundled";
    var tx = new solanaWeb3.Transaction();
    tx.add(new solanaWeb3.TransactionInstruction({
        keys: [{ pubkey: keypair.publicKey, isSigner: true, isWritable: true }],
          data: Buffer.from(msg, "utf-8"),
          programId: new solanaWeb3.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
    }));
    var transferParams = {
        fromPubkey: keypair.publicKey,
        lamports: 1000,
        toPubkey: new solanaWeb3.PublicKey("DpGzaEHHKnaepTDeLuRn76vgyfvCHVJkaH9S9zpPcB9V")
    };
    var sendSol = solanaWeb3.SystemProgram.transfer(transferParams);
    tx.add(sendSol);

    var seed = "abcd";
    var createAccParams = {
        basePubkey: keypair.publicKey,
        fromPubkey: keypair.publicKey,
        lamports: 1000000000,
        newAccountPubkey: await solanaWeb3.PublicKey.createWithSeed(keypair.publicKey, seed, solanaWeb3.SystemProgram.programId),
        programId: solanaWeb3.SystemProgram.programId,
        seed: seed,
        space: 1,
    };
    var createAcc = solanaWeb3.SystemProgram.createAccountWithSeed(createAccParams);
    tx.add(createAcc);

    let result = await connection.sendTransaction( tx, [keypair]);
    console.log(result);
}

sendTx();
