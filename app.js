let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


    var final = [];
    for (var i = 0, l = pronoun.length; i < l; i++) {
        for (var j = 0, k = 0, m = adj.length, n = noun.length; j < m; j++) {
            final.push([pronoun[i], adj[j], noun[k]]);
            if (j == m - 1 && k < n - 1) {
                k++;
                j = -1;
            }
        }
    }
    
    console.log(final);
   
