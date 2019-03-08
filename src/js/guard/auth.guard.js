import { AuthService } from './../services/auth.service'
import { Routing } from './../core/routing.service'

export class AuthGuard {
    constructor() {
        this._authService = new AuthService();
        this._routing = new Routing();
    }

    /**
     * @desc Смотрим зареган юзер или нет по токену
     * @returns {boolean} если зареган тру если нет фолс 
     */
    canActivate() {
        if (!this._authService.token) {
            this._routing.navigate('/login');
            return false;
        }

        return true;
    }
}