export function getJobs() {
  return fetch('http://sandbox.gibm.ch/berufe.php').then(data => data.json())
}

export function getCourses(jobId) {
  //injection possible?
  const queryParam = jobId ? jobId : null
  return fetch(
    `http://sandbox.gibm.ch/klassen.php?beruf_id=${queryParam}`
  ).then(data => data.json())
}

export function getTimetable(courseId) {
  //injection possible?
  const queryParam = courseId ? courseId : null
  return fetch(
    `http://sandbox.gibm.ch/tafel.php?klasse_id=${queryParam}`
  ).then(data => data.json())
}
