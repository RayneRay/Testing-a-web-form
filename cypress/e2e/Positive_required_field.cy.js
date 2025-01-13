describe('App E2E', () => {
    it('Positive test', () => {
      cy.visit('https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template');
      cy.contains('Отправить').click()
    });
  });