const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs2-oglobo.glbimg.com%2FMD1_gg8cx1FgBBx_ZIKBSci1YPA%3D%2F0x0%3A1361x907%2F888x0%2Fsmart%2Ffilters%3Astrip_icc()%2Fi.s3.glbimg.com%2Fv1%2FAUTH_da025474c0c44edd99332dddb09cabe8%2Finternal_photos%2Fbs%2F2023%2F5%2FB%2F5cdNh1RqeRocBOLQRs2g%2Fadega-santiago-ambiente-credito-rodrigo-azevedo-8-1-.jpg&tbnid=2CdpW8M0NMRHjM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygBegQIARB3..i&imgrefurl=https%3A%2F%2Foglobo.globo.com%2Frio%2Fbairros%2Fbarra%2Fnoticia%2F2023%2F07%2F23%2Fa-vista-e-cortesia-da-casa-uma-selecao-de-restaurantes-com-cenarios-de-tirar-o-folego-na-area-da-barra-da-tijuca-e-nao-so-na-praia.ghtml&docid=Vvsu2-6xQ63UPM&w=888&h=592&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygBegQIARB3.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2018%2F10%2Falex-atala-gastronomia-perfil-icone-vip-4.png%3Fw%3D1024&tbnid=vHE1CoEmpzquZM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygEegQIARB9..i&imgrefurl=https%3A%2F%2Fexame.com%2Fcasual%2F9-restaurantes-brasileiros-estao-entre-os-50-melhores-da-america-latina%2F&docid=MwaYdD0zD36YPM&w=1024&h=682&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygEegQIARB9-16q.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fservircomrequinte.francobachot.com.br%2Fwp-content%2Fuploads%2F2020%2F08%2Fpost_thumbnail-5119340b39b314917440ed22562078eb.jpg&tbnid=jPFJ12zOREvsoM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygHegUIARCDAQ..i&imgrefurl=https%3A%2F%2Fservircomrequinte.francobachot.com.br%2Ftipos-de-restaurantes%2F&docid=A7caoIpQ7gV8QM&w=1388&h=927&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygHegUIARCDAQ-b102-42b7e150ced2-16r.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fviagemegastronomia%2Fwp-content%2Fuploads%2Fsites%2F5%2F2023%2F01%2Fnoma-dinamarca-restaurante-e1673282816848.jpeg%3Fw%3D1080%26h%3D674%26crop%3D1&tbnid=zIQXZxzb7WErWM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygMegUIARCNAQ..i&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fviagemegastronomia%2Fgastronomia%2Fnoma-um-dos-melhores-restaurantes-do-mundo-anuncia-que-fechara-as-portas-em-2024%2F&docid=Hz3CfOllw8v27M&w=1080&h=674&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygMegUIARCNAQ-16s.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.nsctotal.com.br%2Fwp-content%2Fuploads%2F2023%2F09%2FWhatsApp-Image-2023-09-21-at-11.30.50-1-944x531.jpeg&tbnid=qcPOfkNhbWFIvM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygPegUIARCTAQ..i&imgrefurl=https%3A%2F%2Fwww.nsctotal.com.br%2Fcolunistas%2Fleo-coelho%2Fguia-revela-os-melhores-restaurantes-em-florianopolis-veja-lista&docid=svA3XuNLTVYqsM&w=944&h=531&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygPegUIARCTAQ-16t.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.goomer.com.br%2Fwp-content%2Fuploads%2F2016%2F10%2F6-dicas-para-deixar-o-seu-restaurante-moderno.jpeg&tbnid=0S5WPWHDdHSTpM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygfegUIARC5AQ..i&imgrefurl=https%3A%2F%2Fblog.goomer.com.br%2F6-dicas-para-deixar-o-seu-restaurante-moderno%2F&docid=sIerB3sD1G-17M&w=999&h=665&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygfegUIARC5AQ-64af78864494-16u.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fnosnochile.com.br%2F2022%2Fwp-content%2Fuploads%2F2022%2F08%2FRestaurante-La-Dicha7.jpg&tbnid=3Er17aqvvrQ8vM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygregUIARDRAQ..i&imgrefurl=https%3A%2F%2Fnosnochile.com.br%2Frestaurantes-em-santiago-do-chile-conheca-os-6-mais-requintados%2F&docid=naSMogsHaYVyhM&w=2402&h=1074&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMygregUIARDRAQ-16v.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Finvexo.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F01%2Ftacas-na-mesa-restaurantes-jardim-oceanico-rio-de-janeiro.jpg&tbnid=PjAG9cJp6LQTGM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyg1egUIARDqAQ..i&imgrefurl=https%3A%2F%2Finvexo.com.br%2Fblog%2Frestaurantes-jardim-oceanico%2F&docid=I0kWuqOnt80gmM&w=1200&h=796&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyg1egUIARDqAQ-0cd1dcd043f9-16w.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fuploads.metropoles.com%2Fwp-content%2Fuploads%2F2022%2F11%2F22002411%2FRestaurante-DOM-Foto-Ricardo-DAngelo_2862-co%25CC%2581pia.jpg&tbnid=_jYAAx5W1fQ0lM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyg6egUIARD0AQ..i&imgrefurl=https%3A%2F%2Fwww.metropoles.com%2Fsao-paulo%2Froteiro-sp%2Frestaurantes%2Fo-que-comer-nos-7-restaurantes-de-sp-entre-os-top-50-da-america-latina&docid=ViZmFpdkDWurPM&w=1280&h=800&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyg6egUIARD0AQ.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fbrasilturis.com.br%2Fstorage%2F2023%2F09%2FLa-Loggia-Restaurant-1280x640.jpg&tbnid=B28wsvNB0LYVKM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyg_egUIARD-AQ..i&imgrefurl=https%3A%2F%2Fbrasilturis.com.br%2F2023%2F09%2F26%2Fmsc-grandiosa-confira-detalhes-dos-restaurantes-do-navio%2F&docid=TmIoxUKS8nPXRM&w=1280&h=640&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyg_egUIARD-AQ.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fguiaviajarmelhor.com.br%2Fwp-content%2Fuploads%2F2023%2F06%2Frestaurantes-bem-avaciados-em-sp13.jpg&tbnid=sFGpehlOO9Y6sM&vet=12ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyhFegUIARCKAg..i&imgrefurl=https%3A%2F%2Fguiaviajarmelhor.com.br%2Fonde-comer-em-sao-paulo-14-restaurantes-bem-avaliados%2F&docid=q9HwFhBIsAL6jM&w=2362&h=1555&q=restaurantes&ved=2ahUKEwjy3pWVxYiEAxXrErkGHdVfDgIQMyhFegUIARCKAg-17k.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.bristolhoteis.com.br%2Fwp-content%2Fuploads%2Felementor%2Fthumbs%2Fbistrodavila-omqis661gpa21sfdxhpx5o0nfi460lqg0r25x6jmvi.jpg&tbnid=Z_BGk4HyZmnH-M&vet=10CA8QMyhuahcKEwi4t9GRxoiEAxUAAAAAHQAAAAAQbA..i&imgrefurl=https%3A%2F%2Fwww.bristolhoteis.com.br%2Fdica-gastronomica-4-restaurantes-incriveis-em-morretes-pr%2F&docid=E7uAB5FTo6SgSM&w=980&h=603&q=restaurantes&ved=0CA8QMyhuahcKEwi4t9GRxoiEAxUAAAAAHQAAAAAQbA-17l.png",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fnaturam.com.br%2Fwp-content%2Fuploads%2F2022%2F01%2F2-restaurantes-ubatuba-raizes-5.jpg&tbnid=JXOSVsr6cM0MEM&vet=10CBcQMyhyahcKEwi4t9GRxoiEAxUAAAAAHQAAAAAQbA..i&imgrefurl=https%3A%2F%2Fnaturam.com.br%2Frestaurantes-em-ubatuba%2F&docid=hbl7TEhOYQXWvM&w=1000&h=500&q=restaurantes&ved=0CBcQMyhyahcKEwi4t9GRxoiEAxUAAAAAHQAAAAAQbA",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.viajali.com.br%2Fwp-content%2Fuploads%2F2023%2F07%2Frestaurantes-rio-de-janeiro-00.png&tbnid=AyLX4rzUp3zOaM&vet=10CFYQMyiPAWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEGw..i&imgrefurl=https%3A%2F%2Fwww.viajali.com.br%2Frestaurantes-rio-de-janeiro%2F&docid=5auzlPWaSqroDM&w=1200&h=740&q=restaurantes&ved=0CFYQMyiPAWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEGw",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fall.accor.com%2Fmagazine%2Fimagerie%2Frestaurante-vila-conte-sp-afa4.jpg&tbnid=5FJ4wbqkibyuiM&vet=10CHYQMyicAWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEGw..i&imgrefurl=https%3A%2F%2Fall.accor.com%2Fpt-br%2Fbrasil%2Fmagazine%2Fone-hour-one-day-one-week%2Frestaurante-romantico-em-sao-paulo-17-lugares-incriveis-e-dicas-6c8ce.shtml&docid=hWA1QhcDgQQnJM&w=660&h=495&q=restaurantes&ved=0CHYQMyicAWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEGw",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Fparisabor.com%2Fwp-content%2Fuploads%2F2018%2F08%2F58-restaurante-dentro-da-torre-eiffel.jpg%3Ffit%3D1366%252C909%26ssl%3D1&tbnid=JX2_jaibnHOvGM&vet=10CJQBEDMoqwFqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBs..i&imgrefurl=https%3A%2F%2Fparisabor.com%2Frestaurantes-dentro-da-torre-eiffel%2F&docid=HgS7NY7d67jBVM&w=1366&h=909&q=restaurantes&ved=0CJQBEDMoqwFqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBs",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Festacionamentopatioconfins.com.br%2Fwp%2Fwp-content%2Fuploads%2F2019%2F09%2Fsalao_caipira_03.jpg&tbnid=q5mrNy2EzpXivM&vet=10CKsBEDMotAFqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBs..i&imgrefurl=https%3A%2F%2Festacionamentopatioconfins.com.br%2Fwp%2F10-top-restaurantes-na-pampulha-bh%2F&docid=Ux_7IzBuZIj92M&w=1024&h=683&q=restaurantes&ved=0CKsBEDMotAFqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBs",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fviagemegastronomia%2Fwp-content%2Fuploads%2Fsites%2F5%2F2022%2F03%2FSelvagem_Projeto2.jpeg%3Fw%3D1200%26h%3D900%26crop%3D1&tbnid=Qkr6gq2u6tr-vM&vet=10CNgBEDMoyAFqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBs..i&imgrefurl=https%3A%2F%2Fwww.cnnbrasil.com.br%2Fviagemegastronomia%2Fgastronomia%2Fparque-ibirapuera-em-sao-paulo-ganha-restaurante-de-comida-brasileira%2F&docid=RwslRbcvzgAaYM&w=1200&h=720&q=restaurantes&ved=0CNgBEDMoyAFqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBs",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsarahpenido.com.br%2Fwp-content%2Fuploads%2F2022%2F05%2F1decoracao-rustica-para-restaurantes-emporio-goiano.jpg&tbnid=mvdmq3uW-Q9_xM&vet=10CE8QMyjzAWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEG0..i&imgrefurl=https%3A%2F%2Fsarahpenido.com.br%2Fdecoracao-rustica%2F&docid=zJmWboBeP3zk1M&w=1024&h=683&q=restaurantes&ved=0CE8QMyjzAWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEG0",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.guiadasemana.com.br%2FcontentFiles%2Fimage%2F2016%2F12%2FFEA%2Fprincipal%2F53453_w840h0_1481303295badaue-maresias.jpg&tbnid=KDSz-bfOGps3mM&vet=10CFUQMyj2AWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEG0..i&imgrefurl=https%3A%2F%2Fwww.guiadasemana.com.br%2Fgastronomia%2Fgaleria%2Frestaurantes-pe-na-areia-para-conhecer-neste-verao-no-litoral-de-sp&docid=L1DsPcLYzgLOtM&w=840&h=525&q=restaurantes&ved=0CFUQMyj2AWoXChMIuLfRkcaIhAMVAAAAAB0AAAAAEG0",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fguiaviajarmelhor.com.br%2Fcl_resize%2FL4sVLoxplY1WkkxCUizPXrJ_T_gqNnqW-hccbIPuGPs%2Frs%3Afill%3A500%3A0%2Fg%3Ace%2Fq%3A70%2FaHR0cHM6Ly9ndWlhdmlhamFybWVsaG9yLmNvbS5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wNi9yZXN0YXVyYW50ZXMtYmVtLWF2YWNpYWRvcy1lbS1zcDItMTAyNHg1ODkucG5n&tbnid=pqRHwVT_4FlUwM&vet=10CJsBEDMolAJqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBt..i&imgrefurl=https%3A%2F%2Fguiaviajarmelhor.com.br%2Fonde-comer-em-sao-paulo-14-restaurantes-bem-avaliados%2F&docid=q9HwFhBIsAL6jM&w=500&h=288&q=restaurantes&ved=0CJsBEDMolAJqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBt",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.emporioluz.com.br%2Fwp-content%2Fuploads%2F2021%2F08%2FIluminacao-Restaurante-Pendentes-e1628882327157.png&tbnid=JrwtbwgcJUYniM&vet=10COUBEDMotgJqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBt..i&imgrefurl=https%3A%2F%2Fwww.emporioluz.com.br%2Fblog%2Fa-iluminacao-ideal-para-restaurantes%2F&docid=zWaEF1ULI7I-yM&w=1080&h=772&q=restaurantes&ved=0COUBEDMotgJqFwoTCLi30ZHGiIQDFQAAAAAdAAAAABBt",
      
    ];
    // Nomes criativos para restaurantes
    const creativeNames = [
      "Fogão a lenha",
      "Forno a lenha",
      "Panela de ferro",
      "Delícias na panela",
      "Bom de garfo",
      "Recando mineiro",
      "Massas & Sabores",
      "La gastronomie ",
      "Requinte gourmet",
      "Madeira & Tempero",
    ];

    // Endereços fictícios para restaurantes
    const addresses = [
      "Rua da Barbearia, 123",
      "Avenida dos Cortes, 456",
      "Praça da Barba, 789",
      "Travessa da Navalha, 101",
      "Alameda dos Estilos, 202",
      "Estrada do Machado, 303",
      "Avenida Elegante, 404",
      "Praça da Aparência, 505",
      "Rua Urbana, 606",
      "Avenida Clássica, 707",
      "Isabel Garcia Marques, 151",
    ];

    const services = [
      {
        name: "Paillard de filet",
        description: "Paillard de filet, recheado com queijo emmental, acompanha risoto de palmito com alho poró.",
        price: 150.0,
        imageUrl: "https://www.socialbauru.com.br/wp-content/uploads/2019/09/categoria-prato-principal-1.jpg",
      },
      {
        name: "Gold arripa mustard",
        description: "Costela suína pincelada com molho Barbecue Mustard Old Gold, acompanha purê com totopos, bacon e chimichurri.",
        price: 89.0,
        imageUrl: "https://www.socialbauru.com.br/wp-content/uploads/2019/09/categoria-prato-principal-2.jpg",
      },
      {
        name: " Steak tartare",
        description: "Steak tartare com batatas rústicas e mix de folhas com rabanete laminadas e tomate cereja        .",
        price: 59.0,
        imageUrl: "https://www.socialbauru.com.br/wp-content/uploads/2019/09/categoria-prato-principal-3.jpg",
      },
      {
        name: "Risoto de cogumelos com ancho",
        description: "Risoto de shitake e funghi acompanhado de bife ancho angus grelhado na parrilla com manteiga e tomilho.",
        price: 48.0,
        imageUrl: "https://www.socialbauru.com.br/wp-content/uploads/2019/09/categoria-prato-principal-5.jpg",
      },
      {
        name: " Salmão defumado",
        description: "Salmão defumado com purê de funghi secchi e chutney de manga.",
        price: 90.0,
        imageUrl: "https://www.socialbauru.com.br/wp-content/uploads/2019/09/premioimpera2019-principal-fants-1024x683-1.jpg",
      },
      {
        name: " Tonkotsu missô lámen",
        description: "Macarrão especial de lámen em caldo encorpado de missô levemente apimentado, acompanhado com 8 fatias de lombo cozido em redução teriaki.",
        price: 56.0,
        imageUrl: "https://www.socialbauru.com.br/wp-content/uploads/2019/09/premioimpera2019-principal-hiros-1024x683-1.jpg",
      },
    ];

    // Criar 10 barbearias com nomes e endereços fictícios
    const restaurantes = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const restaurante = await prisma.restaurante.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
        },
      });

      for (const service of services) {
        await prisma.service.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            restaurante: {
              connect: {
                id: restaurante.id,
              },
            },
          },
        });
      }

      restaurantes.push(restaurante);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os restaurantes:", error);
  }
}

seedDatabase();