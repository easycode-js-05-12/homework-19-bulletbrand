import { AuthService } from './../services/auth.service'
import { Routing } from './../core/routing.service'

export class PaymentGuard {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();
    }

    /**
     * @desc Смотрим подписан ли юзер(тестируем защиту прост)
     * @returns {boolean} Если подписан то тру 
     */
    canActivate() {
        if (!this._authService.isSubscribed) {
            this._routing.navigate('/');
            return false;
        }

        return true;
    }
}