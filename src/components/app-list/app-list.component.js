export default class ListComponent {
    onDeleteHandler(id) {
        console.log(id, 'cool')
        this.emit('click', {id});
    }
}