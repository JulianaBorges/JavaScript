
        var meuVetor = [00,01,01,01,01,01]
        var soma = 0;
            for (var i = 0; i < meuVetor.length; i++){
                soma += meuVetor[i];
                console.log(soma)
            }
   
        var meuVetor = [01,02,03,04,05,06];
        var soma = 0;
        var i = 0;
        while(i < meuVetor.length){
            soma += meuVetor [i];
            i++
            console.log(soma)
            }
   
        var meuVetor = ["A",00,"oi",true,80,"$"];
        Vetoroganizado = meuVetor.sort();
        console.log(Vetoroganizado)

        var meuVetor = [ "Juliana","16/04/1990"]
        console.log(meuVetor.join(" | "))

        var meuVetor = ["Juliana", " 16/04/90", " juuh.borges@hotmail.com","(11) 96465-0632"];
        console.log( meuVetor.pop())
            meuVetorPop = meuVetor.pop();
            console.log (meuVetorPop) 

        var meuVetor = ["Juliana", " 16/04/90", " juuh.borges@hotmail.com","(11) 96465-0632"];
            console.log( meuVetor.push("(11) 96465-0000"))
