/* eslint-disable no-undef, no-console*/
describe('Pokedex', function() {
  it('front page can be opened', function() {
    console.log('test started running')
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})