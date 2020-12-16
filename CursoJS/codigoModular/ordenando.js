
        var a = "Olá Maiúsculas";
        var b = "olá Minúsculas";
        var c = "a letras minúsculas";
        var d = "# simbulos";
        var e = "1 números";
        

        if (a < b ){
            alert (a + " vem antes de " + b);
        }
        else{
            alert (a + " vem antes de " + b);
        }
        if (c < d){
            alert (c + " vem antes de " + d);
        }
        else{
            alert (d + " vem antes de " + c);
        }
        if ( c < e){
            alert ( c + " vem antes de " + e);
        }
        else { alert ( e + " vem antes de " + d)
        }

        if ( g.includes("Maria Gabrielly") ) {
            alert("Texto encontrado!");
        }
        else{
            alert("Não encontrado.");
        }

        var texto = "Eu sou mãe da Maria Gabrielly";
         console.log(texto.includes("Maria Gabrielly"))

        var g = "Eu sou mãe da Maria Gabrielly";

        if ( g.includes("Maria Gabrielly") ) {
            alert("Texto encontrado!");
        }
        else{
            alert("Não encontrado.");
        }

        var texto = "Eu sou mãe da Maria Gabrielly";
         console.log(texto.includes("Maria Gabrielly"))

        var texto = "Sou Brasileira";
        var posicao = texto.indexOf ("Brasileira" );
            
        if ( posicao == -1) {
            alert (" Não encontrado.");
            }
        else {
            alert("Texto encontrado na posição " + posicao);
            }

        var nome = "Maria Gabrielly também é chamada de Gabrielly"
        var posicao = nome.lastIndexOf("Gabrielly");

        if (posicao == -1) {
            alert ("Não encontrado.");
        }
        else {
            alert ("Texto encontrado na posição " + posicao);
        } 

        var telefone = "(11) 964650632";
        console.log(telefone.substring(4,10));

        var expressoes = "Essa frase tem a palavra @";
        var palavra = /@/;
        if ( palavra.test ( expressoes)){
            alert ("Confirmado!");
        }
        else { 
             alert ("Email Incorreto")
        }
