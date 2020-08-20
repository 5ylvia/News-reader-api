const express = require('express');
const router = express.Router();
const crypto = require("crypto");


const data = [
    {
      "id": "5f35ba233c66756f249aa1da",
      "title": "occaecat eu consequat",
      "description": "Eu nisi aliqua officia tempor sit proident minim consectetur tempor anim reprehenderit.",
      "body": "Dolor exercitation eu sunt ullamco minim veniam adipisicing reprehenderit. Nisi id voluptate ullamco duis enim. Proident ut minim nulla ut aliquip consequat. Mollit cupidatat excepteur anim id. Dolore aliquip do sit adipisicing cupidatat.\n\nNulla non enim exercitation nulla anim anim velit consequat qui eiusmod non irure magna. Culpa velit quis laborum ipsum exercitation ullamco duis id ad ex nisi in aliquip. Tempor id veniam nulla tempor exercitation est cupidatat velit minim."
    },
    {
      "id": "5f35ba23b28471180de0dd92",
      "title": "voluptate incididunt irure",
      "description": "Sunt quis irure quis voluptate anim excepteur duis voluptate cupidatat est id ullamco sunt ex.",
      "body": "Quis dolore qui ullamco est qui cupidatat amet. Ipsum non labore quis sint adipisicing. Ex qui laboris culpa velit amet adipisicing pariatur dolore proident incididunt nostrud fugiat proident. Eu ut culpa exercitation reprehenderit cillum dolore eiusmod fugiat.\n\nLabore cupidatat commodo voluptate dolor cillum adipisicing. Id fugiat mollit in minim. Pariatur cupidatat enim non elit est consectetur eu ea ullamco ut sint. Consequat voluptate amet nostrud sunt tempor labore sit in excepteur minim. Excepteur velit minim sunt exercitation voluptate velit nulla laboris ut. Amet in quis commodo velit minim nisi et duis proident qui."
    },
    {
      "id": "5f35ba23ab762ea38ca3dc27",
      "title": "et deserunt amet",
      "description": "Sit veniam ex excepteur eu veniam qui ea mollit voluptate culpa.",
      "body": "Elit magna cupidatat fugiat aliqua est in consectetur. Amet ullamco incididunt incididunt qui aliqua voluptate id proident cupidatat do nulla. Laborum fugiat quis exercitation in consequat fugiat velit non velit elit. Do aliquip aliqua in reprehenderit nulla. Tempor sunt ut do enim incididunt esse amet ad laborum reprehenderit mollit sunt.\n\nIpsum voluptate et laboris eu non. Mollit ipsum non dolore consequat qui cupidatat laborum est irure cillum labore id adipisicing. Ea Lorem esse duis laborum in. Ullamco aute qui laborum eiusmod dolore cupidatat reprehenderit commodo ipsum velit est ullamco sunt. Magna Lorem in non proident ullamco nostrud consequat nostrud ea et."
    },
    {
      "id": "5f35ba237525317b2cfafff2",
      "title": "laborum commodo qui",
      "description": "Velit officia sunt labore elit in occaecat sint deserunt pariatur ea ipsum do veniam aliqua.",
      "body": "Ut commodo culpa exercitation dolor sit laboris ad voluptate aute. Nostrud cillum ad enim officia ullamco labore adipisicing esse duis. Deserunt et nisi ad quis amet adipisicing. Occaecat ullamco sit dolore eu ipsum culpa Lorem officia ad nulla. Qui cillum amet do enim non velit veniam proident aute dolor occaecat aliquip. Sint nulla occaecat qui incididunt ut veniam ea in et. Cupidatat adipisicing pariatur ex consequat deserunt.\n\nProident exercitation occaecat ea veniam magna sunt consequat excepteur esse. Occaecat officia mollit pariatur exercitation ad reprehenderit ex qui aliquip velit ea amet exercitation amet. Excepteur eu tempor non commodo nostrud aute sunt et. Irure cupidatat qui est laborum Lorem et consequat nisi deserunt labore et ullamco ipsum eu. Sint velit est id consequat."
    },
    {
      "id": "5f35ba235aa48b3db985fa9f",
      "title": "id commodo labore",
      "description": "Reprehenderit ullamco veniam enim adipisicing mollit adipisicing elit dolor anim exercitation reprehenderit amet exercitation.",
      "body": "Elit occaecat mollit qui mollit aute officia fugiat voluptate aliquip sint eu do. Ad cillum cupidatat veniam incididunt nulla velit et proident do anim. Ex ad ipsum occaecat nisi fugiat amet sit non. Amet mollit dolore sint officia sunt minim ipsum cupidatat occaecat eiusmod veniam veniam.\n\nCupidatat dolore ullamco enim magna consectetur nostrud aute quis quis Lorem sunt ad cupidatat. Dolor mollit dolore consectetur dolore dolor qui aliqua. Lorem tempor Lorem sunt ea anim esse nulla dolore incididunt anim veniam."
    },
    {
      "id": "5f35ba23b859bd208f9fc57e",
      "title": "laborum deserunt proident",
      "description": "Sit sunt officia ex id ipsum aute mollit anim commodo id culpa dolore veniam nisi.",
      "body": "Exercitation proident mollit minim veniam. Et dolore cupidatat nisi commodo labore. Aliqua commodo occaecat nulla reprehenderit ea esse dolor laboris est.\n\nSit consequat pariatur minim esse ex amet reprehenderit occaecat ex elit cupidatat elit. Et magna officia qui esse eiusmod cillum tempor. Exercitation minim eu voluptate aute dolor ut est cillum. Irure deserunt veniam quis minim elit adipisicing sit amet duis id aute."
    },
    {
      "id": "5f35ba2325e351e5bb7ec83e",
      "title": "sunt occaecat et",
      "description": "Veniam eu tempor est et nisi in fugiat incididunt elit ullamco esse labore adipisicing cillum.",
      "body": "Duis amet enim qui ut irure esse minim sunt velit est. Id ullamco aliqua dolore irure quis pariatur reprehenderit occaecat consectetur qui nisi occaecat. Incididunt dolore exercitation voluptate velit nostrud laboris mollit adipisicing ut. Commodo amet dolore do pariatur nisi reprehenderit pariatur ullamco ex incididunt.\n\nIpsum incididunt officia ea dolore quis Lorem eu laborum qui incididunt do sit tempor. Eiusmod in veniam laborum magna officia culpa dolore cillum consectetur incididunt ipsum qui exercitation proident. Laboris consectetur duis eu ex. Consequat enim enim ad ad nisi fugiat ad sunt ipsum. Voluptate eiusmod nostrud ad consequat nulla excepteur magna eu."
    },
    {
      "id": "5f35ba23d3335e7213832e7c",
      "title": "adipisicing do est",
      "description": "Anim fugiat ut consequat excepteur officia minim pariatur aute nisi.",
      "body": "Ut adipisicing quis quis et ullamco. Tempor nostrud aliquip laboris nostrud aute ad commodo commodo et aliquip. Quis mollit quis non nulla laboris amet sint pariatur sint eiusmod magna in.\n\nAliqua laborum excepteur aliquip deserunt cillum reprehenderit laboris proident qui anim. Culpa proident id ad mollit laboris anim aliquip. Elit Lorem pariatur dolor veniam."
    }
];



//endpoint
router.get("", (req, res) => {
    console.log("get request for all articles received...");
    res.send({ articles : data });
});


router.post("", (req, res) => {
  console.log('post request received...');
  const id = crypto.randomBytes(12).toString("hex");
  let article = req.body;
  article.id = id;
  data.push(article);
  res.sendStatus(200);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log('get request for article ${id} received..')
    for (const article of data) {
      if (article.id === id) {
        res.send( {article: article} );
      }
    }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log('update request for article ${id} received..')
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
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < data.length; i++ ) {
    const article = data[i];
    if ( article.id === id ) {
      data.splice(i, 1);
      res.sendStatus(204);
    }
  }
}); 

module.exports = router



