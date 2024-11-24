/// <reference types="cypress" />

describe("Execução de ações na interface gráfica do site", () => {
  const jogos = [
    "Cyberpunk 2077",
    "The Witcher 3",
    "Counter-Strike 2",
    "Balatro",
    "Hollow Knight",
  ];

  function pesquisarJogo(jogo) {
    cy.get("#store_nav_search_term").clear().type(jogo);
    cy.get("#store_search_link > img").click();
    cy.get(".responsive_search_name_combined .search_name .title")
      .contains(jogo)
      .should("be.visible");
    cy.go("back");
  }

  it("Teste de pesquisa de jogos existentes", () => {
    cy.visit("https://store.steampowered.com/?l=portuguese");

    jogos.forEach((jogo) => {
      pesquisarJogo(jogo);
    });
  });

  const jogosInexistentes = [
    "League of Legends",
    "The Legend of Zelda: Breath of the Wild",
    "Pokemon Platinum",
    "Call of Duty®: Edição Tigrão",
  ];

  function pesquisarJogoInexistente(jogo) {
    cy.get("#store_nav_search_term").clear().type(jogo);
    cy.get("#store_search_link > img").click();

    cy.get(".search_results").then((resultados) => {
      if (resultados.find(".search_result_row").length === 0) {
        cy.get(".search_results_count")
          .invoke("text")
          .should("include", "0 resultados correspondem à sua busca.");
      } else {
        cy.get(".search_result_row .title").each(($titulo) => {
          cy.wrap($titulo)
            .invoke("text")
            .then((textoTitulo) => {
              expect(textoTitulo.toLowerCase()).not.to.equal(
                jogo.toLowerCase()
              );
            });
        });
      }
    });

    cy.go("back");
  }

  it("Teste de pesquisa de jogos inexistentes", () => {
    cy.visit("https://store.steampowered.com/?l=portuguese");

    jogosInexistentes.forEach((jogo) => {
      pesquisarJogoInexistente(jogo);
    });
  });

  it("Adicionar item ao carrinho com sucesso", () => {
    cy.visit("https://store.steampowered.com/?l=portuguese");

    cy.get("#store_nav_search_term").clear().type("Hollow Knight");
    cy.get("#store_search_link > img").click();
    cy.get(
      '[href="https://store.steampowered.com/app/367520/Hollow_Knight/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title'
    ).click();
    cy.get("#btn_add_to_cart_66613 > span").click();
    cy.get(".bCGAC51za6R_thjPd7_vw").should(
      "contain.text",
      "Adicionado ao carrinho!"
    );
  });
});
