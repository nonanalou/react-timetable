import { Server, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  let server = new Server({
    environment,

    models: {
      beruf: Model,
    },

    seeds(server) {
      server.create('beruf', {
        beruf_id: '1',
        beruf_name: 'Anlagen- & Apparatebauer/innen',
      })
      server.create('beruf', {
        beruf_id: '2',
        beruf_name: 'B\u00e4cker-Konditor-Confiseur/innen',
      })
    },

    routes() {
      this.namespace = 'http://sandbox.gibm.ch'

      this.get('/berufe.php', schema => {
        return schema.beruf.all()
      })
    },
  })

  return server
}
