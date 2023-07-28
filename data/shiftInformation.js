// assets
import LectureImage01 from '../public/images/lecture_imgs/01-Mindsight.jpeg'
import LectureImage02 from '../public/images/lecture_imgs/02-Lucas_Magon.png'
import LectureImage03 from '../public/images/lecture_imgs/03-Rodrigo_Ferreira.jpg'
import LectureImage04 from '../public/images/lecture_imgs/04-Luciano_Digiampietri.jpg'
import LectureImage05 from '../public/images/lecture_imgs/05-Ana_Paula_Frizzo.jpg'
import LectureImage06 from '../public/images/lecture_imgs/06-Fernando_Chiu_Hsieh.jpg'
import LectureImage07 from '../public/images/lecture_imgs/07-Lab_das_Minas.jpg'
import LectureImage08 from '../public/images/lecture_imgs/08-Ana_Ferreira.jpeg'

const shifts = {
    '2023-08-21' : {
        'Manhã': {
            '08:00' : {
                title : 'Abertura'
            },
            '09:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Inteligência Artificial - O que mudou nos dispositivos conectados e no desenvolvimento de software?',
                description : 'Jorge Maia é Arquiteto de soluções de IoT e Nuvem na CrazyTechLabs desde 2014. Reconhecido como Learn Expert e Regional Lead para Treinadores Certificados pela Microsoft, que também o premiou nos últimos 7 anos o MVP (Most Valuable Professional) na categoria de Azure e IoT, é também Mestre em Sistemas Mecatrônicos e Doutorando no tema.\n Nesta sessão ele discutirá com a audiência sobre o panorama de soluções conectadas e também sobre as evoluções no desenvolvimento de software com a chegada do GPT e outras ferramentas de IA.',
                local : 'presential',
                speakers : [
                    {'name' : 'Jorge Maia', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' 
            },
            '12:20' : {
                title : 'Almoço'
            }
        },
        'Tarde' : {
            '13:20' : {
                title : 'Ciência de Dados (não achei na planilha)',
                description : 'Não achei o que esse cara vai fazer na planilha.',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Fernando De Come', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Desmistificando a carreira em tecnologia: de estágio a liderança técnica',
                description : 'Estudo programação desde 2013, atualmente sou líder técnica , minha especialidade é Java com Spring, Microsserviços e AWS. Sou co-autora dos livros Jornada Java e Jornada Microsserviços , crio conteúdo no Instagram e Youtube Kamila code e sou Microsoft MVP. Nessa palestra vou tirar suas maiores dúvidas sobre as etapas da carreira em tecnologia, desde como conseguir o primeiro estagio até uma cargo de liderança técnica',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Kamila Santos Oliveira ', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/}
                ],
                image: ''
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Segurança da Informação (Tá estranho na planilha)',
                description : 'Não achei nada na planilha',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Larissa Benevides', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            }
        } 
    },
    '2023-08-22' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Modularização: Vantagens e desvantagens',
                description : 'Formada em Sistemas de Informação, pós graduada em Engenharia de Software pela UNICAMP e atualmente cursando a segunda pós graduação em Arquitetura de Software. Com mais de 10 anos de experiência em desenvolvimento, dos quais 5 deles focada em desenvolvimento Mobile (Android). No tema da palestra de hoje, o intuito é abordar a modularização de um aplicativo: O que significa modularizar, quais as vantagens, desvantagens, riscos e algumas formas de realizar tal modularização.',
                local : 'presential',
                speakers : [
                    {'name' : 'Aline Souza', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' 
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Data Science skills: O que o mercado busca?',
                description : 'O que te diferencia em um mercado em constante crescimento tal qual como a área de dados? Dentre os principais perfis, o cientista de dados, ganhou um espaço considerável em diversas organizações e empresas. Ainda assim, muitos podem ficar confusos com o vasto número de conhecimento necessário na área. Venha entender quais são as principais skills de um cientista de dados para o mercado em 2023. ',
                local : 'online',
                speakers : [
                    {'name' : 'Juliana Mascarenhas', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/}
                ],
                image: ''
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Trabalhando com Game Design no Brasil',
                description : 'Davi Baptista é um Game Designer e Sound Designer em São Paulo, experiente na criação de jogos 2D e 3D na Unity. Atualmente, trabalha como Game Designer na Dumativa e é cofundador da Nano Knight Studio. Trabalhando com Game Design no Brasil. A palestra vai tratar sobre a realidade de ser um profissional da área, falando um pouco sobre os desafios da área, rotina, e o que é necessário para conseguir viver de games.',
                local : 'presential',
                speakers : [
                    {'name' : 'Davi Arcos Baptista', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' 
            }
        }
    },
    '2023-08-23' : {
        'Manhã' : {
            '08:40' : {
                title : 'Blockchain além das Criptomoedas',
                description : 'Líderes de vanguarda construíram redes em blockchain para reinventar seus negócios, mas o potencial desta tecnologia vai muito além do que vemos hoje em produção. Nesta palestra, Carlos Rischioto, Arquiteto líder e Blockchain SME da IBM no Brasil, apresentará casos de uso de Blockchain que estão em produção, com alto volume de transações e trará exemplos de diferentes Industrias que estão testando esta tecnologia para revolucionar seus negócios.',
                local : 'online',
                speakers : [
                    {'name' : 'Carlos Rischioto', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' 
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Segurança da Informação: Conheça uma das profissões mais promissoras do mercado',
                description : 'Conheça sobre uma das profissões mais promissoras do mercado de tecnologia e descubra que a segurança das informações também é uma responsabilidade sua! Meirylene Avelino é Analista de Segurança da Informação, Graduada e Mestre em Ciência da Computação, com linha de Pesquisa em garantia de autenticidade de conteúdos web utilizando Blockchain. Especialista em gestão de acessos privilegiados, IAM e implantação e arquiteturas de soluções de PAM. Palestrante em eventos sobre temas correlatos a tecnologia e a Segurança da Informação. Voluntária em projetos de diversidade de gêneros em carreiras de tecnologia. Realiza treinamentos de equipes em Segurança da Informação. Cocriadora e Idealizadora da GloboSec Week - Programa de integração entre academia e empresa com o objetivo de conscientizar e ensinar sobre Segurança da Informação e descobrir novos talentos para a área de Cybersecurity da Globo. Recebeu o XIV Prêmio Josué de Castro de Extensão, pela Universidade Federal Fluminense, na 21 Semana de Extensão da Universidade. Indicada para a premiação Woman that Build Awards da Globant 2022. Membro da CSBC Sociedade Brasileira de Computação. Voluntária no WOMCY Reconhecida pela instituição Daryus como uma das TOP 20 mulheres mais influentes em Segurança da Informação.',
                local : 'online',
                speakers : [
                    {'name' : 'Meirylene Avelino', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/}
                ],
                image: ''
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Introdução a Process Mining - percepções sobre pesquisa e mercado de trabalho',
                description : 'Sobre o palestrante: Possui graduação em Sistemas de Informação pela Universidade de São Paulo (2015) e doutorado direto em andamento em Sistemas de Informação pela Universidade de São Paulo. Atualmente é cientista de dados senior no Itau Unibanco, com 9 anos de experiência no tema Analytics e 5 anos no tema Ciência de Dados. Sobre a palestra: O objetivo da palestra será a introdução do tema Process Mining e o compartilhamento das experiências do palestrante sobre pesquisa cientifica e exemplos de uso no mercado de trabalho sobre este tema.',
                local : 'presential',
                speakers : [
                    {'name' : 'Antonio Carlos Meira Neto', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},,
                ],
                image: ''
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Descomplicando as Entrevistas',
                description : 'Sou a Carol, formada em Sistemas de Informação na EACH, e atualmente atuo como desenvolvedora de back-end pleno na PagSeguro. Apaixonada por tecnologia, decidi compartilhar minha jornada em uma palestra sobre os primeiros passos na busca por um estágio e entrevistas técnicas. Abordaremos dicas valiosas para se destacar em entrevistas técnicas e os assuntos mais comuns abordados nesses processos. ',
                local : 'presential',
                speakers : [
                    {'name' : 'Carolina Galvão de Oliveira', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Quem é essa tal de Experiência do Usuário? ',
                description : 'Vamos entender o que é UX e como ele faz parte do nosso cotidiano',
                local : 'presential',
                speakers : [
                    {'name' : 'Mayza Cristina da Silva', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            }
        }
    },
    '2023-08-24' : {
        'Manhã' : {
            '08:40' : {
                title : 'Como se tornar um Consultor SAP',
                description : 'Como se tornar um Consultor SAP',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Fazer Jogos NÃO É Arte',
                description : 'Eu sou o Ygor, Lead Game Designer na Tapps Games e criador de jogos a mais de 10 anos. E eu te pergunto: o que fazer um jogo e um cachorro-quente têm em comum? Se um jogo é feito em uma floresta e não há ninguém para jogá-lo, ele faz sucesso? A resposta para essas (e muitas outras perguntas estapafúrdias) você encontra nessa palestra, onde falaremos do processo de criação de novos jogos, da validação de conceitos, das fases de produção, de prototipagem e de inovação de jogos digitais. Se você sempre quis fazer seu jogo ou acha que, se você fizesse um, ele seria melhor que todos outros, essa palestra [talvez] seja pra você!',
                local : 'presential',
                speakers : [
                    {'name' : 'Ygor Speranza',  'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Criatividade Aplicada ao Design da Experiência do Usuário ',
                description : 'Nesta palestra, será explorada a importância do pensamento divergente como base para a criatividade. Partindo do questionamento "Como podemos ser (mais) criativos?", serão apresentadas formas para idear produtos desejáveis, praticáveis e viáveis, que consideram aspectos sobre sustentabilidade e inovação voltados para o desenvolvimento de produtos digitais e UX Design. Silvia doutora em Engenharia, bacharela e mestra em Design que sempre buscou a ampliação do seu conhecimento por meio de estudos transdisciplinares, articulando disciplinas tecnológicas e das humanidades, na busca da compreensão da complexidade. Atualmente é professora do curso de Design da Famecos, líder de projetos no IDEAR - Laboratório Interdisciplinar de Empreendedorismo e Inovação da PUCRS e membro do Núcleo de Inovação Pedagógica da PUCRS. ',
                local : 'online',
                speakers : [
                    {'name' : 'Silvia Trein Heimfarth Dapper ', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},

                ],
                image: ''
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '17:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : 'Acessibilidade em Produtos Digitais. ',
                description : 'Designer carioca com muita determinação em aprender e crescer! Pensando em ajudar Designers que entram no mercado de trabalho, fundei a comunidade "Jovens Ux e Ui", com o objetivo de aprimorar os profissionais que estão ingressando no mercado de Ux / Ui. Esse aprimoramento compreende todas as etapas de uma formação de um profissional de Ux e Ui. Em busca desse aperfeiçoamento incorporamos pontos específicos como: Acessibilidade, Portfólio e mentorias. Como Accessibility Product Design, busco uma constante evolução das minhas Hards Skills e Soft Skills. Tanto em projetos pessoais, quanto em projetos dentro da Bradesco Seguros (empresa em que atuo atualmente). Focando em acessibilidade, tenho como meta criar produtos acessíveis e que possam ser utilizado por tadas as pessoas. ',
                local : 'online',
                speakers : [
                    {'name' : 'Vitor David', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' 
            },
            '20:40' : {
                title : 'Explorando tecnologias imersivas: AR, VR e metaverso e o impacto na sociedade e negócios ',
                description : 'Jefferson Brandão, desenvolvedor de realidade aumentada e fundador da Artech Studio, além de atualmente trabalhar como instrutor na Estação Hack from Meta, traz uma palestra inspiradora sobre inovação com tecnologias imersivas. Descubra como essas tecnologias impactam a sociedade e o futuro do metaverso. ',
                local : 'presential',
                speakers : [
                    {'name' : 'Jefferson Brandão', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            }
        }
    },
    '2023-08-25' : {
        'Manhã' : {
            '08:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '10:00' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '11:20' : {
                title : 'Diferentes formas de se fazer DevOps',
                description : 'Leonardo Leite recebeu o título de doutor em Ciência da Computação pelo IME USP em 2022. Desde 2014 é desenvolvedor de software no Serviço Federal Brasileiro de Processamento de Dados (Serpro), no qual apoiou com sucesso a implantação de práticas de DevOps, como a adoção de testes automatizados, pipelines de implantação, entrega contínua e monitoramento. Em seu doutorado, por meio de entrevistas com dezenas de profissionais de TI, Leonardo pesquisou como as organizações produtoras de software têm estruturado a divisão do trabalho e a interação entre profissionais de desenvolvimento e infraestrutura, ou seja, as "formas de se fazer DevOps". Nesta palestra você entenderá essas diferentes formas de se fazer DevOps e como uma delas, empregando times de plataforma, tem mostrado melhores resultados em termos de desempenho de entrega. Esta palestra é também uma prévia do livro "DevOps, como se faz? Dos silos aos times de plataforma", a ser lançado pela editora Casa do Código.',
                local : 'presential',
                speakers : [
                    {'name' : 'Leonardo Alexandre Ferreira Leite', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            },
            '12:20' : {
                title : 'Almoço'
            }

        },
        'Tarde' : {
            '13:20' : {
                title : 'Oficina de TDD + Pair programming',
                description : 'Desenvolvedora de software na Thoughtworks, LinkedIn Top Voice e Criadora de conteúdo no Quero Ser Dev. Ajudando a reduzir a lacuna de raça e gênero no mercado de tecnologia.',
                local : 'presential',
                speakers : [
                    {'name' : 'Simara Conceição do Nascimento', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: ''
            },
            '14:40' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '16:00' : {
                title : 'Arquiteturas de Processamento de Dados na Nuvem',
                description : 'Luiz Yanai é Mestre e Engenheiro de Computação pela POLI-USP e atualmente trabalha como especialista de analytics na Amazon Web Services. Nesta palestra vamos falar sobre cloud computing e como ela vem ajudando na transformação digital das empresas no mundo inteiro.',
                local : 'presential',
                speakers : [
                    {'name' : 'Luiz Yanai', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/}
                ],
                image: ''
            },
            '17:20' : {
                title : 'Carreira em desenvolvimento de jogos',
                description : 'Carreira em Desenvolvimento de Jogos. Uma visão geral sobre sobre as diferentes carreiras no mercado de games.',
                local : 'online',
                speakers : [
                    {'name' : 'Karol Attekita', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' 
            },
            '18:20' : {
                title : 'Jantar'
            }
        },
        'Noite' : {
            '19:20' : {
                title : '>>Completar<<',
                description : 'Aqui vem a descrição',
                local : 'presential',//ou online
                speakers : [
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                    {'name' : 'Nome do palestrante', 'website': 'https:semanadesi.com'/*Informações de contato*/, 'linkedin' : 'https://semanadesi.com', 'image': LectureImage02/*Aqui vem a imagem do palestrante*/},
                ],
                image: '' /* Se a palestra não tiver foto do palestrante, mas tiver alguma outra imagem, vem aqui */
            },
            '20:40' : {
                title : 'Encerramento',
            }
        }
    }
}

export default shifts