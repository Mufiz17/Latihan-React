// TaskList.js
const Task = require('./task');

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const task = new Task(title, description);
    this.tasks.push(task);
  }

  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].complete();
    }
  }

  async displayTasks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task.display()}`);
        });
        resolve();
      }, 1000); // Mensimulasikan operasi asinkron dengan delay 1 detik
    });
  }
}

module.exports = TaskList;
