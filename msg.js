var solanaWeb3 = require("@solana/web3.js");
var connection = new solanaWeb3.Connection("https://api.devnet.solana.com");
var keypair = solanaWeb3.Keypair.fromSecretKey(Buffer.from([97,227,245,152,41,2,254,152,42,199,71,100,124,141,11,27,198,134,254,87,167,149,139,235,126,56,212,72,75,62,114,117,177,178,238,101,125,48,244,134,246,71,175,139,248,88,211,114,73,194,199,40,21,4,184,240,250,22,199,48,69,133,197,131]));

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