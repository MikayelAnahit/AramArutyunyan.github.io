export class Input{
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((e.code === 'KeyW' || e.code === 'KeyD' || e.code === 'KeyS' || e.code === 'KeyA') && this.keys.indexOf(e.code) === -1){
                this.keys.push(e.code);
            }
        });

        window.addEventListener('keyup', e => {
            if(e.code === 'KeyW' || e.code === 'KeyD' || e.code === 'KeyS' || e.code === 'KeyA'){
                this.keys.splice(this.keys.indexOf(e.code), 1);
            }
        });
    }
}