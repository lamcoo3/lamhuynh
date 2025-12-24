function parseTime(t) {
  const [m, s] = t.split(":").map(Number);
  return m * 60 + s;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function getRandomQuestions(list, count = 5) {
  return [...list]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}




