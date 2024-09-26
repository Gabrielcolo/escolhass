let suaidade;
let aventura;
let acao;
let rpg;
let titulo;
let corpo;
let jogos = { 
  menor10:{ 
  aventura:"lego",
  acao:"Super Mario Odyssey",
  rpg:"Pokemon"
  },
   entre10a14:{ 
   aventura:"Plants Vs Zombies",
   acao:"dark souls",
   rpg:"The Legend of Zelda breath of the wild"
},
    entre14a16:{ 
   aventura:"Horizon Zero Dawn",
   acao:"Assassin's Creed Odyssey",
   rpg:"Final Fantasy xv"
}, 
  entre16a18:{ 
  aventura: "Red dead redemption 2",
  acao:"Cyperpunk 2077",
  rpg:"The Witcher 3"
},
  maior18:{ 
  aventura:"COD BO1",
  acao:"Elden ring",
  rpg:"Assassins creed"
  }
};
    
    
function setup() {
  createCanvas(850, 400).position(100,100)
  createSpan("qual sua idade?").position(670,530).addClass("hidden");
  suaidade = createInput("").position(650,585).addClass("hidden");
  aventura=createCheckbox("gosta de jogos de aventura?😁").position(100,600).addClass("hidden");
  acao=createCheckbox("gosta de jogos de ação?😎").position(100,650).addClass("hidden");
 rpg=createCheckbox("gosta de jogos de RPG?🐱‍👤").position(100,700).addClass("hidden");
  titulo = "Nerko One"
  corpo = "Roboto Condensed"
  button = createButton("APERTA MEU BUTÃO😎").position(width/2,580);
  button.mousePressed(bota);
  button.addClass("botao")
}

function bota(){ 
  selectAll(".hidden").forEach((el)=> el.removeClass("hidden"));
  button.hide();
}
function draw() {
  background("white");
  fill ("blue")
  textAlign(CENTER, CENTER);
  textSize (40);
  text("SUGESTOES DE GAMES", width/2, 20)
  textFont(corpo);


  let idade = parseInt(suaidade.value());
  let checkaventura = aventura.checked();
  let checkacao = acao.checked();
  let checkrpg = rpg.checked();
  let jogo = "Insira suas preferencias";
  if (suaidade.value() !==""){
    jogo = mostrajogo(idade, checkaventura, checkacao, checkrpg);
 }
  fill("lightblue");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
   textFont(titulo)
  
  
}

function mostrajogo(idade, checkaventura, checkacao, checkrpg){ 
  if(isNaN(idade)){
    return "Idade Invalida";
  } else
    if (idade < 5 ){ 
    return "Sai daqui, voce é uma criança"
  }   else
      if (idade > 120){
     return "Ja morreu, enterra"
     }
  if(idade >= 5&& idade < 10){ 
    if (checkaventura){ 
      return jogos["menor10"]["aventura"];
      
    }
    if (checkacao){ 
      return jogos["menor10"]["acao"];
      
    }
    if (checkrpg){ 
      return jogos["menor10"]["rpg"];
      
    }
  }
  else if(idade >= 10 && idade < 14){ 
    if (checkaventura){ 
      return jogos["entre10e14"]["aventura"];
      
    }
    if (checkacao){ 
      return jogos["entre10e14"]["acao"];
      
    }
    if (checkrpg){ 
      return jogos["menor10"]["rpg"];
      
    }
  }
   else if(idade >= 14&& idade < 16){ 
    if (checkaventura){ 
      return jogos["entre14e16"]["aventura"];
      
    }
    if (checkacao){ 
      return jogos["entre14e16"]["acao"];
      
    }
    if (checkrpg){ 
      return jogos["entre14e16"]["rpg"];
    }
  } if(idade >= 16&& idade < 18){ 
    if (checkaventura){ 
      return jogos["entre16e18"]["aventura"];
      
    }
    if (checkacao){ 
      return jogos["entre16e18"]["acao"];
      
    }
    if (checkrpg){ 
      return jogos["entre16e18"]["rpg"]; 
    }
  }
   else if(idade > 18){ 
    if (checkaventura){ 
      return jogos["maior18"]["aventura"];
      
    }
    if (checkacao){ 
      return jogos["maior18"]["acao"];
      
    }
 else 
   if (checkrpg){ 
      return jogos["menor10"]["rpg"];
      
    }
  }
}