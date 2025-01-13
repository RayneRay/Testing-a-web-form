describe('App E2E', () => {
    it('Positive test', () => {
      cy.visit('https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template');
      cy.get('div[class="question question_107 question_type_1 question___df23e051d300eb092d0d"]')
        .find('input[type="string"]')
        .type('Иван')
  
      cy.get('div[class="question question_108 question_type_1 question___df23e051d300eb092d0d"]')
        .find('input[type="string"]')
        .type('Иванов@mail.ru')
  
      cy.get('div[class="title___bb675eac964120e07a92 searchable___f1c57fdf9d3d7789a720"]').click()
      cy.contains('Заказ').click()
  
      cy.get('div[class="question question_110 question_type_2 question___df23e051d300eb092d0d"]')
        .find('textarea[class="multiline___cc6bb61529c652f37050 control___e16bbac759474cb49f55 control___b7ae007d86d6ea2bb014 transparent___ff454935e0e05f508992"]')
        .type('Вы великолепны')
  
      cy.contains('Отправить').click()
    });
  });