export function getJobs() {
  return fetch('http://sandbox.gibm.ch/berufe.php').then(data => data.json())
}

export function getCourses(jobId) {
  return fetch(
    `http://sandbox.gibm.ch/klassen.php?beruf_id=${jobId}`
  ).then(data => data.json())
}

export function getTimetable(courseId, week) {
  return fetch(
    `http://sandbox.gibm.ch/tafel.php?klasse_id=${courseId}&woche=${week}`
  ).then(data => data.json())
}
