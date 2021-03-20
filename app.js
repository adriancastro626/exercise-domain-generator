let domain = () => {
    let pronoun = ['the', 'our', 'my', 'their'];
    let adj = ['biggest', 'giant', 'nice', 'cute', 'soft', 'dark', 'small', 'great', 'fantastic', 'little'];
    let noun = ['website', 'cat', 'house', 'watch', 'phone', 'loop', 'food', 'song']
    let domainName = ['com', 'net', 'cr', 'edu', 'net', 'org', 'gov']

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let m = 0; m < domainName.length; m++) {
                    let string = pronoun[i] + adj[j] + noun[k];
                    if (string.includes(domainName[m])) {
                        let newString = string.replace(domainName[m], "")
                        let resultString = newString +'.'+domainName[m]
                        console.log(resultString)
                        } else {
                            let url = pronoun[i] + adj[j] + noun[k] +'.'+ domainName[m]
                            console.log(url)
                        }

                    }
                }
            }
        }
    }
    domain();