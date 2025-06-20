describe('Покупка нового аватара для своего тренера', function () {

it('е2е тест на покупку гового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.ru/');                         // зАШЛИ НА САЙТ
         cy.wait(2000);     

         cy.get('#k_email').type('USER_LOGIN');              // ВВЕЛИ ПРАВИЛЬНЫЙ ЛОГИН
         cy.get('#k_password').type('USER_PASSWORD');                       // ВВЕЛИ ПРАВИЛЬНЫЙ ПАРОЛЬ
         cy.get('.MuiButton-root').click();                            // НАШЛИ КНОПКУ "ВОЙТИ" И НАЖАЛИ НА НЕЁ
         cy.wait(2000);

         cy.get('.header_card_trainer').click();                       // НАШЛИ КНОПКУ "ID ТРЕНЕРА" И НАЖАЛИ НА НЕЁ
         cy.get('.header_card_trainer_id_num').contains('36237');      // ПРОВЕРЯЮ, ЧТО ID ТРЕНЕРА "36237"
         cy.get('.header_card_trainer_id_num').should('be.visible');   // ПРОВЕРЯЮ, ЧТО ТЕКСТ "36237" ВИДЕН ПОЛЬЗОВАТЕЛЮ
         cy.wait(2000);

         cy.get('.k_mobile > :nth-child(5)').click();                  // НАШЛИ КНОПКУ "СМЕНА АВАТАРА" И НАЖАЛИ НА НЕЁ
         cy.wait(2000);

         cy.get('.available > button').first().click();                // НАЖИМАЕМ "КУПИТЬ" У ПЕРВОГО ДОСТУПНОГО АВАТАРА
         cy.wait(2000);

         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996');  // ВВОДИМ НОМЕР КАРТЫ
         cy.get('.card_csv').type('125');                             // ВВОДИМ CVV КАРТЫ
         cy.get('.card_date').type('1226');                           // ВВОДИМ СРОК ДЕЙСТВИЯ КАРТЫ
         cy.get('.card_name').type('NAME');                           // ВВОДИМ ИМЯ ВЛАДЕЛЬЦА КАРТЫ
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // НАЖИМАЕМ КНОПКУ "ОПЛАТИТЬ"
         cy.wait(2000);

         cy.get('.style_1_base_input').type('56456');                                            // ВВОДИМ КОД ПОДТВЕРЖДЕНИЯ СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // НАЖИМАЕМ КНОПКУ "ОПЛАТИТЬ"
         cy.wait(2000);
        
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');                 //ПРОВЕРЯЮ СТАТУС, ЧТО "Покупка прошла успешно"
         cy.get('.payment_status_top_title').should('be.visible');                               //ПРОВЕРЯЮ, ЧТО СТАТУС "Покупка прошла успешно" ВИДИМЫЙ
      
      });
 })
