import React from "react"

export default function Home() {
    return (
        <div class="home">
            <div class="filha">
                
                <h2>Seja bem vindo a Bellas Viagens</h2> 
                <h3>Qual será seu próximo destino?</h3>

                <form >
                <input type="text" placeholder="Destino" />
                <button class="vamos">Vamos lá</button>
                </form>
            </div>
            
        </div>
    );
}