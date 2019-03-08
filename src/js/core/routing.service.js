export class Routing {

     /**
     * @desc Метод перенаправляет на текущую страницу 
     * @param {Object} data - данные
     * @param {string} route - текущая страница
     */
    navigate(route, data = null) {
        location.appData = data;
        location.hash = route;
    }
}