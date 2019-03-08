export class PaymentComponent {
    constructor() {

    }
    async beforeRender() {

    }

     /**
     * @desc создаем разметку для оплаты
     * @returns {string} возвращаем разметку( но мы пока что ссылаемся на хоум)
     */
    render() {
        return `
            <div>PaymentComponent</div>
        `;
    }
    afterRender() {
        
    }
}