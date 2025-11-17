# 🧩 Task Manager CLI (Node.js)
Project ini adalah aplikasi Task Manager sederhana yang dijalankan lewat Command Line (Terminal) dan merupkana tugas CLI Pemrograman Web. (nama reponya saya kira minggu ke 10 ternyata salah)
Aplikasi ini dibuat untuk belajar dan membuktikan konsep pemrograman asinkron di Node.js menggunakan fitur bawaan seperti fs/promises, path, dan process.argv.

# 🚀 Fitur Aplikasi
1. Tambah Tugas – Menambahkan tugas baru ke daftar.
2. Lihat Daftar Tugas – Menampilkan semua tugas yang ada.
3. Tandai Selesai – Mengubah status tugas jadi selesai.
4. Hapus Tugas – Menghapus tugas dari daftar.

# 🛠️ Teknologi yang Dipakai
- Node.js
- Modul fs/promises → untuk membaca dan menulis file secara asinkron.
- Modul path → untuk mengatur lokasi file.
- Modul process.argv → untuk membaca input dari terminal.

# 📁 Struktur Foldernya
├── index.js       # File utama untuk menjalankan aplikasinya
├── tasks.js       # File yang berisi fungsi tambah, lihat, hapus tugas
├── tasks.json     # File tempat menyimpan data tugas
└── package.json   # File bawaan Node.js

# 💻 Cara Menjalankannya
1. Sudah terinstall Node.js
2. Buka CMD Prompt dan buka difolder tersebut
3. Jalankan perintah yang diinginkan:
   node index.js add "nama tugas"       → Untuk tambah tugas
   node index.js list                   → Melihat daftar tugas
   node index.js done <id>              → Melihat tugas yang ditandai selesai
   node index.js remove <id>            → Menghapus tugas

! Semua data tugas disimpan di file tasks.json.
Kalau program dijalankan, isinya akan otomatis berubah sesuai perintah yang dijalankan.

nyaw!୭ ˚. ᵎᵎ
