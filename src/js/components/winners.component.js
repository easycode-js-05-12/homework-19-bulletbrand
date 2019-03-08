import { WinnersService }  from './../services/winners.service';
import { AuthService } from './../services/auth.service';

export class WinnersComponent {
    constructor() {
        this._authService = new AuthService();
        this._winnersService = new WinnersService();
        this._winners;
        this._winnersTemplate;
    }

    /**
     * @desc получаем наши картинки виннеры= elem и перебераем их записывая в winnersTemplate
     */
    async beforeRender() {

        this._winners = await this._winnersService.getWinners();
        this._winnersTemplate = this._winners.winners.map((elem) => this._templateForWinners(elem));
        console.log(this._winners);
        console.log(this._winnersTemplate);
    }

    /**
     * @desc формируем базовую разметку куда подставляем картинки перебранные.
     */
    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style()}
            </style>
            <!-- Component html -->
            <div class="user-cover-container"
                style="background: url(${this._winners.winners[Math.floor(Math.random() * (10 - 1 + 1)) + 0].member_id.images[0].image_basic.url}) no-repeat center / cover;">
            </div>
          <div class="class="profile-panel bg-light-secondary justify-content-center ">
                <div class="profile-section d-flex flex-grow-1 align-items-center  justify-content-center pb-3">
                    <div class="profile-data d-flex flex-column ">
                    <span class="profile-name text-color-dark text-overflow-ellipsis">
                    in the process...</span>

                </div>
        </div>
          </div>
            <div class="images-container container">
                <div class="row">
                ${this._winnersTemplate.join('')}
                </div>
            </div>
        `;
    }
    /**
     * @desc стилизуем элементы
     */
    style() {
        return `
            img {
                max-width: 100%;
            }
            .user-cover-container {
                height: 400px;
                width: 100%;
            }
           .user-cover-container {
               margin-bottom:15px;
           }
            .img-item {
                height: 200px;
                text-align: center;
                overflow: hidden;
                background-color: #000;
                margin-bottom: 30px;
                position: relative;
                border-radius: 15px;
            }
            .img-item img {
                height: 100%;
                max-width: none;
                opacity:0.7;
            }
            .img-item img:hover  {
                opacity:1;
                color:white;
            }
            
            
            
            .fa-eye {
                position: absolute;
                bottom:10px;
                right:60px;
            }
            .fa-thumbs-up {
                position: absolute;
                bottom:10px;
                 right:15px;
                
            }
            .img-item:hover .fa-eye {
                color:white;
            }
            .img-item:hover .fa-thumbs-up {
                color:white;
            }
            .profile-panel {
                margin-bottom:40px;
                padding:20px;
            }
            .view {
                color:white;
                font-size:12px;
            }
        `;
    }

    //каждый раз переберать будет карточку с изображением и новый элемент будет нулевым
    /**
     * @desc разметка для винеров
     * @param {Object} обьект картинок перебранный 
     * @returns {string} разметка с картинками
     */
    _templateForWinners(elem) {
        return `
        <div class="col col-3">
        <div class="img-item">
            <img src="${elem.member_id.images[0].image_basic.url}">
            <div class="img-item-hover">
                <span>
                    <i class="fas fa-eye"> ${elem.member_id.images[0].image_basic.views.length}</i>
                 
                </span>
                <span>
                    <i class="fas fa-thumbs-up">  ${elem.member_id.images[0].image_basic.likes.length}</i>
                  
                </span>
            </div>
        </div>
    </div>
        `;
    }


    afterRender() {

    }
}
