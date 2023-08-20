var solanaWeb3 = require("@solana/web3.js");
var connection = new solanaWeb3.Connection("https://api.devnet.solana.com");
var keypair = xxxxxxxxx;
async function sendmsg(){
    var msg = "Message from EVILORG: Capture The Mini Entity!";
    var tx = new solanaWeb3.Transaction();
    tx.add(new solanaWeb3.TransactionInstruction({
        keys: [{ pubkey: keypair.publicKey, isSigner: true, isWritable: true }],
          data: Buffer.from(msg, "utf-8"),
          programId: new solanaWeb3.PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
    }));
    let result = await connection.sendTransaction( tx, [keypair]);
    console.log(result);
}

sendmsg();
