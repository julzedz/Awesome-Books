export default class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }
}