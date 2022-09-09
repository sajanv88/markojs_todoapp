export default class AppButton {
    emitClickEvent(event) {
        this.emit('click', {event});
    }
}