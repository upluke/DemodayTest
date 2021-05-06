
const dates = ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const ppmLevels = [338.75, 340.11, 341.45, 343.05, 344.65, 346.12, 347.42, 349.19, 351.57, 353.12, 354.39, 355.61, 356.45, 357.1, 358.83, 360.82, 362.61, 363.73, 366.7, 368.38, 369.55, 371.14, 373.28, 375.8, 377.52, 379.8, 381.9, 383.79, 385.6, 387.43, 389.9, 391.65, 393.85, 396.52, 398.65, 400.83, 404.24, 406.55, 408.52, 411.44, 414.24, 416.14];

const carbonCanvas = document.querySelector('#co2-levels');
const carbonChart = new Chart(carbonCanvas, {
  type: 'bar',
  data: {
    labels: dates,
    datasets: [{
      type: 'bar',
      label: 'Co2 Emission Levels',
      data: ppmLevels,
    }, {
      type: 'line',
      label: '',
      data: ppmLevels,
      borderColor: ['green']
    }]
  }
});

const generationKwH = [881.28, 1513.39, 781.20, 269.57, 579.37, 4058.88];
const energySources = ['Coal', 'Natural Gas', 'Nuclear', 'Conventional Hydroelectric', 'Renewable(non-hydroelectric)', 'Total Generation'];

const generationCanvas = document.querySelector('#generation');
const generationChart = new Chart(generationCanvas, {
  type: 'bar',
  data: {
    labels: energySources,
    datasets: [{
      type: 'bar',
      label: 'Energy Generation (billion kWh)',
      data: generationKwH,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'blue',
        'yellow',
        'pink'
      ],
    }]
  }
});

const consumptionBtu = [0.216, 2.554, 1.608, 0.446, 3.487, 2.168, 0.293, 1.113, 0.735];
const renewableEnergySources = ['Geothermal', 'Hydropower', 'Solar', 'Waste Biomass', 'Wind', 'Wood Biomass', 'Biomass-based Diesel', 'Ethanol', 'Other'];

const usRenewablesConsumptionCanvas = document.querySelector('#usRenewablesConsumption');
const usRenewablesConsumptionChart = new Chart(usRenewablesConsumptionCanvas, {
  type: 'doughnut',
  data: {
    labels: renewableEnergySources,
    datasets: [{
      type: 'doughnut',
      label: 'Energy Generation (billion kWh)',
      data: consumptionBtu,
      backgroundColor: [
        'rgb(255, 205, 86)',
        'blue',
        'yellow',
        'pink',
        '#CC99FF',
        '#66FF66',
        '#FF9933',
        '#990000',
        '#004C99'
      ],
    }]
  }
});

let carbonLvlSource = document.querySelector('#carbonlvl-source');
carbonLvlSource.style.fontSize = '12px';

// let kWhSource = document.querySelector('#kWh-source');
// kWhSource.style.fontSize = '12px';

// let usRenewablesConsumption = document.querySelector('#usRenewablesConsumption');
// usRenewablesConsumption.style.fontSize = '12px';

// x axis, label
// energy sources

// y axis, corresponding energy source value







// const energyGenerationByYear = {
//   2019: {
//     'Coal': 881.28,
//     'Natural Gas': 1513.39
//   },
//   2020: {
//     'Coal': 881.28,
//     'Natural Gas': 99999
//   },
//   2021: {
//     'Coal': 881.28,
//     'Natural Gas': 1513.39
//   },
//   2022: {
//     'Coal': 881.28,
//     'Natural Gas': 1513.39
//   }
// }


// energyGenerationByYear.2020['Natural Gas'];