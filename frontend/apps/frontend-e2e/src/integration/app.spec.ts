import { getGreeting } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to the game!');
  });

  it('should let you set a username', () => {
    cy.get('#usr').type('userName');
  })

  it('should let you start a game', () => {

    cy.server();
    cy.route('POST', '/api/games*', 'fixture:new-game.json').as('getNewGame');

    cy.get('#usr').type('userName');
    cy.get('button.btn-primary').click();

    cy.wait('@getNewGame').its('url').should('include', 'userName=userName');

    cy.get('h1').should('contain', 'Game on!');
  });

  it('should let you check the scores', () => {
    cy.server();
    cy.route('GET', '/api/games', 'fixture:scores.json').as('getScores');
    cy.get('button.btn-link').click();

    cy.get('h1').should('contain', 'High Scores');

    cy.get('li').should('have.length', 10);
  });
});
