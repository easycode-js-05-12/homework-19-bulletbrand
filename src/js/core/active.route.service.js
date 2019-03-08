export class ActiveRoute {

     /**
     * @desc Разделяем урлу
     * @returns {Object} вощвращаем урлу разделеннуб и в обьекте что б удобно с ней работать было
     */
    parseRequestURL() {
        const url = location.hash.slice(1).toLowerCase() || '/';
        const routes = url.split('/');
        return {
            resourse: routes[1],
            id: routes[2],
            url
        }
    }
}