
const recipes = [
{
name:"Bolo de Chocolate", emoji:"🎂", category:"Bolos",
time:"45 minutos", difficulty:"Fácil", yield:"10 fatias",
description:"Bolo fofinho, macio e com muito sabor de chocolate.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","1 xícara de chocolate em pó","3 ovos","1 xícara de leite","1/2 xícara de óleo","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C e unte uma forma.","Misture os ovos, o açúcar e o óleo até ficar uniforme.","Adicione o leite e o chocolate em pó.","Acrescente a farinha aos poucos, mexendo até desaparecerem os gruminhos.","Adicione o fermento e misture delicadamente.","Despeje na forma e asse por aproximadamente 35 minutos.","Faça o teste do palito, espere amornar e desenforme."],
tip:"Não abra o forno nos primeiros 25 minutos. Você pode decorar com brigadeiro e granulado.",
theme:["#fff0e8","#f6d4bf","#86452f","🍫 🍪 ✨ 🍩"]
},
{
name:"Brigadeiro",emoji:"🍫",category:"Docinhos",
time:"25 minutos",difficulty:"Fácil",yield:"15 a 20 unidades",
description:"O docinho brasileiro mais amado, cremoso e delicioso.",
ingredients:["1 lata de leite condensado","3 colheres de chocolate em pó","1 colher de manteiga","Chocolate granulado"],
steps:["Separe uma panela de fundo grosso.","Coloque o leite condensado, o chocolate e a manteiga.","Misture antes de ligar o fogo.","Com ajuda de um adulto, cozinhe em fogo baixo, mexendo sem parar.","Quando desgrudar do fundo da panela, desligue.","Coloque em um prato untado e espere esfriar completamente.","Unte as mãos, faça bolinhas e passe no granulado."],
tip:"O segredo é mexer continuamente e usar fogo baixo para não queimar.",
theme:["#f9e9df","#e8c1a8","#78432f","🍫 🤎 🍬 ✨"]
},
{
name:"Cupcake de Baunilha",emoji:"🧁",category:"Bolos",
time:"35 minutos",difficulty:"Fácil",yield:"10 a 12 unidades",
description:"Cupcakes delicados, fofinhos e com aroma de baunilha.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","2 ovos","1/2 xícara de leite","1/2 xícara de manteiga","1 colher de fermento","Baunilha"],
steps:["Preaqueça o forno a 180°C.","Misture a manteiga e o açúcar até formar um creme.","Adicione os ovos e a baunilha.","Acrescente a farinha e o leite aos poucos.","Adicione o fermento delicadamente.","Coloque a massa nas forminhas até dois terços da capacidade.","Asse por aproximadamente 20 minutos e espere esfriar."],
tip:"Decore com chantilly e confeitos coloridos somente depois que os cupcakes esfriarem.",
theme:["#f6edff","#e6d5fa","#79539a","🧁 💜 ⭐ 🎀"]
},
{
name:"Bolo de Cenoura",emoji:"🥕",category:"Bolos",
time:"50 minutos",difficulty:"Fácil",yield:"10 fatias",
description:"Bolo de cenoura macio que combina perfeitamente com chocolate.",
ingredients:["3 cenouras médias","3 ovos","1 xícara de óleo","2 xícaras de açúcar","2 xícaras de farinha","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C e unte uma forma.","Lave, descasque e corte as cenouras.","Bata as cenouras, os ovos e o óleo no liquidificador.","Despeje em uma tigela e adicione o açúcar.","Acrescente a farinha aos poucos.","Coloque o fermento e misture delicadamente.","Asse por aproximadamente 40 minutos e espere amornar."],
tip:"Corte as cenouras em pedaços pequenos para facilitar na hora de bater.",
theme:["#fff1df","#f5d4a3","#9c642c","🥕 🌿 🌼 ✨"]
},
{
name:"Morango com Chocolate",emoji:"🍓",category:"Sobremesas",
time:"20 minutos",difficulty:"Fácil",yield:"10 unidades",
description:"Morangos fresquinhos cobertos com chocolate.",
ingredients:["10 morangos","200 g de chocolate","Confeitos opcionais"],
steps:["Lave os morangos cuidadosamente.","Seque muito bem cada morango.","Pique o chocolate.","Derreta em banho-maria ou no micro-ondas, com ajuda de um adulto.","Mergulhe cada morango no chocolate.","Coloque sobre papel-manteiga.","Decore com confeitos e leve à geladeira até endurecer."],
tip:"Os morangos precisam estar completamente secos para o chocolate aderir.",
theme:["#fff0f4","#f8cad8","#ad4768","🍓 💗 🌸 ✨"]
},
{
name:"Bolo de Fubá",emoji:"🌽",category:"Bolos",
time:"45 minutos",difficulty:"Fácil",yield:"10 fatias",
description:"Um bolo tradicional, macio e perfeito para o café da tarde.",
ingredients:["2 xícaras de fubá","1 xícara de farinha","2 xícaras de açúcar","3 ovos","1 xícara de leite","1/2 xícara de óleo","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C.","Misture o fubá, a farinha e o açúcar.","Bata os ovos com o leite e o óleo.","Junte os ingredientes líquidos aos secos.","Misture até ficar homogêneo.","Adicione o fermento delicadamente.","Asse por 35 a 40 minutos."],
tip:"Uma pitadinha de erva-doce pode deixar o bolo ainda mais aromático.",
theme:["#fff9df","#f2e3a8","#94733c","🌽 🌻 🍰 ✨"]
},
{
name:"Brownie",emoji:"🍫",category:"Sobremesas",
time:"35 minutos",difficulty:"Fácil",yield:"9 a 12 pedaços",
description:"Brownie de chocolate com interior macio e intenso.",
ingredients:["200 g de chocolate","100 g de manteiga","3 ovos","1 xícara de açúcar","1 xícara de farinha"],
steps:["Preaqueça o forno a 180°C.","Derreta o chocolate com a manteiga, com ajuda de um adulto.","Misture os ovos e o açúcar em outra tigela.","Adicione o chocolate derretido aos poucos.","Acrescente a farinha e mexa até incorporar.","Despeje em uma forma forrada.","Asse por 20 a 25 minutos e espere esfriar antes de cortar."],
tip:"O brownie continua firmando enquanto esfria. Não deixe assar demais.",
theme:["#f5e8dc","#ddc1a7","#70442e","🍫 🍪 🤎 ✨"]
},
{
name:"Beijinho",emoji:"🥥",category:"Docinhos",
time:"25 minutos",difficulty:"Fácil",yield:"15 a 20 unidades",
description:"Docinhos de coco macios e delicados.",
ingredients:["1 lata de leite condensado","100 g de coco ralado","1 colher de manteiga","Cravos opcionais"],
steps:["Coloque o leite condensado na panela.","Adicione o coco e a manteiga.","Misture tudo antes de ligar o fogo.","Com ajuda de um adulto, cozinhe em fogo baixo.","Mexa até desgrudar do fundo.","Transfira para um prato untado e espere esfriar.","Modele bolinhas e passe no coco ralado."],
tip:"Espere esfriar completamente antes de enrolar.",
theme:["#f4f5e9","#e0e8d3","#75865b","🥥 🌿 🤍 ✨"]
},
{
name:"Mousse de Maracujá",emoji:"🍋",category:"Mousses",
time:"15 minutos + geladeira",difficulty:"Fácil",yield:"6 porções",
description:"Sobremesa cremosa e refrescante com sabor de maracujá.",
ingredients:["1 lata de leite condensado","1 caixa de creme de leite","1 xícara de suco concentrado de maracujá"],
steps:["Separe o liquidificador.","Coloque o leite condensado, o creme de leite e o suco.","Bata por aproximadamente 2 minutos.","Verifique se a mistura está cremosa.","Distribua em potinhos ou travessa.","Decore com polpa de maracujá, se desejar.","Leve à geladeira por pelo menos 3 horas."],
tip:"Use suco concentrado para conseguir um sabor mais marcante.",
theme:["#fff9d9","#f5e89e","#8b8a35","🍋 🌿 🍨 ✨"]
},
{
name:"Pudim de Leite",emoji:"🍮",category:"Sobremesas",
time:"1h30 + geladeira",difficulty:"Média",yield:"8 a 10 fatias",
description:"Pudim cremoso com uma deliciosa calda de caramelo.",
ingredients:["1 lata de leite condensado","2 medidas de leite","3 ovos","1 xícara de açúcar"],
steps:["Peça ajuda de um adulto para preparar a calda de açúcar.","Espalhe o caramelo na forma de pudim.","Bata o leite condensado, o leite e os ovos.","Despeje a mistura na forma.","Cubra com papel-alumínio.","Coloque em banho-maria e asse a 180°C até firmar.","Espere esfriar e leve à geladeira antes de desenformar."],
tip:"O preparo da calda e o banho-maria devem ser feitos com auxílio de um adulto.",
theme:["#fff0dc","#e9c28d","#94602e","🍮 🍯 ✨ 🤎"]
},
{
name:"Bolo Red Velvet",emoji:"❤️",category:"Bolos",
time:"1 hora",difficulty:"Média",yield:"10 a 12 fatias",
description:"Bolo vermelho aveludado, delicado e especial.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","2 ovos","1 xícara de leite","1/2 xícara de manteiga","Corante vermelho alimentício","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C.","Bata a manteiga com o açúcar.","Adicione os ovos.","Misture o leite com o corante alimentício.","Acrescente os líquidos e a farinha alternadamente.","Adicione o fermento.","Asse por aproximadamente 35 minutos e espere esfriar."],
tip:"Use corante próprio para alimentos e espere esfriar antes de rechear.",
theme:["#fff0f2","#f3c0c9","#a33d55","❤️ 🌹 ✨ 🎂"]
},
{
name:"Torta de Limão",emoji:"🍋",category:"Tortas",
time:"40 minutos + geladeira",difficulty:"Média",yield:"8 porções",
description:"Torta com base crocante e recheio cremoso de limão.",
ingredients:["200 g de biscoito","100 g de manteiga","1 lata de leite condensado","1 caixa de creme de leite","Suco de 2 limões"],
steps:["Triture os biscoitos até formar uma farofa.","Misture a manteiga derretida, com ajuda de um adulto.","Forre o fundo de uma forma com a mistura.","Em uma tigela, misture o leite condensado e o creme de leite.","Acrescente o suco de limão aos poucos.","Espalhe o creme sobre a base.","Leve à geladeira por pelo menos 3 horas."],
tip:"Decore com raspinhas de limão e mantenha refrigerada.",
theme:["#f5f9df","#e2e9a8","#77833b","🍋 🌿 🌼 ✨"]
},
{
name:"Cookies com Chocolate",emoji:"🍪",category:"Biscoitos",
time:"30 minutos",difficulty:"Fácil",yield:"12 a 15 unidades",
description:"Cookies douradinhos, macios e cheios de chocolate.",
ingredients:["2 xícaras de farinha","1/2 xícara de manteiga","1 xícara de açúcar","1 ovo","1/2 xícara de gotas de chocolate","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C.","Misture a manteiga e o açúcar.","Adicione o ovo.","Acrescente a farinha aos poucos.","Coloque o fermento e as gotas de chocolate.","Modele pequenas porções e coloque na assadeira com espaço entre elas.","Asse por 12 a 15 minutos e deixe esfriar."],
tip:"Deixe espaço entre os cookies porque eles se espalham durante o forno.",
theme:["#f5eadd","#e5d0b2","#8b6644","🍪 🍫 🤎 ✨"]
},
{
name:"Bolo de Coco",emoji:"🥥",category:"Bolos",
time:"45 minutos",difficulty:"Fácil",yield:"10 fatias",
description:"Bolo delicado, macio e com aroma de coco.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","3 ovos","1 xícara de leite de coco","1/2 xícara de óleo","1 xícara de coco ralado","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C.","Misture os ovos, o açúcar e o óleo.","Acrescente o leite de coco.","Adicione a farinha aos poucos.","Misture o coco ralado.","Coloque o fermento por último.","Asse por aproximadamente 35 minutos."],
tip:"Finalize com coco ralado por cima depois de o bolo esfriar.",
theme:["#f0f8ff","#dcebf2","#66869c","🥥 🤍 🫧 ✨"]
},
{
name:"Palha Italiana",emoji:"🍫",category:"Docinhos",
time:"30 minutos",difficulty:"Fácil",yield:"12 a 16 quadradinhos",
description:"Brigadeiro cremoso com pedacinhos de biscoito.",
ingredients:["1 lata de leite condensado","3 colheres de chocolate","1 colher de manteiga","1 pacote de biscoito maisena"],
steps:["Prepare um brigadeiro com leite condensado, chocolate e manteiga.","Cozinhe em fogo baixo com ajuda de um adulto.","Quebre os biscoitos em pedaços pequenos.","Misture os biscoitos ao brigadeiro.","Espalhe em uma forma forrada.","Espere esfriar e leve à geladeira.","Corte em quadradinhos."],
tip:"Não triture demais os biscoitos. Os pedacinhos deixam a textura especial.",
theme:["#f5e8df","#e4c6ae","#85523b","🍫 🍪 🤎 ✨"]
},
{
name:"Mousse de Morango",emoji:"🍓",category:"Mousses",
time:"15 minutos + geladeira",difficulty:"Fácil",yield:"6 porções",
description:"Uma mousse rosinha, cremosa e refrescante.",
ingredients:["1 caixa de morangos","1 lata de leite condensado","1 caixa de creme de leite","1 envelope de gelatina incolor"],
steps:["Lave e corte os morangos.","Prepare a gelatina seguindo as instruções da embalagem.","Coloque os morangos, o leite condensado e o creme de leite no liquidificador.","Bata até ficar uniforme.","Adicione a gelatina já preparada e bata rapidamente.","Distribua em potinhos.","Leve à geladeira até firmar."],
tip:"Decore com morangos frescos antes de servir.",
theme:["#fff0f5","#f6c9df","#ae5279","🍓 💗 🌸 ✨"]
},
{
name:"Bolo de Laranja",emoji:"🍊",category:"Bolos",
time:"45 minutos",difficulty:"Fácil",yield:"10 fatias",
description:"Bolo aromático e fofinho com suco natural de laranja.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","3 ovos","1 xícara de suco de laranja","1/2 xícara de óleo","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C.","Misture os ovos, o suco e o óleo.","Acrescente o açúcar.","Adicione a farinha aos poucos.","Coloque o fermento delicadamente.","Despeje em uma forma untada.","Asse por aproximadamente 35 minutos."],
tip:"Use suco de laranja natural e coado para um sabor delicioso.",
theme:["#fff0df","#f6c48c","#b96a32","🍊 🌼 🍰 ✨"]
},
{
name:"Cajuzinho",emoji:"🥜",category:"Docinhos",
time:"30 minutos",difficulty:"Fácil",yield:"15 unidades",
description:"Docinhos de amendoim com um toque de chocolate.",
ingredients:["1 xícara de amendoim torrado e moído","1/2 lata de leite condensado","2 colheres de chocolate em pó","Açúcar para finalizar"],
steps:["Coloque o amendoim em uma tigela.","Adicione o chocolate em pó.","Acrescente o leite condensado aos poucos.","Misture até formar uma massa modelável.","Modele os docinhos em formato de cajuzinho.","Passe no açúcar.","Decore com um pedacinho de amendoim."],
tip:"Acrescente o leite condensado aos poucos para a massa não ficar mole.",
theme:["#f4e8d9","#dfc29d","#865d39","🥜 🤎 🍬 ✨"]
},
{
name:"Torta de Maçã",emoji:"🍎",category:"Tortas",
time:"1 hora",difficulty:"Média",yield:"8 porções",
description:"Torta caseira com maçãs macias e um toque de canela.",
ingredients:["2 xícaras de farinha","100 g de manteiga","1/2 xícara de açúcar","2 maçãs","Canela a gosto"],
steps:["Preaqueça o forno a 180°C.","Misture farinha, manteiga e açúcar até formar uma massa.","Forre o fundo de uma forma.","Lave e corte as maçãs em fatias.","Distribua as fatias sobre a massa.","Polvilhe canela.","Asse por 35 a 40 minutos até dourar."],
tip:"Corte as maçãs em fatias de espessura parecida para assarem por igual.",
theme:["#fff1e4","#f3d1a0","#9b593a","🍎 🍂 🥧 ✨"]
},
{
name:"Pavê de Chocolate",emoji:"🍨",category:"Sobremesas",
time:"30 minutos + geladeira",difficulty:"Fácil",yield:"8 porções",
description:"Camadas de biscoito e creme de chocolate.",
ingredients:["1 pacote de biscoito maisena","1 lata de leite condensado","2 xícaras de leite","2 colheres de amido de milho","3 colheres de chocolate em pó","1 caixa de creme de leite"],
steps:["Misture o leite condensado, o leite e o amido.","Cozinhe em fogo baixo com ajuda de um adulto até engrossar.","Divida o creme em duas partes.","Misture o chocolate em uma das partes.","Umedeça rapidamente os biscoitos no leite.","Monte camadas de biscoito e cremes em uma travessa.","Finalize com chocolate e leve à geladeira por 4 horas."],
tip:"Não deixe os biscoitos de molho, pois podem desmanchar.",
theme:["#f8f0e8","#e5d5c4","#795642","🍨 🍫 🤎 ✨"]
},
{
name:"Donuts",emoji:"🍩",category:"Doces",
time:"1h30",difficulty:"Média",yield:"8 a 10 unidades",
description:"Donuts fofinhos com cobertura e confeitos coloridos.",
ingredients:["3 xícaras de farinha","1/2 xícara de leite morno","1 ovo","3 colheres de açúcar","2 colheres de manteiga","1 colher de fermento biológico seco"],
steps:["Misture leite morno, fermento e açúcar.","Acrescente o ovo e a manteiga.","Adicione a farinha aos poucos.","Sove até formar uma massa macia.","Cubra e deixe crescer até dobrar de tamanho.","Abra a massa e corte círculos com um furo no meio.","Deixe crescer novamente e peça ajuda de um adulto para assar a 180°C até dourar.","Depois de frios, decore com cobertura."],
tip:"Respeite o tempo de crescimento para que os donuts fiquem fofinhos.",
theme:["#fff0f7","#f6cde2","#a64f82","🍩 🌈 🍭 ✨"]
},
{
name:"Bolo de Morango",emoji:"🍓",category:"Bolos",
time:"1 hora",difficulty:"Média",yield:"10 a 12 fatias",
description:"Bolo macio decorado com chantilly e morangos frescos.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","3 ovos","1 xícara de leite","1 colher de fermento","1 caixa de morangos","Chantilly para decorar"],
steps:["Preaqueça o forno a 180°C.","Misture os ovos, o açúcar e o leite.","Acrescente a farinha aos poucos.","Adicione o fermento.","Despeje em uma forma untada.","Asse por aproximadamente 35 minutos.","Espere esfriar completamente.","Decore com chantilly e morangos lavados e secos."],
tip:"Nunca coloque chantilly em um bolo quente, pois ele pode derreter.",
theme:["#fff0f5","#f6c6d8","#a94e70","🍓 🌸 🤍 ✨"]
},
{
name:"Queijadinha",emoji:"🥥",category:"Docinhos",
time:"35 minutos",difficulty:"Fácil",yield:"8 a 10 unidades",
description:"Docinhos dourados com coco e queijo.",
ingredients:["1 lata de leite condensado","2 ovos","100 g de coco ralado","50 g de queijo parmesão"],
steps:["Preaqueça o forno a 180°C.","Misture o leite condensado e os ovos.","Acrescente o coco e o queijo.","Mexa até ficar uniforme.","Distribua em forminhas.","Asse por 20 a 25 minutos até dourar.","Espere esfriar um pouco antes de servir."],
tip:"Não encha completamente as forminhas.",
theme:["#fff9df","#f0dfaa","#9b793d","🥥 💛 🧁 ✨"]
},
{
name:"Gelatina Colorida",emoji:"🌈",category:"Sobremesas",
time:"30 minutos + geladeira",difficulty:"Fácil",yield:"8 porções",
description:"Cubinhos coloridos em uma sobremesa cremosa.",
ingredients:["3 sabores de gelatina","Água conforme as embalagens","1 caixa de creme de leite","1 lata de leite condensado"],
steps:["Prepare cada gelatina seguindo as instruções da embalagem.","Coloque em recipientes separados.","Leve à geladeira até firmar completamente.","Corte em cubinhos com supervisão de um adulto.","Misture o leite condensado e o creme de leite.","Acrescente os cubinhos delicadamente.","Leve novamente à geladeira."],
tip:"Escolha sabores de cores diferentes para deixar a sobremesa bem colorida.",
theme:["#f8efff","#e9d7fa","#8560a5","🌈 🍮 💜 ✨"]
},
{
name:"Bolo Formigueiro",emoji:"🎂",category:"Bolos",
time:"45 minutos",difficulty:"Fácil",yield:"10 fatias",
description:"Bolo fofinho com pedacinhos de chocolate espalhados.",
ingredients:["2 xícaras de farinha","1 xícara de açúcar","3 ovos","1 xícara de leite","1/2 xícara de óleo","1/2 xícara de granulado","1 colher de fermento"],
steps:["Preaqueça o forno a 180°C.","Misture ovos, açúcar, leite e óleo.","Acrescente a farinha aos poucos.","Misture o granulado.","Adicione o fermento delicadamente.","Despeje em uma forma untada.","Asse por aproximadamente 35 minutos."],
tip:"Passe o granulado em um pouquinho de farinha antes de misturar à massa.",
theme:["#fff4e8","#ead8bc","#87634b","🎂 🍫 ⭐ ✨"]
},
{
name:"Quindim",emoji:"💛",category:"Docinhos",
time:"1 hora",difficulty:"Média",yield:"8 a 10 unidades",
description:"Docinho amarelinho, brilhante e com sabor de coco.",
ingredients:["6 gemas peneiradas","1 xícara de açúcar","100 g de coco ralado","1 colher de manteiga"],
steps:["Unte pequenas forminhas com manteiga e açúcar.","Peneire as gemas sem apertar.","Misture as gemas, o açúcar, o coco e a manteiga.","Distribua nas forminhas.","Coloque em uma assadeira com água quente para o banho-maria.","Com ajuda de um adulto, asse a 180°C até firmar.","Espere esfriar antes de desenformar."],
tip:"Peneirar as gemas ajuda a deixar o aroma mais suave. O banho-maria deve ser feito por um adulto.",
theme:["#fff8d9","#f2df91","#a68a32","💛 🌼 🍮 ✨"]
},
{
name:"Cheesecake de Morango",emoji:"🍓",category:"Tortas",
time:"1 hora + geladeira",difficulty:"Média",yield:"8 porções",
description:"Cheesecake cremoso com base crocante e geleia de morango.",
ingredients:["200 g de biscoito","100 g de manteiga","300 g de cream cheese","1 lata de leite condensado","1 caixa de creme de leite","Geleia de morango"],
steps:["Triture os biscoitos até formar uma farofa.","Misture com a manteiga derretida.","Pressione no fundo de uma forma e leve à geladeira.","Bata o cream cheese até ficar cremoso.","Adicione leite condensado e creme de leite.","Espalhe o recheio sobre a base.","Leve à geladeira por pelo menos 4 horas.","Finalize com geleia de morango."],
tip:"Deixe gelar bem antes de cortar para conseguir fatias firmes.",
theme:["#fff0f3","#f5cbd7","#a65373","🍓 🥧 🌸 ✨"]
},
{
name:"Arroz Doce",emoji:"🍚",category:"Sobremesas",
time:"45 minutos",difficulty:"Fácil",yield:"6 porções",
description:"Sobremesa tradicional, cremosa e com canela.",
ingredients:["1 xícara de arroz","2 xícaras de água","500 ml de leite","1 lata de leite condensado","Canela a gosto"],
steps:["Lave o arroz.","Coloque o arroz e a água em uma panela.","Com ajuda de um adulto, cozinhe até amaciar.","Adicione o leite.","Acrescente o leite condensado.","Mexa em fogo baixo até ficar cremoso.","Distribua em potinhos e finalize com canela."],
tip:"O arroz doce engrossa enquanto esfria. Não deixe secar demais durante o cozimento.",
theme:["#faf4e8","#e7dcc5","#88704e","🍚 🤍 🌿 ✨"]
},
{
name:"Bolo de Banana",emoji:"🍌",category:"Bolos",
time:"45 minutos",difficulty:"Fácil",yield:"10 fatias",
description:"Bolo macio e aromático feito com bananas maduras.",
ingredients:["3 bananas maduras","2 ovos","1 xícara de açúcar","2 xícaras de farinha","1/2 xícara de óleo","1 colher de fermento","Canela a gosto"],
steps:["Preaqueça o forno a 180°C.","Amasse as bananas com um garfo.","Misture com os ovos, açúcar e óleo.","Adicione a farinha e a canela aos poucos.","Acrescente o fermento.","Despeje em uma forma untada.","Asse por aproximadamente 35 minutos e espere amornar."],
tip:"Bananas bem maduras deixam o bolo naturalmente mais docinho.",
theme:["#fff5d9","#f3e0a5","#a27b35","🍌 🍰 🌼 ✨"]
},
{
name:"Trufa de Chocolate",emoji:"🍬",category:"Docinhos",
time:"40 minutos",difficulty:"Fácil",yield:"15 a 20 unidades",
description:"Trufas macias de chocolate com acabamento delicado.",
ingredients:["300 g de chocolate","1/2 caixa de creme de leite","Chocolate em pó para finalizar"],
steps:["Pique o chocolate em pedaços pequenos.","Derreta com ajuda de um adulto.","Adicione o creme de leite.","Misture até formar um creme brilhante.","Cubra e leve à geladeira até ficar firme.","Modele pequenas bolinhas.","Passe no chocolate em pó e mantenha refrigerado."],
tip:"Espere a mistura ficar firme antes de modelar as trufas.",
theme:["#f5e9df","#dfc4ae","#79513e","🍬 🍫 ✨ 🤎"]
}
];

