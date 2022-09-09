export default class FormComponent {
   onSubmitHandler(event) {
    event.preventDefault();
    this.emit('submitEvent', {
        target: event.target,
    })
   }
}