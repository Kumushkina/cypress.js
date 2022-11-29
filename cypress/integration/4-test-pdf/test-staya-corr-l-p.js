describe('Тестирование staya.dog', function () {

    it('Проверка правильного логина и правильного пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('petukhova.daria.f@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('1q2w3e4r5t6yQWERTY');
        cy.get('.auth-form__submit').click();
        cy.get('.profile-orders__title')
    })

    it('Проверка правильного логина и неправильного пароля', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('petukhova.daria.f@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('1q2w3e4r5t6yQWERT');
        cy.get('.auth-form__submit').click();
        cy.get('.error-label')
    })
})
