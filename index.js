const express = require("express");
const app = express();
const port = 3000;

// Sinalizar uso de Json
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Word!");
});
app.get("/oi", (req, res) => {
  res.send("Helo Word!");
});

// listar itens
const itens = {
  data: [
    {
      id: "1",
      titulo: "Estrelas além do Tempo",
      capa: "https://m.media-amazon.com/images/I/61IZbZWaZ+L._AC_SX522_.jpg",
      sinopse: "'Estrelas Além do Tempo' é um filme de drama e biografia que conta a história de três matemáticas afro-americanas que trabalharam na NASA nos anos 60. Elas tiveram um papel fundamental no programa espacial dos Estados Unidos e enfrentaram racismo e sexismo na época. O elenco é estrelado por Taraji P. Henson, Octavia Spencer e Janelle Monáe."
    },
    {
      id: "2",
      titulo: "Mãos Talentosas",
      capa: "https://m.media-amazon.com/images/I/61IZbZWaZ+L._AC_SX522_.jpg",
      sinopse: '"Maos Talentosas" é um filme de drama baseado na história real do neurocirurgião Ben Carson, interpretado por Cuba Gooding Jr. O filme mostra sua infância pobre e como sua mãe o incentivou a estudar, superando dificuldades e preconceitos raciais. Ele se torna um dos cirurgiões mais renomados do mundo e se dedica a salvar a vida de crianças com doenças cerebrais.'
    },
    {
      id: "3",
      titulo: "A Teoria de Tudo",
      capa: "https://m.media-amazon.com/images/I/91lvgoflLsL.jpg",
      sinopse: '"A Teoria de Tudo" é um filme de drama biográfico baseado na vida do físico teórico Stephen Hawking, interpretado por Eddie Redmayne. O filme aborda a trajetória de Hawking desde seus dias como estudante em Cambridge, até sua luta contra a esclerose lateral amiotrófica. O enredo destaca seu trabalho científico e sua relação com sua esposa, Jane Wilde, interpretada por Felicity Jones.'
    },
    {
      id: "4",
      titulo: "A Teoria de Tudo",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/86/King_Richard_poster.jpeg/200px-King_Richard_poster.jpeg",
      sinopse: '"King Richard" é um filme biográfico que conta a história do pai das tenistas Venus e Serena Williams, interpretado por Will Smith. O filme retrata a determinação e visão de Richard Williams em treinar e guiar suas filhas em uma jornada rumo ao sucesso no mundo do tênis, apesar de enfrentar diversos desafios e obstáculos ao longo do caminho.'
    },

  ],
};



// endpoint [get] READ ALL
app.get("/itens", (req, res) => {
  res.send(itens);
});

// endpoint [get] READ one
app.get("/itens/:id", (req, res) => {
  const id = req.params.id;

  const item = itens.data.filter(function (a) {

    return a.id === id;
  });
  res.send(item);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});