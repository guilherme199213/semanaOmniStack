import React from "react";

import "./style.css";

function Cabecalho({ dev }) {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"> </span>
                </button>
            </nav>
        </header>
    );
}

export default Cabecalho;