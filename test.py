import requests

payload = {
	"jsonrpc": "2.0",
	"id": 3,
	"method": "getTokenAccountsByOwner",
	"params": [
		"2Gqjosh4saBRQwNAz7APn2UtnQXMfZa23ZyMggbbZCQD",
		{
			"mint": "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"
		},
		{
			"encoding": "jsonParsed"
		}
	]
}

headers = {
    "Content-Type": "application/json"
}

#resp = requests.post("https://api.devnet.solana.com", headers = headers, json = payload)
#print(resp.json()["result"]["value"][0]["account"])

payloadAcc =  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
      "3WUo5THnH21vCbuYmMTgvqMHDgYvLQm4KDKRkRFwUCuo",
      {
        "encoding": "base64"
      }
    ]
}
resp = requests.post("https://api.devnet.solana.com", headers = headers, json = payloadAcc)
print(resp.text)
print(resp.json()["result"]["value"]["data"])
