import './Fatura.css';

const Fatura = () => {
    return (
      <div>
            <section className="o-header">
                <header>Distopia da Logistica</header>
            </section>
            <section className="o-aside">
                <aside> 
                    <button>Positivo</button>
                    <button>Negativo</button>
                    <button>Análise</button>
                    <button>Limpar</button>
                </aside>
            </section>

            <section  className="o-main">
                <main>
                <div className="corpo">
                    <label for="nome">Digite o nome</label>
                    <label for="numero">Digite o valor</label>
                    <label for="motivo">Digite o motivo</label>
                    <input type="text" id='nome' placeholder="Nome"/>
                    <input type="text" id='numero' placeholder="Numero"/>
                    <input type="text" id='motivo' placeholder="Motivo"/>
                </div>
                </main>
                <button id="esp" onclick="dados()">cadastrar</button>
            </section>
            

            <section className="o-footer">
                <footer>Informações</footer>
                <div className="div-footer">
                    <p>Telefone</p>
                    <p>WhatsApp</p>
                    <p>Facebook</p>
                    <p>Trabalhe conosco</p>
                    <p>Informações da empresa</p>
                    <p>Fale conosco</p>
                </div>
            </section>
      </div>  
    );
};

export default Fatura;