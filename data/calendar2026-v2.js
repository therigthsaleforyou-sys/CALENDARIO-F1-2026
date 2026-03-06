// Calendário Oficial F1 2026
// Versão v2 FINAL – 24 corridas (ORDENADO CORRETAMENTE)
// Estrutura compatível com main.js
// Horários aproximados (UTC)

const calendar2026 = [

  {
    id: "australia",
    name: "Grande Prémio da Austrália",
    heroImage: "assets/heroes/australia_v2.jpg",
    cardImage: "assets/races/australia.jpg",
    sessions: {
      fp1: "2026-03-06T01:30:00Z",
      fp2: "2026-03-06T05:00:00Z",
      fp3: "2026-03-07T01:30:00Z",
      qualifying: "2026-03-07T05:00:00Z",
      race: "2026-03-08T04:00:00Z"
    }
  },

  {
    id: "china",
    name: "Grande Prémio da China",
    heroImage: "assets/heroes/china.jpg",
    cardImage: "assets/races/china.jpg",
    sessions: {
      fp1: "2026-03-13T04:30:00Z",
      fp2: "2026-03-13T08:00:00Z",
      fp3: "2026-03-14T04:30:00Z",
      qualifying: "2026-03-14T08:00:00Z",
      race: "2026-03-15T07:00:00Z"
    }
  },

  {
    id: "japan",
    name: "Grande Prémio do Japão",
    heroImage: "assets/heroes/japan.jpg",
    cardImage: "assets/races/japan.jpg",
    sessions: {
      fp1: "2026-03-27T03:30:00Z",
      fp2: "2026-03-27T07:00:00Z",
      fp3: "2026-03-28T03:30:00Z",
      qualifying: "2026-03-28T07:00:00Z",
      race: "2026-03-29T06:00:00Z"
    }
  },

  {
    id: "bahrain",
    name: "Grande Prémio do Bahrein",
    heroImage: "assets/heroes/bahrain.jpg",
    cardImage: "assets/races/bahrain.jpg",
    sessions: {
      fp1: "2026-04-10T11:00:00Z",
      fp2: "2026-04-10T15:00:00Z",
      fp3: "2026-04-11T12:00:00Z",
      qualifying: "2026-04-11T15:00:00Z",
      race: "2026-04-12T15:00:00Z"
    }
  },

  {
    id: "saudi-arabia",
    name: "Grande Prémio da Arábia Saudita",
    heroImage: "assets/heroes/saudi_arabia.jpg",
    cardImage: "assets/races/saudi_arabia.jpg",
    sessions: {
      fp1: "2026-04-17T13:30:00Z",
      fp2: "2026-04-17T17:00:00Z",
      fp3: "2026-04-18T13:30:00Z",
      qualifying: "2026-04-18T17:00:00Z",
      race: "2026-04-19T17:00:00Z"
    }
  },

  {
    id: "miami",
    name: "Grande Prémio de Miami",
    heroImage: "assets/heroes/miami.jpg",
    cardImage: "assets/races/miami.jpg",
    sessions: {
      fp1: "2026-05-01T18:30:00Z",
      fp2: "2026-05-01T22:00:00Z",
      fp3: "2026-05-02T17:30:00Z",
      qualifying: "2026-05-02T21:00:00Z",
      race: "2026-05-03T20:00:00Z"
    }
  },

  {
    id: "canada",
    name: "Grande Prémio do Canadá",
    heroImage: "assets/heroes/canada.jpg",
    cardImage: "assets/races/canada.jpg",
    sessions: {
      fp1: "2026-05-22T18:30:00Z",
      fp2: "2026-05-22T22:00:00Z",
      fp3: "2026-05-23T17:30:00Z",
      qualifying: "2026-05-23T21:00:00Z",
      race: "2026-05-24T18:00:00Z"
    }
  },

  {
    id: "monaco",
    name: "Grande Prémio do Mónaco",
    heroImage: "assets/heroes/monaco.jpg",
    cardImage: "assets/races/monaco.jpg",
    sessions: {
      fp1: "2026-06-05T11:30:00Z",
      fp2: "2026-06-05T15:00:00Z",
      fp3: "2026-06-06T12:00:00Z",
      qualifying: "2026-06-06T15:00:00Z",
      race: "2026-06-07T13:00:00Z"
    }
  },

  {
    id: "spain",
    name: "Grande Prémio de Barcelona-Catalunha",
    heroImage: "assets/heroes/spain.jpg",
    cardImage: "assets/races/spain.jpg",
    sessions: {
      fp1: "2026-06-12T11:30:00Z",
      fp2: "2026-06-12T15:00:00Z",
      fp3: "2026-06-13T12:00:00Z",
      qualifying: "2026-06-13T15:00:00Z",
      race: "2026-06-14T13:00:00Z"
    }
  },

  {
    id: "austria",
    name: "Grande Prémio da Áustria",
    heroImage: "assets/heroes/austria.jpg",
    cardImage: "assets/races/austria.jpg",
    sessions: {
      fp1: "2026-06-26T11:30:00Z",
      fp2: "2026-06-26T15:00:00Z",
      fp3: "2026-06-27T12:00:00Z",
      qualifying: "2026-06-27T15:00:00Z",
      race: "2026-06-28T13:00:00Z"
    }
  },

  {
    id: "britain",
    name: "Grande Prémio da Grã-Bretanha",
    heroImage: "assets/heroes/britain.jpg",
    cardImage: "assets/races/britain.jpg",
    sessions: {
      fp1: "2026-07-03T12:30:00Z",
      fp2: "2026-07-03T16:00:00Z",
      fp3: "2026-07-04T11:30:00Z",
      qualifying: "2026-07-04T15:00:00Z",
      race: "2026-07-05T14:00:00Z"
    }
  },

  {
    id: "belgium",
    name: "Grande Prémio da Bélgica",
    heroImage: "assets/heroes/belgium.jpg",
    cardImage: "assets/races/belgium.jpg",
    sessions: {
      fp1: "2026-07-17T11:30:00Z",
      fp2: "2026-07-17T15:00:00Z",
      fp3: "2026-07-18T12:00:00Z",
      qualifying: "2026-07-18T15:00:00Z",
      race: "2026-07-19T13:00:00Z"
    }
  },

  {
    id: "hungary",
    name: "Grande Prémio da Hungria",
    heroImage: "assets/heroes/hungary.jpg",
    cardImage: "assets/races/hungary.jpg",
    sessions: {
      fp1: "2026-07-24T11:30:00Z",
      fp2: "2026-07-24T15:00:00Z",
      fp3: "2026-07-25T12:00:00Z",
      qualifying: "2026-07-25T15:00:00Z",
      race: "2026-07-26T13:00:00Z"
    }
  },

  {
    id: "netherlands",
    name: "Grande Prémio dos Países Baixos",
    heroImage: "assets/heroes/netherlands.jpg",
    cardImage: "assets/races/netherlands.jpg",
    sessions: {
      fp1: "2026-08-21T10:30:00Z",
      fp2: "2026-08-21T14:00:00Z",
      fp3: "2026-08-22T10:30:00Z",
      qualifying: "2026-08-22T14:00:00Z",
      race: "2026-08-23T13:00:00Z"
    }
  },

  {
    id: "italy",
    name: "Grande Prémio de Itália",
    heroImage: "assets/heroes/italy.jpg",
    cardImage: "assets/races/italy.jpg",
    sessions: {
      fp1: "2026-09-04T11:30:00Z",
      fp2: "2026-09-04T15:00:00Z",
      fp3: "2026-09-05T12:00:00Z",
      qualifying: "2026-09-05T15:00:00Z",
      race: "2026-09-06T13:00:00Z"
    }
  },

  {
    id: "madrid",
    name: "Grande Prémio de Madrid",
    heroImage: "assets/heroes/madrid.jpg",
    cardImage: "assets/races/madrid.jpg",
    sessions: {
      fp1: "2026-09-11T11:30:00Z",
      fp2: "2026-09-11T15:00:00Z",
      fp3: "2026-09-12T12:00:00Z",
      qualifying: "2026-09-12T15:00:00Z",
      race: "2026-09-13T13:00:00Z"
    }
  },

  {
    id: "azerbaijan",
    name: "Grande Prémio do Azerbaijão",
    heroImage: "assets/heroes/azerbaijan.jpg",
    cardImage: "assets/races/azerbaijan.jpg",
    sessions: {
      fp1: "2026-09-24T08:00:00Z",
      fp2: "2026-09-24T12:00:00Z",
      fp3: "2026-09-25T08:00:00Z",
      qualifying: "2026-09-25T12:00:00Z",
      race: "2026-09-26T11:00:00Z"
    }
  },

  {
    id: "singapore",
    name: "Grande Prémio de Singapura",
    heroImage: "assets/heroes/singapore.jpg",
    cardImage: "assets/races/singapore.jpg",
    sessions: {
      fp1: "2026-10-09T10:00:00Z",
      fp2: "2026-10-09T14:00:00Z",
      fp3: "2026-10-10T10:00:00Z",
      qualifying: "2026-10-10T14:00:00Z",
      race: "2026-10-11T12:00:00Z"
    }
  },

  {
    id: "usa",
    name: "Grande Prémio dos Estados Unidos",
    heroImage: "assets/heroes/usa.jpg",
    cardImage: "assets/races/usa.jpg",
    sessions: {
      fp1: "2026-10-23T17:30:00Z",
      fp2: "2026-10-23T21:00:00Z",
      fp3: "2026-10-24T18:00:00Z",
      qualifying: "2026-10-24T22:00:00Z",
      race: "2026-10-25T20:00:00Z"
    }
  },

  {
    id: "mexico",
    name: "Grande Prémio do México",
    heroImage: "assets/heroes/mexico.jpg",
    cardImage: "assets/races/mexico.jpg",
    sessions: {
      fp1: "2026-10-30T18:30:00Z",
      fp2: "2026-10-30T22:00:00Z",
      fp3: "2026-10-31T17:30:00Z",
      qualifying: "2026-10-31T21:00:00Z",
      race: "2026-11-01T20:00:00Z"
    }
  },

  {
    id: "brazil",
    name: "Grande Prémio do Brasil",
    heroImage: "assets/heroes/brazil.jpg",
    cardImage: "assets/races/brazil.jpg",
    sessions: {
      fp1: "2026-11-06T14:30:00Z",
      fp2: "2026-11-06T18:00:00Z",
      fp3: "2026-11-07T14:30:00Z",
      qualifying: "2026-11-07T18:00:00Z",
      race: "2026-11-08T17:00:00Z"
    }
  },

  {
    id: "las-vegas",
    name: "Grande Prémio de Las Vegas",
    heroImage: "assets/heroes/las_vegas.jpg",
    cardImage: "assets/races/las_vegas.jpg",
    sessions: {
      fp1: "2026-11-19T03:00:00Z",
      fp2: "2026-11-19T07:00:00Z",
      fp3: "2026-11-20T03:00:00Z",
      qualifying: "2026-11-20T07:00:00Z",
      race: "2026-11-21T06:00:00Z"
    }
  },

  {
    id: "qatar",
    name: "Grande Prémio do Catar",
    heroImage: "assets/heroes/qatar.jpg",
    cardImage: "assets/races/qatar.jpg",
    sessions: {
      fp1: "2026-11-27T12:30:00Z",
      fp2: "2026-11-27T16:00:00Z",
      fp3: "2026-11-28T13:00:00Z",
      qualifying: "2026-11-28T16:00:00Z",
      race: "2026-11-29T15:00:00Z"
    }
  },

  {
    id: "abu-dhabi",
    name: "Grande Prémio de Abu Dhabi",
    heroImage: "assets/heroes/abu_dhabi.jpg",
    cardImage: "assets/races/abu_dhabi.jpg",
    sessions: {
      fp1: "2026-12-04T09:30:00Z",
      fp2: "2026-12-04T13:00:00Z",
      fp3: "2026-12-05T10:00:00Z",
      qualifying: "2026-12-05T13:00:00Z",
      race: "2026-12-06T13:00:00Z"
    }
  }

];

window.calendar2026 = calendar2026;
