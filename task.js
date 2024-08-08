// Task.js
class Task {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.completed = false;
    }
  
    complete() {
      this.completed = true;
    }
  
    display() {
      return `${this.title} - ${this.description} [${this.completed ? "Completed" : "Not Completed"}]`;
    }
  }
  
  module.exports = Task;
  