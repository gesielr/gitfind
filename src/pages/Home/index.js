import React, { useState } from "react";
import HeaderTemp from "../../components/Headertemp";
import Button from "../../components/Button";
import Input from "../../components/Input";
import background from "../../assets/background.png";
import perfil from "../../assets/perfil.png";
import "./styles.css";

const Home = () => {
    const [username, setUsername] = useState(""); // Estado para armazenar o nome de usuário
    const [error, setError] = useState(""); // Estado para mensagens de erro

    const fetchGitHubUser = async () => {
        if (!username.trim()) {
            setError("Por favor, digite um nome de usuário ou URL válido.");
            return;
        }

        setError(""); // Limpa mensagens de erro anteriores

        // Extraindo o nome de usuário do URL, se necessário
        const extractedUsername = username.includes("github.com")
            ? username.split("github.com/")[1].split("/")[0] // Extrai o nome do usuário
            : username;

        try {
            const response = await fetch(`https://api.github.com/users/${extractedUsername}`);
            if (response.ok) {
                const userData = await response.json();
                console.log("Usuário encontrado:", userData); // Exibe os dados encontrados no console
                setError(""); // Limpa mensagens de erro

                // Abrir o perfil do usuário no navegador
                window.open(`https://github.com/${extractedUsername}`, "_blank");
            } else {
                setError("Usuário não encontrado. Verifique o nome ou URL fornecido.");
            }
        } catch (err) {
            setError("Erro ao buscar o usuário. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="home">
            <HeaderTemp />
            
            <div className="main-content">
                
                <div className="conteudo">
                    <img src={background} alt="Background GitHub" className="background" />
                </div>
                <div className="search-bar">
                    <Input
                        placeholder="@usuario ou URL do GitHub"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do input
                    />
                    <Button onClick={fetchGitHubUser}>Buscar</Button>
                </div>
                {error && <p className="error-message">{error}</p>} {/* Exibe a mensagem de erro */}
                <div className="profile">
                    <img src={perfil} alt="Perfil do Usuário" className="profile-picture" />
                    <div className="profile-info">
                        <h2>Pablo Henrique</h2>
                        <p>@pablohdev</p>
                        <p>
                            Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.
                        </p>
                    </div>
                </div>
                <div className="repositories">
                    <h2>Repositórios</h2>
                    <div className="repository-item">
                        <h3>fisiotheapp-challenge</h3>
                        <p>
                            Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.
                        </p>
                    </div>
                    <div className="repository-item">
                        <h3>fisiotheapp-challenge</h3>
                        <p>
                            Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.
                        </p>
                    </div>

                    <div className="repository-item">
                        <h3>fisiotheapp-challenge</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
