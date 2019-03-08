export class Http {

    /**
     * @desc метод загружает данные с сервера
     * @param {string} url - АПИ урла
     * @param {object} data - данные
     * @returns {Promise} промис (результат)
     */
    get(url, options) {
        return new Promise((resolve, reject) => {
            fetch(url ,options)        //new opitions
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }

    /**
     * @desc метод загружает данные на сервер(отправляет)
     * @param {string} url - АПИ урла
     * @param {object} data - данные
     * @returns {Promise} промис (результат)
     */
    post(url, data, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
  
}
