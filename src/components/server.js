import { Server, RestSerializer, Model, belongsTo } from 'miragejs'
import sharedScenario from './scenarios/sharedSeeds'

export function startServer({ environment = 'test' } = {}) {
  let server = new Server({
    environment,
    serializers: {
      application: RestSerializer,
    },

    models: {
      jobs: Model,
      classes: Model.extend({
        beruf_id: belongsTo('jobs'),
      }),
      timeTables: Model.extend({
        klasse_id: belongsTo('classes'),
      }),
    },

    seeds(server) {
      sharedScenario(server)
    },

    routes() {
      this.urlPrefix = 'http://sandbox.gibm.ch'
      this.get('/berufe.php', schema => {
        // change the name back to the original
        return schema.db.jobs.map(beruf => ({
          beruf_id: beruf.id,
          beruf_name: beruf.name,
        }))
      })
      this.get('/klassen.php', (schema, request) => {
        let berufId = request.queryParams['beruf_id']
        return (
          schema.db.classes
            .where({ beruf_id: berufId })
            // change the name back to the original
            .map(klasse => ({
              klasse_id: klasse.id,
              klasse_name: klasse.name,
              klasse_longname: klasse.longname,
            }))
        )
      })
      this.get('/tafel.php', (schema, request) => {
        let klasseId = request.queryParams['klasse_id']
        return schema.db.timeTables
          .where({ klass_id: klasseId })
          .map(tafel => ({
            tafel_id: tafel.id,
            tafel_wochentag: tafel.wochentag,
            tafel_datum: tafel.datum,
            tafel_von: tafel.von,
            tafel_bis: tafel.bis,
            tafel_lehrer: tafel.lehrer,
            tafel_fach: tafel.fach,
            tafel_longfach: tafel.longfach,
            tafel_raum: tafel.raum,
            tafel_kommentar: tafel.kommentar,
          }))
      })
    },
  })
  return server
}
