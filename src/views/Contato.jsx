import React from "react"

export default function Contato() {
    return (
        <div class="formulario1"> 
             <h2>
            Quer saber mais sobre outros pacotes de viagens incríveis?
            </h2>
            <h3>
            Deixe seu e-mail e receba nossa newllister.
            </h3>

            <div class="formulario2">
            <label for="nome"> Nome: </label> <br />
            <input id="nome" type="text" /><br />

            <label for="email"> Email:</label><br />
            <input id="email" type="email" /><br />

            <label for="telefone">Telefone:</label><br />
            <input id="telefone" type="number" /><br />

             <button id="botaoEnviar">Enviar</button><br />
            </div>
        </div>
    );
}