// Elementos do site
const recipeList = document.getElementById("recipeList");
const details = document.getElementById("details");
const search = document.getElementById("search");
const recipeCount = document.getElementById("recipeCount");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "Todas";

// Mostra os cartões das receitas
function showRecipes() {
    const term = search.value.toLowerCase().trim();

    const filtered = recipes
        .map((recipe, index) => ({...recipe, id:index + 1}))
        .filter(recipe => {
            const matchesSearch =
                recipe.name.toLowerCase().includes(term) ||
                recipe.category.toLowerCase().includes(term) ||
                recipe.ingredients.some(item => item.toLowerCase().includes(term));

            const matchesCategory =
                selectedCategory === "Todas" ||
                recipe.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

    recipeList.innerHTML = "";

    recipeCount.textContent =
        `${filtered.length} receitinha(s) encontrada(s) 💗`;

    emptyMessage.hidden = filtered.length !== 0;

    filtered.forEach(recipe => {
        const theme = recipe.theme;

        const card = document.createElement("article");
        card.className = "recipe-card";

        card.innerHTML = `
            <div class="recipe-image"
                 style="--card-color:${theme[1]}">
                ${recipe.emoji}
            </div>

            <h3>${recipe.name}</h3>

            <p>⏰ ${recipe.time}</p>
            <p>⭐ ${recipe.difficulty}</p>

            <button class="open-recipe">
                Ver receitinha 💗
            </button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            openRecipe(recipe.id);
        });

        recipeList.appendChild(card);
    });
}

// Abre a página personalizada
function openRecipe(id) {
    const recipe = recipes[id - 1];
    const theme = recipe.theme;

    details.hidden = false;

    details.style.setProperty("--fundo", theme[0]);
    details.style.setProperty("--detalhe", theme[1]);
    details.style.setProperty("--texto", theme[2]);
    details.style.setProperty("--borda", theme[1]);

    details.innerHTML = `
        <div class="recipe-page">

            <div class="recipe-decoration">
                ${theme[3]}
            </div>

            <div class="recipe-hero">
                <div class="big-sweet">${recipe.emoji}</div>

                <h2>${recipe.name}</h2>

                <p>${recipe.description}</p>
            </div>

            <div class="recipe-info">
                <span>⏰ ${recipe.time}</span>
                <span>⭐ ${recipe.difficulty}</span>
                <span>🍽️ ${recipe.yield}</span>
            </div>

            <div class="recipe-decoration">
                ${recipe.emoji} ✨ ${recipe.emoji}
            </div>

            <div class="recipe-box">
                <h3>🛒 Ingredientes</h3>

                <ul>
                    ${recipe.ingredients.map(item =>
                        `<li>♡ ${item}</li>`
                    ).join("")}
                </ul>
            </div>

            <div class="recipe-box">
                <h3>👩‍🍳 Modo de preparo completo</h3>

                <p>Vamos preparar essa delícia? Siga cada etapa:</p>

                <ol>
                    ${recipe.steps.map(step =>
                        `<li>${step}</li>`
                    ).join("")}
                </ol>
            </div>

            <div class="recipe-tip">
                <h3>💡 Dica especial da confeiteira</h3>
                <p>${recipe.tip}</p>
            </div>

            <div class="recipe-tip">
                ⚠️ Para usar forno, fogão, água quente ou utensílios
                cortantes, peça ajuda de um adulto.
            </div>

            <div class="cartoon">
                <h3>🎬 Hora da animação fofinha!</h3>

                <p>${recipe.description}</p>

                <div class="kitchen">
                    <div class="ingredient one">
                        ${recipe.emoji}
                    </div>

                    <div class="ingredient two">✨</div>
                    <div class="ingredient three">💗</div>

                    <div class="chef">👩‍🍳</div>
                    <div class="sweet">${recipe.emoji}</div>
                </div>

                <p>✨ Uma receita feita com muito amor! ✨</p>
            </div>

            <div class="recipe-decoration">
                ${theme[3]}
            </div>

            <button class="back-button">
                💗 Voltar ao livro de receitas
            </button>

        </div>
    `;

    details.querySelector(".back-button").addEventListener("click", () => {
        details.hidden = true;

        document.getElementById("receitas").scrollIntoView({
            behavior:"smooth"
        });
    });

    details.scrollIntoView({behavior:"smooth"});
}

// Pesquisa
search.addEventListener("input", showRecipes);

// Categorias
document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category;

        document.querySelectorAll("[data-category]").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        details.hidden = true;

        showRecipes();
    });
});

// Inicialização
document.querySelector('[data-category="Todas"]').classList.add("active");

showRecipes();
