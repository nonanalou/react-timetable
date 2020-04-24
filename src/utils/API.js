export function getJobs(courseId) {
  //const queryParams = { klasse_id: courseId, woche: date.getWeekString() }
  return fetch('http://sandbox.gibm.ch/berufe.php').then(data => data.json())
}
