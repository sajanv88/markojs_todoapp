export default class Dialog {
    onMount() {
        window.addEventListener('keydown', (event) => {
            if(event.key.toLowerCase() === 'escape') {
                this.onCloseDialog();
            }
        })
    }
    onCloseDialog() {
        this.emit('click', {close: true})
    }
}