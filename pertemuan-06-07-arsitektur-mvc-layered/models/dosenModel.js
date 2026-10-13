let dosen = [
  { id: 1, nama: "Darren Ariyo JT, M.Kom.", nip: "161125", prodiId: 1 },
  { id: 2, nama: "M Joacquine, M.SI.", nip: "252312", prodiId: 1 },
];

function getAll() {
  return dosen;
}

function getById(id) {
  return dosen.find((d) => d.id === id);
}

function create(data) {
  const baru = { id: dosen.length + 1, ...data };
  dosen.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };