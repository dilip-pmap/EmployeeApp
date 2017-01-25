// Dependencies.
import React from 'react';
import Highcharts from 'highcharts';
// import _ from 'lodash';

// UI components.
// import { Button } from 'react-bootstrap';

// Utility methods.
// import utils from '../../utils';
/* eslint-disable no-alert, no-console */

// Define class.
class Highchart extends React.Component {
  constructor() {
    super();

    this.state = {
      chartId: 'chart1233'
    };

    //  this variable use not to refesh highcharts on click edit widgets
    this.chartType = '';
  }

  getStaticOptions() {
    const chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Head', 'Arm_Right', 'Back/dorsal', 'Arm(s), Lower_Left', 'Buttock(s)'],
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ''
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Count',
        data: [10, 18, 16, 10, 9]
      }] };

    return chartOptions;
  }

// getPieOptions(options) {
//   let PieOptions = {};
//   let seriesdata = options.series[0].data;
//   let categories = options.xAxis.categories;
//   let seriesname = options.series[0].name;
//   let data = [];
//   let series = [];
//   for ( let i = 0; i < seriesdata.length - 1; i++ ) {
//     data.push({name: categories[i], y: seriesdata[i]});
//   }
//   series.push({name: seriesname, colorByPoint: true, data});
//   PieOptions = {series};
//   _.extend(PieOptions, {title: { text: null
//         }, plotOptions: {pie: { allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {enabled: true
//                 },
//                 showInLegend: true
//             }
//         }});
//   return PieOptions;
// }
  // When the DOM is ready, create the chart.
  componentDidMount() {
    const { modules, options, type, widgetSettings } = this.props;
    const { chartId } = this.state;
    const chartType = widgetSettings ? widgetSettings.WidgetSubType : null;
    // ToDo: need to remove this.getStaticOptions(); after demo. and directly use 'options' and remove '_options'
    // const _options = options ? options : this.getStaticOptions();
    // Remove highchart.com link.
    // const legend = { chart: { height: 360, type: `${chartType}` }, credits: { enabled: false}, legend: { enabled: false}};
    // _.extend(options, legend);

    // Extend Highcharts with modules
    if (modules) {
      modules.forEach(module => {
        module(Highcharts);
      });
    }
    // Once Rest API Ready for  Chart Options Ready we need to remove below condition
    // let PieOptions = {};
    // if (chartType === 'pie') {
    //   PieOptions = this.getPieOptions(options);
    //   _.extend(PieOptions, legend);
    // }

    // Set container which the chart should render to.
    this.chart = new Highcharts[type || 'Chart'](
      chartId,
      this.getStaticOptions()
    );
    // this.chart.setSize(350, 350);
    // this.props.onLoadCallback();
  }

  componentDidUpdate() {
    const { modules, type } = this.props;
    // const { modules, options, type, widgetSettings } = this.props;
    // const { chartId } = this.state;
    // const chartType = widgetSettings ? widgetSettings.WidgetSubType : null;
  //  const chartType = options.chart.type;
    // ToDo: need to remove this.getStaticOptions(); after demo. and directly use 'options' and remove '_options'
    // const _options = options ? options : this.getStaticOptions();
    // Remove highchart.com link.
    // const legend = { chart: { height: 360, type: `${chartType}` }, credits: { enabled: false}, legend: { enabled: false}};
    // _.extend(options, legend);
    // // Once Rest API Ready for  Chart Options Ready we need to remove below condition
    // let PieOptions = {};
    // if (chartType === 'pie') {
    //   PieOptions = this.getPieOptions(options);
    //   _.extend(PieOptions, legend);
    // }
        // chartType === 'pie' ? PieOptions : options // once Rest API  Ready for chart options we will remove this condition then  only options
    // Extend Highcharts with modules
    if (modules) {
      modules.forEach(module => {
        module(Highcharts);
      });
    }
    // if (this.chartType !== widgetSettings.WidgetSubType) {
      this.chart = new Highcharts[type || 'Chart'](
        chartId,
        this.getStaticOptions()
      );
    //  this.chartType = widgetSettings.WidgetSubType;
    // }
  }

  // Destroy chart before unmount.
  componentWillUnmount() {
    this.chart.destroy();
  }

  // Render method.
  render() {
    const { chartId } = this.state;

    // <div>
    //   <div id={chartId} />
    //   <Button onClick={()=>this.chart.setSize(300, 300)}>Small</Button>
    //   <Button onClick={()=>this.chart.setSize(600, 300)}>Large</Button>
    // </div>


    return (
          <div id={chartId} />
    );
  }
}

// Validation.
Highchart.propTypes = {
  type: React.PropTypes.string,
  modules: React.PropTypes.array,
};

// Export.
export default Highchart;


/* eslint-enable no-alert, no-console */
