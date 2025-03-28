import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Esta linha cria uma instância do Express, que será o núcleo da nossa aplicação web.
const app = express();
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});