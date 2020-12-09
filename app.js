let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let fin = ['.us', '.net']
for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            for (var l = 0; l < fin.length; l++) {
                var nombrecom2 = pronoun[i] + adj[j] + noun[k] + fin[l];
                console.log(nombrecom2);
            }
        }
    }
}

