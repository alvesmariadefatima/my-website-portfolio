import React from 'react';
import styles from "./Footer.module.css";

function Footer () {
    return (
        <footer className="bg-white">
            <div className={styles.containerRodape}>
                <img src="/favicon.png" alt="Favicon de uma flor" />
            </div>
            <p className={styles.txtRodape}>Desenvolvido por <a className={styles.linkGithubRodape} href="https://github.com/alvesmariadefatima" target="_blank">Maria de Fátima Nunes Alves</a></p>
        </footer>
    );
}

export default Footer;