export default class msgBox {
    id;
    dom;
    msg;
    type;
    position;
    
    constructor(id, options) {
        this.id = id;
        this.dom = document.getElementById(id);
        this.msg = options.msg;
        this.type = options.type;
        this.position = options.position;

        this.type && this.setType();

        document.querySelector(`#${id} .msg`).innerHTML = this.msg;
        document.querySelector(`#${id} .close`).addEventListener('click', function(){
            this.close();
        }.bind(this));
    }
    show (callback){
        this.dom.style.display = 'flex';
        this.position && this.setPosition();
        callback&&callback();
    }
    close(callback) {
        this.dom.style.display = 'none';
        callback&&callback();
    }
    setType() {
        const typeClass = {
            'info': '&#xe621;',
            'question': '&#xe61d;',
            'warning': '&#xe619;'
        }
        document.querySelector(`#${this.id} .type`).innerHTML = typeClass[this.type];
    }
    setPosition() {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;

        let boxWidth = this.dom.offsetWidth;
        let boxHeight = this.dom.offsetHeight;

        let left = (width - boxWidth) * this.position[0];
        let top = (height - boxHeight) * this.position[1];

        this.dom.style.left = left + 'px';
        this.dom.style.top = top + 'px';  
    }

}