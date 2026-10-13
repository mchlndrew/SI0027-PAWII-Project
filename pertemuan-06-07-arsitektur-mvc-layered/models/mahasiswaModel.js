let mahasiswa = [
  { id: 1, nama: "Ahau", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Christian", jurusan: "Informatika" },
];

function getAll() {
  return mahasiswa;
}

function getById(id) {
  return mahasiswa.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: mahasiswa.length + 1, ...data };
  mahasiswa.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };