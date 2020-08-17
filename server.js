const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const data = [
  {
    id: "5f35ba237525317b2cfafff2",
    title: "laborum commodo qui",
    description:
      "Velit officia sunt labore elit in occaecat sint deserunt pariatur ea ipsum do veniam aliqua.",
    body:
      "Ut commodo culpa exercitation dolor sit laboris ad voluptate aute. Nostrud cillum ad enim officia ullamco labore adipisicing esse duis. Deserunt et nisi ad quis amet adipisicing. Occaecat ullamco sit dolore eu ipsum culpa Lorem officia ad nulla. Qui cillum amet do enim non velit veniam proident aute dolor occaecat aliquip. Sint nulla occaecat qui incididunt ut veniam ea in et. Cupidatat adipisicing pariatur ex consequat deserunt.\n\nProident exercitation occaecat ea veniam magna sunt consequat excepteur esse. Occaecat officia mollit pariatur exercitation ad reprehenderit ex qui aliquip velit ea amet exercitation amet. Excepteur eu tempor non commodo nostrud aute sunt et. Irure cupidatat qui est laborum Lorem et consequat nisi deserunt labore et ullamco ipsum eu. Sint velit est id consequat.",
  },
  {
    id: "5f35ba235aa48b3db985fa9f",
    title: "id commodo labore",
    description:
      "Reprehenderit ullamco veniam enim adipisicing mollit adipisicing elit dolor anim exercitation reprehenderit amet exercitation.",
    body:
      "Elit occaecat mollit qui mollit aute officia fugiat voluptate aliquip sint eu do. Ad cillum cupidatat veniam incididunt nulla velit et proident do anim. Ex ad ipsum occaecat nisi fugiat amet sit non. Amet mollit dolore sint officia sunt minim ipsum cupidatat occaecat eiusmod veniam veniam.\n\nCupidatat dolore ullamco enim magna consectetur nostrud aute quis quis Lorem sunt ad cupidatat. Dolor mollit dolore consectetur dolore dolor qui aliqua. Lorem tempor Lorem sunt ea anim esse nulla dolore incididunt anim veniam.",
  },
  {
    id: "5f35ba23b859bd208f9fc57e",
    title: "laborum deserunt proident",
    description:
      "Sit sunt officia ex id ipsum aute mollit anim commodo id culpa dolore veniam nisi.",
    body:
      "Exercitation proident mollit minim veniam. Et dolore cupidatat nisi commodo labore. Aliqua commodo occaecat nulla reprehenderit ea esse dolor laboris est.\n\nSit consequat pariatur minim esse ex amet reprehenderit occaecat ex elit cupidatat elit. Et magna officia qui esse eiusmod cillum tempor. Exercitation minim eu voluptate aute dolor ut est cillum. Irure deserunt veniam quis minim elit adipisicing sit amet duis id aute.",
  },
  {
    id: "5f35ba2325e351e5bb7ec83e",
    title: "sunt occaecat et",
    description:
      "Veniam eu tempor est et nisi in fugiat incididunt elit ullamco esse labore adipisicing cillum.",
    body:
      "Duis amet enim qui ut irure esse minim sunt velit est. Id ullamco aliqua dolore irure quis pariatur reprehenderit occaecat consectetur qui nisi occaecat. Incididunt dolore exercitation voluptate velit nostrud laboris mollit adipisicing ut. Commodo amet dolore do pariatur nisi reprehenderit pariatur ullamco ex incididunt.\n\nIpsum incididunt officia ea dolore quis Lorem eu laborum qui incididunt do sit tempor. Eiusmod in veniam laborum magna officia culpa dolore cillum consectetur incididunt ipsum qui exercitation proident. Laboris consectetur duis eu ex. Consequat enim enim ad ad nisi fugiat ad sunt ipsum. Voluptate eiusmod nostrud ad consequat nulla excepteur magna eu.",
  },
  {
    id: "5f35ba23d3335e7213832e7c",
    title: "adipisicing do est",
    description:
      "Anim fugiat ut consequat excepteur officia minim pariatur aute nisi.",
    body:
      "Ut adipisicing quis quis et ullamco. Tempor nostrud aliquip laboris nostrud aute ad commodo commodo et aliquip. Quis mollit quis non nulla laboris amet sint pariatur sint eiusmod magna in.\n\nAliqua laborum excepteur aliquip deserunt cillum reprehenderit laboris proident qui anim. Culpa proident id ad mollit laboris anim aliquip. Elit Lorem pariatur dolor veniam.",
  },
];

app.get("/", (req, res) => {
  console.log(req.method);
  res.send("done");
});

app.get("/articles", (req, res) => {
  console.log("Articles requested");
  res.send({ articles: data });
});

app.post("/articles", (req, res) => {
  res.send(req.body);
});

app.get("/articles/:id", (req, res) => {
  const id = req.params.id;

  for (const article of data) {
    if (article.id === id) {
      res.send({ article: article });
    }
  }
});

app.put("/articles/:id", (req, res) => {
  const id = req.params.id;

  for (const article of data) {
    if (article.id === id) {
      if (req.body.title) {
        article.title = req.body.title;
      }
      if (req.body.description) {
        article.description = req.body.description;
      }
      if (req.body.body) {
        article.body = req.body.body;
      }
    }
  }
  res.end();
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
