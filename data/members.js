const members = [
	{
		name: 'Alexandre Kira',
		image: '/images/co_members/AlexandreKira.jpg',
		departments: ['Diretoria', 'Site'],
		linkedin: 'https://www.linkedin.com/in/alexandre-kira/',
		phrase: 'Nada é impossível, exceto descobrir por que não compila',
	},
	{
		name: 'Amanda Ferreira',
		image: '/images/co_members/AmandaFerreira.jpg',
		departments: ['Palestrantes', 'Parcerias'],
		linkedin: 'https://www.linkedin.com/in/amandamariafs',
		phrase: 'Sim, minha primeira opção foi SI',
	},
	{
		name: 'Ana Bernardo',
		image: '/images/co_members/AnaBernardo.jpg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/ana-paula-b-/',
		phrase: 'Por que o programador Java nunca brinca de esconde-esconde? Porque ele sempre deixa seus public visíveis!',
	},
	{
		name: 'Ana Segal',
		image: '/images/co_members/AnaSegal.jpeg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/ana-clara-segal-50b55728a/',
		phrase: 'Mas é claro que é biscoito',
	},
	{
		name: 'Arthur Fioravante',
		image: '/images/co_members/ArthurFioravante.jpg',
		departments: ['Criação e Comunicação', 'Infraestrutura'],
		phrase: 'Minha vida é que nem um fusca usado, na descida o freio não aguenta e na subida não pega embalo.',
	},
	{
		name: 'Bruno Friedrich',
		image: '/images/co_members/BrunoFriedrich.png',
		departments: ['Comercial e Financeiro', 'Diretoria', 'Parcerias'],
		linkedin: 'https://www.linkedin.com/in/bruno-friedrich-raquel/',
		phrase: 'Essa música é nova para mim, mas me sinto honrado em fazer parte dela',
	},
	{
		name: 'Caio Bernardo',
		image: '/images/co_members/CaioBernardo.jpg',
		departments: ['Comercial e Financeiro', 'Site'],
		linkedin: 'https://www.linkedin.com/in/caio-bernardo-387300313/',
		phrase: 'Estudos indicam que quem participa da Semana de SI tem 1000% mais chances de arrumar o emprego do sonhos. Fonte: Arial',
	},
	{
		name: 'Caio Silva',
		image: '/images/co_members/CaioSilva.jpg',
		departments: ['Infraestrutura', 'Site'],
		linkedin: 'https://www.linkedin.com/in/caioviniciusmelodasilva',
		phrase: 'Essa é a melhor SSI, até o ano que vem',
	},
	{
		name: 'Catarina Macedo',
		image: '/images/co_members/CatarinaMacedo.jpg',
		departments: ['Palestrantes', 'Parcerias', 'Site'],
		linkedin: 'https://www.linkedin.com/in/catarina-de-macedo-scabelli-242876274',
		phrase: 'Escolhasss e consequênciasss',
	},
	{
		name: 'Clara Alves',
		image: '/images/co_members/ClaraAlves.jpeg',
		departments: ['Palestrantes'],
		phrase: 'SSI é sim a melhor entidade!',
	},
	{
		name: 'Clara Campardo',
		image: '/images/co_members/ClaraCampardo.jpg',
		departments: ['Criação e Comunicação'],
		phrase: 'Oi, tudo bem?',
	},
	{
		name: 'Daniel Countinho',
		image: '/images/co_members/DanielCoutinho.jpg',
		departments: ['Diretoria', 'Palestrantes', 'Parcerias'],
		phrase: 'Eu pensava que nós seguíamos caminhos já feitos, mas parece que não os há. O nosso ir faz o caminho.'
	},
	{
		name: 'Dérick Arriado',
		image: '/images/co_members/DerickArriado.jpeg',
		departments: ['Comercial e Financeiro'],
		linkedin: 'https://www.linkedin.com/in/d%C3%A9rick-dos-santos-arriado-b4725b308/',
		phrase: 'Siga o seu coração',
	},
	{
		name: 'Eduardo Araujo',
		image: '/images/co_members/EduardoAraujo.jpg',
		departments: ['Site'],
		linkedin: 'https://www.linkedin.com/in/finhawk/',
		phrase: 'Toda luta é um empate - 3º Lei de Newton',
	},
	{
		name: 'Emmily Boesing',
		image: '/images/co_members/EmmilyBoesing.jpg',
		departments: ['Criação e Comunicação', 'Diretoria'],
		linkedin: 'https://www.linkedin.com/in/emmily-boesing',
		phrase: 'O ontem é história, o amanhã é um mistério, mas o hoje é uma dádiva, é por isso que se chama presente.',
	},
	{
		name: 'Eric Chou',
		image: '/images/co_members/EricChou.jpg',
		departments: ['Criação e Comunicação', 'Infraestrutura'],
		phrase: 'printf("Frase pessoal ou de efeito\\n");'
	},
	{
		name: 'Felipe Colona',
		image: '/images/co_members/FelipeColona.jpg',
		departments: ['Parcerias'],
		linkedin: 'https://www.linkedin.com/in/felipe-colona',
		phrase: 'Viva o open source!',
	},
	{
		name: 'Francisco Gomes',
		image: '/images/co_members/FranciscoGomes.jpg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/franciscogjr',
		phrase: '👽 Eu já tive uma cabra.',
	},
	{
		name: 'Giane Mayumi',
		image: '/images/co_members/GianeMayumi.jpg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/gianemayumi/',
		phrase: 'Semana de Semana de Sistemas de Informação',
	},
	{
		name: 'Giovanna Albuquerque',
		image: '/images/co_members/GiovannaAlbuquerque.jpg',
		departments: ['Criação e Comunicação'],
		linkedin: 'https://www.linkedin.com/in/giovanna-albuquerque-a42763262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
		phrase: 'Front-end é programação sim!',
	},
	{
		name: 'Gustavo Pompermayer',
		image: '/images/co_members/GustavoPompermayer.jpg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/gustavofulanetti',
		phrase: 'Oi, me indica no seu trampo?',
	},
	{
		name: 'Gustavo Sá',
		image: '/images/co_members/GustavoSa.jpg',
		departments: ['Criação e Comunicação', 'Diretoria', 'Site'],
		linkedin: 'https://linkedin.com/in/gustavohls',
		phrase: 'Mas é claro que IHC é melhor disciplina do curso',
	},
	{
		name: 'Helena Furtado',
		image: '/images/co_members/HelenaFurtado.jpg',
		departments: ['Diretoria'],
		linkedin: 'https://www.linkedin.com/in/helenacf',
		phrase: 'Caso contrário, não',
	},
	{
		name: 'Karina Yang',
		image: '/images/co_members/KarinaYang.jpeg',
		departments: ['Comercial e Financeiro', 'Palestrantes'],
		linkedin: 'http://linkedin.com/in/kayangch',
		phrase: 'Dormir é bom 😌',
	},
	{
		name: 'Lion Chen',
		image: '/images/co_members/LionChen.jpg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/lion-chen-a89a36299',
		phrase: 'SI S2',
	},
	{
		name: 'Lucas Antunes',
		image: '/images/co_members/LucasAntunes.png',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/lucas-fernandes-antunes-6b2073260',
		phrase: 'segmentation fault',
	},
	{
		name: 'Lucas Leão',
		image: '/images/co_members/LucasLeao.jpeg',
		departments: ['Palestrantes'],
		linkedin: 'https://www.linkedin.com/in/lucas-le%C3%A3o-73b558309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
		phrase: 'Esse semestre vai acabar comigo',
	},
	{
		name: 'Marcio Lopes',
		image: '/images/co_members/MarcioLopes.jpg',
		departments: ['Palestrantes', 'Parcerias', 'Site'],
		linkedin: 'https://www.linkedin.com/in/marcio-lopes-ol',
		phrase: 'Funciona no meu computador!',
	},
	{
		name: 'Mariana Borges',
		image: '/images/co_members/MarianaBorges.jpg',
		departments: ['Diretoria', 'Parcerias'],
		linkedin: 'https://www.linkedin.com/in/mariana-borges-araujo-da-silva-73a001272/',
		phrase: 'Todo dia um bug novo pra enfrentar.',
	},
	{
		name: 'Miguel Silva',
		image: '/images/co_members/MiguelSilva.jpg',
		departments: ['Site'],
		linkedin: 'https://www.linkedin.com/in/miguel-silva-6a550a217/',
		phrase: 'Código limpo, mente afiada, futuro brilhante.',
	},
	{
		name: 'Rafaela Santana',
		image: '/images/co_members/RafaelaSantana.jpeg',
		departments: ['Palestrantes'],
		phrase: 'Estudem orientação objeto',
	},
	{
		name: 'Rebecka Bocci',
		image: '/images/co_members/RebeckaBocci.jpg',
		departments: ['Criação e Comunicação', 'Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/rebecka-bocci-domingues-399157325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
		phrase: 'Sim, o bandeco salva vidas',
	},
	{
		name: 'Rômulo Júnior',
		image: '/images/co_members/RômuloJúnior.jpg',
		departments: ['Infraestrutura'],
		linkedin: 'https://www.linkedin.com/in/romulojr1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
		phrase: 'TI por dinheiro. DASI por amor!',
	},
	{
		name: 'Samuel Silva',
		image: '/images/co_members/SamuelSilva.jpeg',
		departments: ['Diretoria', 'Palestrantes'],
		linkedin: 'https://br.linkedin.com/in/samuel-asilva',
		phrase: 'Torne-se o seu sonho! ✨',
	},
];
export default members;
