const fs = require('fs').promises;
const filePath = './tasks.json';

// fungsi untuk membaca file tasks.json
async function loadTasks() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// fungsi untuk menyimpan ke tasks.json
async function saveTasks(tasks) {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}

// tambah tugas
async function addTask(taskName) {
  const tasks = await loadTasks();
  const newTask = {
    id: tasks.length + 1,
    name: taskName,
    completed: false
  };
  tasks.push(newTask);
  await saveTasks(tasks);
  console.log(`✅ Selamat tugas "${taskName}" berhasil ditambahkan!`);
}

// lihat semua tugas
async function listTasks() {
  const tasks = await loadTasks();
  if (tasks.length === 0) {
    console.log("📭 Belum ada tugas nih");
    return;
  }
  console.log("\n📋 Daftar Tugas:");
  tasks.forEach(task => {
    const status = task.completed ? "✔️ Done" : "❌ Not Yet";
    console.log(`${task.id}. ${task.name} - ${status}`);
  });
}

// tandai tugas selesai
async function doneTask(id) {
  const tasks = await loadTasks();
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    console.log("⚠️ Tugas tidak ditemukan!");
    return;
  }
  tasks[index].completed = true;
  await saveTasks(tasks);
  console.log(`👏🏼 Tugas "${tasks[index].name}" ditandai selesai!`);
}

// menghapus tugas
async function removeTask(id) {
  const tasks = await loadTasks();
  const filtered = tasks.filter(t => t.id !== parseInt(id));
  if (filtered.length === tasks.length) {
    console.log("⚠️ Tugas tidak ditemukan!");
    return;
  }
  await saveTasks(filtered);
  console.log(`🗑️ Tugas dengan ID ${id} telah dihapus.`);
}

module.exports = { addTask, listTasks, doneTask, removeTask };