document.addEventListener("DOMContentLoaded", () => {


    const pix = document.getElementById("pix");

    if (pix) {
        pix.textContent = CONFIG.pix;
    }



    function criarPresentes(categoria, idLista) {


        const lista = document.getElementById(idLista);


        if (!lista) return;



        PRESENTES
        .filter(presente => presente.categoria === categoria)
        .forEach(presente => {


            const card = document.createElement("div");

            card.className = "card";


            card.innerHTML = `

                <h3>${presente.nome}</h3>

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

                <strong>${presente.nome}</strong>

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





    const fechar = document.getElementById("fechar");


    if (fechar) {

        fechar.onclick = () => {

            document.getElementById("modal")
            .style.display = "none";

        };

    }


});
