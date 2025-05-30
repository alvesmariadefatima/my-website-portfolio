import React from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.containerFotoPerfil} id="home">
                <img src="/foto-perfil.png" alt="Foto de Perfil de Maria de Fátima" />
                <div className={styles.textosApresentacao}>
                    <p className={styles.txtapresentacao}>Olá, eu sou</p>
                    <h1 className={styles.txtapresentacao}>Maria de Fátima</h1>
                    <p className={styles.txtapresentacao}>sou Desenvolvedora Full-Stack & UX Designer</p>
                </div>
            </div>

            <div>
                <h2 className={styles.txtTecnologias}>Tecnologias</h2>
                <div className={styles.containerTecnologias}>
                    <img src="/html-logo.png" alt="Logotipo HTML 5" className={styles.logo} />
                    <img src="/css-logo.png" alt="Logotipo CSS 3" className={styles.logo} />
                    <img src="/js-logo.png" alt="Logotipo JavaScript" className={styles.logo} />
                    <img src="/tailwindcss-logo.png" alt="Logotipo Tailwind CSS" className={styles.logo} />
                    <img src="/python-logo.png" alt="Logotipo Python" className={styles.logo} />
                    <img src="/git-logo.png" alt="Logotipo Git" className={styles.logo} />
                    <img src="/figma-logo.png" alt="Logotipo Figma" className={styles.logo} />
                    <img src="/node.js-logo.png" alt="Logotipo Node.js" className={styles.logo} />
                    <img src="/reactjs-logo.png" alt="Logotipo React JS" className={styles.logo} />
                    <img src="/bootstrap-logo.png" alt="Logotipo Bootstrap" className={styles.logo} />
                    <img src="/wordpress-logo.png" alt="Logotipo Wordpress" className={styles.logo} />
                    <img src="/logotipo-php.png" alt="Logotipo PHP" className={styles.logo} />
                    <img src="/logotipo-mariadb.png" alt="Logotipo MariaDB" className={styles.logo} />
                </div>
            </div>

            <div className={styles.containerSobreMim} id="sobre">
                <h2 className={styles.tituloSobreMim}>Sobre mim</h2>
                <p className={styles.txtSobreMim}>Olá! Meu nome é Maria de Fátima, sou uma Desenvolvedora Full-Stack e UX Designer apaixonada por criar experiências digitais incríveis. Durante minha trajetória acadêmica e profissional, tenho me dedicado a dominar as mais recentes tecnologias e práticas para oferecer soluções web eficientes e visualmente impactantes.</p>

                <p className={styles.txtSobreMim}>Atualmente, sou acadêmica em Ciência da Computação no Centro Universitário de Maceió - UNIMA, onde estou aprimorando meu conhecimento teórico e prático para complementar minha experiência profissional.</p>

                <p className={styles.txtSobreMim}>Minha jornada no mundo da programação começou com uma curiosidade sobre como as interfaces web funcionam e como posso contribuir para torná-las melhores. Desde então, mergulhei em linguagens e tecnologias como HTML, CSS e JavaScript, React, Bootstrap, Tailwind, Node.js, Wordpress e PHP aprimorando minhas habilidades para criar designs responsivos, acessíveis e ricos em interatividade.</p>

                <p className={styles.txtSobreMim}>Com o passar do tempo, trabalhei em uma variedade de projetos desafiadores. Minha abordagem centrada no usuário me permite entender as necessidades do cliente e traduzi-las em soluções digitais que não apenas atendem, mas também excedem suas expectativas.</p>

                <p className={styles.txtSobreMim}>Estou constantemente buscando aprender e me atualizar, acompanhando de perto as tendências e as melhores práticas do setor. Além disso, sou uma defensora entusiasta da colaboração e da comunicação transparente, acreditando que o trabalho em equipe é essencial para o sucesso de qualquer projeto.</p>

                <p className={styles.txtSobreMim}>Estou empolgada para continuar crescendo como Desenvolvedora Front-end & UX Designer e enfrentar novos desafios que me permitam expandir meu conhecimento e criar experiências web cada vez mais impressionantes. Se você está em busca de um profissional comprometido, criativo e orientado para resultados, estou pronta para fazer parte do seu próximo projeto.</p>
            </div>

            <h2 className={styles.tituloProjetos}>Projetos relevantes que desenvolvi</h2>

            <div className={styles.containerProjetos}>
                <section className={styles.sectionProjetos} id="projetos">
                    <img className={styles.imgProjetos} src="/logotipo-projeto-apala.png" alt='Logotipo Site Projeto Apala' />
                    <a className={styles.linksProjetos} href="https://www.figma.com/file/PgUcxT5rTJdb7TgVJjgkrV/Site-Projeto-Apala?type=design&node-id=0%3A1&mode=design&t=lGPSahzdcjO6xqrT-1" target='_blank'><p>Site Projeto Apala</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-hotsteak.png" alt='Logotipo Hot Steak' />
                    <a className={styles.linksProjetos} href="https://github.com/Hamburgueria-Hot-Steak/hot-steak" target='_blank'><p>Hot Steak</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-ladylife.png" alt='Logotipo LadyLife' />
                    <a className={styles.linksProjetos} href="https://www.figma.com/file/MztxmSVifE2JdFXa4RTfdX/G-Tech-(Copy)?type=design&mode=design&t=lGPSahzdcjO6xqrT-1" target='_blank'><p>LadyLife</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgDoeAgora} src="/logotipo-doe-agora.png" alt='Logotipo Doe Agora' />
                    <a className={styles.linksProjetos} href="https://github.com/Nerds-da-Computacao" target='_blank'><p>Doe Agora</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-vlog-do-garfield.png" alt='Logotipo Vlog do Garfield' />
                    <a className={styles.linksProjetos} href="https://github.com/alvesmariadefatima/vlog-do-garfield" target='_blank'><p>Vlog do Garfield</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-my-instagram.png" alt='Logotipo My Instagram' />
                    <a className={styles.linksProjetos} href="https://github.com/alvesmariadefatima/my-instagram" target='_blank'><p>My Instagram</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-adote-um-pet.png" alt='Logotipo Adote um Pet' />
                    <a className={styles.linksProjetos} href="https://adoteumpet2.wordpress.com/" target='_blank'><p>Adote um Pet</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-cafe-harmonia.png" alt='Logotipo Café Harmonia' />
                    <a className={styles.linksProjetos} href="https://cafeharmonia.wordpress.com/" target='_blank'><p>Café Harmonia</p></a>
                </section>

                <section className={styles.sectionProjetos}>
                    <img className={styles.imgProjetos} src="/logotipo-dialogo-online.png" alt='Logotipo Diálogo Online' />
                    <a className={styles.linksProjetos} href="https://github.com/alvesmariadefatima/dialogo-online" target='_blank'><p>Diálogo Online</p></a>
                </section>
            </div>

            <div className={styles.containerContatos} id="contatos">
                <h2 className={styles.tituloContatos}>Contatos</h2>
                <p className={styles.txtcontatos}>Me siga nas redes sociais caso queira trocar alguma ideia comigo ou alguma oportunidade: </p>

                <section className={styles.secaoContatos}>
                    <a href="https://github.com/alvesmariadefatima" target='_blank'><img src="/logotipo-github.png" alt="Logotipo Github" /></a>
                    <a href="https://www.linkedin.com/in/maria-de-fatima-alves/" target='_blank'><img src="/logotipo-linkedin.png" alt="Logotipo Linkedin" /></a>
                    <a href="https://www.instagram.com/alvesmariadefatima.nunes/" target='_blank'><img src="/logotipo-instagram.png" alt="Logotipo Instagram" /></a>
                    <a href="https://mnunesalves334.wixsite.com/maria-de-fatima" target='_blank'><img src="/logotipo-wix.png" alt="Logotipo Wix" /></a>
                    <a href="https://api.whatsapp.com/send/?phone=558298343593&text&type=phone_number&app_absent=0" target='_blank'><img src="/logotipo-whatsapp.png" alt="Logotipo Whatsapp" /></a>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
