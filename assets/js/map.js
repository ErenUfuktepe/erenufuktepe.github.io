var svgMapDataGPD = {
  data: {
    isVisited:{
      flag :false,
      color : ''
    } 
  },

  values:{
    US: {isVisited:true, color: '#0b4297'},
    TR: {isVisited:true, color: '#bf2410'},
    KW: {isVisited:true, color: '#00773A'},
    FR: {isVisited:true, color: '#012690'},
    IT: {isVisited:true, color: '#319000'},
    NP: {isVisited:true, color: '#d6133a'},
    HU: {isVisited:true, color: '#356a41'},
    GR: {isVisited:true, color: '#0D5BA9'},
    MK: {isVisited:true, color: '#e7c816'},
    AT: {isVisited:true, color: '#f30001'},
    AE: {isVisited:true, color: '#00773A'},
    JO: {isVisited:true, color: '#00773A'},

  }
}

new svgMap({

  targetElementID: 'svgMapExample',
  minZoom: 1,
  maxZoom: 10,
  initialZoom: 1.06,
  zoomScaleSensitivity: 0.2,
  mouseWheelZoomEnabled: false,

  flagType: 'image',
  flagURL: 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/{0}.svg',
  hideFlag: false,
  noDataText: '',

  countries: {
    EH: true
  },
  data: svgMapDataGPD

});