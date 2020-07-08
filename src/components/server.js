import { Server, RestSerializer } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  let server = new Server({
    environment,
    serializers: {
      application: RestSerializer,
    },

    seeds(server) {
      server.db.loadData({
        berufe: [
          { id: '1', name: 'Anlagen- und Apparatebauer/innen' },
          { id: '2', name: 'B\u00e4cker-Konditor-Confiseur/innen' },
          { id: '20', name: 'Baupraktiker/innen' },
        ],
        klassen: [
          {
            beruf_id: '1',
            id: '2886937',
            name: 'A 16-20 A',
            longname: 'Anlagen- und Apparatebauer A 16-20 A',
          },
          {
            beruf_id: '1',
            id: '3012168',
            name: 'A 17-21 A',
            longname: 'Anlagen- und Apparatebauer A 17-21 A',
          },
          {
            beruf_id: '2',
            id: '3175846',
            name: 'BA 18-20 A',
            longname: 'B\u00e4cker-Konditor-Confiseur EBA Ba 18-20 A',
          },
          {
            beruf_id: '2',
            id: '3315386',
            name: 'BA 19-21 A',
            longname: 'B\u00e4cker-Konditor-Confiseur EBA Ba 19-21 A',
          },
          {
            beruf_id: '20',
            id: '3175851',
            name: 'BP 18-20 A',
            longname: 'Baupraktiker BP 18-20 A',
          },
          {
            beruf_id: '20',
            id: '3315428',
            name: 'BP 19-21 A',
            longname: 'Baupraktiker BP 19-21 A',
          },
        ],
        tafeln: [
          {
            klasse_id: '2886937',
            id: '3406459',
            datum: '2020-06-18',
            wochentag: '4',
            von: '07:15:00',
            bis: '11:35:00',
            lehrer: 'Glaser Christoph',
            fach: 'BK',
            longfach: 'Berufskunde',
            raum: 'Zimmer 102',
            kommentar: '',
          },
          {
            klasse_id: '2886937',
            id: '3406513',
            datum: '2020-06-18',
            wochentag: '4',
            von: '12:45:00',
            bis: '15:10:00',
            lehrer: 'Chiverton-Portmann Jacqueline',
            fach: 'ABU',
            longfach: 'Allgemeinbildung',
            raum: 'Zimmer 108',
            kommentar: 'ungerade Wochen',
          },
          {
            klasse_id: '2886937',
            id: '3406477',
            tafel_datum: '2020-06-18',
            tafel_wochentag: '4',
            tafel_von: '12:45:00',
            tafel_bis: '14:20:00',
            tafel_lehrer: 'Rieder Kari',
            tafel_fach: 'TURN',
            tafel_longfach: 'Turnen und Sport',
            tafel_raum: 'Halle 6',
            tafel_kommentar: 'gerade Wochen',
          },
          {
            klasse_id: '2886937',
            id: '3406495',
            tafel_datum: '2020-06-18',
            tafel_wochentag: '4',
            tafel_von: '14:25:00',
            tafel_bis: '17:05:00',
            tafel_lehrer: 'Chiverton-Portmann Jacqueline',
            tafel_fach: 'ABU',
            tafel_longfach: 'Allgemeinbildung',
            tafel_raum: 'Zimmer 108',
            tafel_kommentar: 'gerade Wochen',
          },
        ],
      })
    },

    routes() {
      this.urlPrefix = 'http://sandbox.gibm.ch'
      this.get('/berufe.php', schema => {
        let berufe = schema.db.berufe
        // change the name back to the original
        return berufe.map(beruf => ({
          beruf_id: beruf.id,
          beruf_name: beruf.name,
        }))
      })
      this.get('/klassen.php', (schema, request) => {
        let berufId = request.queryParams['beruf_id']
        return (
          schema.db.klassen
            .filter(klasse => klasse['beruf_id'] == berufId)
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
        return schema.db.tafeln
          .filter(tafel => tafel['klasse_id'] == klasseId)
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
