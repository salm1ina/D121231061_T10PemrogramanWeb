const { addTask, listTasks, doneTask, removeTask } = require('./tasks');

const [,, command, ...args] = process.argv;

(async () => {
  switch (command) {
    case 'add':
      await addTask(args.join(' '));
      break;
    case 'list':
      await listTasks();
      break;
    case 'done':
      await doneTask(args[0]);
      break;
    case 'remove':
      await removeTask(args[0]);
      break;
    default:
      console.log(`
⚙️  Gunakan perintah berikut:
    1. node index.js add "nama tugas"       → Untuk tambah tugas
    2. node index.js list                   → Melihat daftar tugas
    3. node index.js done <id>              → Melihat tugas yang ditandai selesai
    4. node index.js remove <id>            → Menghapus tugas
`);
  }
})();