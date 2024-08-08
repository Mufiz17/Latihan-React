// main.js
const TaskList = require('./task_list');

const runToDoListApp = async () => {
  const myTaskList = new TaskList();

  // Menambahkan tugas
  myTaskList.addTask("Belajar JavaScript", "Belajar konsep async/await dan promises");
  myTaskList.addTask("Membaca Buku", "Baca 50 halaman buku favorit");

  // Menampilkan daftar tugas sebelum selesai
  console.log("Daftar Tugas Sebelum Selesai:");
  await myTaskList.displayTasks();

  // Menyelesaikan tugas pertama
  myTaskList.completeTask(0);

  // Menampilkan daftar tugas setelah selesai
  console.log("\nDaftar Tugas Setelah Selesai:");
  await myTaskList.displayTasks();
};

runToDoListApp();
