import React from 'react';
import styles from './Navbar.module.css'; // Importe o arquivo de estilos

function Navbar() {
    return (
        <nav className="bg-white">
            <div className={styles.containerNavbar}>
                <div className={styles.containerFavicon}>
                    <img src="/favicon.png" alt="Favicon de uma flor" />
                </div>

                <div className={styles.containerNome}>
                    <p>Maria de Fátima Nunes Alves</p>
                </div>

                    <a className={styles.linksNavbar} href="#home">Home</a>
                    <a className={styles.linksNavbar} href="#sobre">Sobre</a>
                    <a className={styles.linksNavbar} href="#projetos">Projetos</a>
                    <a className={styles.linksNavbar} href="#contatos">Contatos</a>
            </div>
        </nav>
    );
}

export default Navbar;
