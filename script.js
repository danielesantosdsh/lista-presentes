document.addEventListener("DOMContentLoaded", () => {


    // MOSTRAR CHAVE PIX NO MODAL

    document.getElementById("pix").textContent = CONFIG.pix;



    // FUNÇÃO PARA CRIAR OS CARDS

    function criarPresentes(categoria, idLista) {


        const lista = document.getElementById(idLista);


        PRESENTES
        .filter(presente => presente.categoria === categoria)
        .forEach(presente => {


            const card = document.createElement("div");

            card.className = "card";


            card.innerHTML = `

                <h3>
                ${presente.nome}
                </h3>


                <p>
                R$ ${presente.valor}
                </p>


                <button>
                Presentear
                </button>

            `;



            card.querySelector("button")
            .addEventListener("click", () => {


                document.getElementById("presenteSelecionado")
                .innerHTML = `

                Você escolheu:

                <br><br>

                <strong>
                ${presente.nome}
                </strong>

                <br><br>

                Valor:

                <strong>
                R$ ${presente.valor}
                </strong>

                `;



                document.getElementById("modal")
                .style.display = "flex";


            });



            lista.appendChild(card);


        });


    }




    criarPresentes("cozinha", "listaCozinha");

    criarPresentes("quarto", "listaQuarto");

    criarPresentes("sala", "listaSala");

    criarPresentes("banheiro", "listaBanheiro");





    // FECHAR MODAL


    document.getElementById("fechar")
    .onclick = () => {

        document.getElementById("modal")
        .style.display = "none";

    };


});
