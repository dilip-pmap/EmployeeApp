// Dependencies.
import React from 'react';
import Highcharts from 'highcharts';
/* eslint-disable no-alert, no-console */
let chartType = 'bar';
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

  getStaticOptions(chartType) {
    const chartOptions = {
      chart: {
        type: chartType
      },
      title: {
        text: 'My Techinical Skills Rating  out of 10 using npm HighCharts'
      },
      xAxis: {
        categories: ['React', 'Angular', 'Sql Server', 'SSRS', 'HTML5'],
        title: {
          text: 'rating',
        }
      },
      yAxis: {
        min: 0,
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
        name: 'Rating',
        data: [6, 6, 8, 7, 6]
      }] };

    return chartOptions;
  }

getPieOptions(options) {
  let PieOptions = {};
  let seriesdata = options.series[0].data;
  let categories = options.xAxis.categories;
  let seriesname = options.series[0].name;
  let data = [];
  let series = [];
  for ( let i = 0; i < seriesdata.length - 1; i++ ) {
    data.push({name: categories[i], y: seriesdata[i]});
  }
  series.push({name: seriesname, colorByPoint: true, data});
  PieOptions = {series};
  _.extend(PieOptions, {title: { text: null
        }, plotOptions: {pie: { allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {enabled: true
                },
                showInLegend: true
            }
        }});
  return PieOptions;
}
  // When the DOM is ready, create the chart.
  componentDidMount() {
    const { modules, options, type } = this.props;
    const { chartId } = this.state;
    if (modules) {
      modules.forEach(module => {
        module(Highcharts);
      });
    }

    // Set container which the chart should render to.
    this.chart = new Highcharts[type || 'Chart'](
      chartId,
      this.getStaticOptions(chartType)
    );
    // this.chart.setSize(350, 350);
    // this.props.onLoadCallback();
    // this.chart.setSize(600,600);
  }

  // componentDidUpdate() {
  //   const { modules, type } = this.props;
  //       // chartType === 'pie' ? PieOptions : options // once Rest API  Ready for chart options we will remove this condition then  only options
  //   // Extend Highcharts with modules
  //   if (modules) {
  //     modules.forEach(module => {
  //       module(Highcharts);
  //     });
  //   }
  //     this.chart = new Highcharts[type || 'Chart'](
  //       chartId,
  //       this.getStaticOptions()
  //     );
  // }

  // Destroy chart before unmount.
  componentWillUnmount() {
    this.chart.destroy();
  }
  handleChart(e) {
    e.preventDefault();
      const { modules, type } = this.props;
      const { chartId } = this.state;
          // chartType === 'pie' ? PieOptions : options // once Rest API  Ready for chart options we will remove this condition then  only options
      // Extend Highcharts with modules
      if (modules) {
        modules.forEach(module => {
          module(Highcharts);
        });
      }
        this.chart = new Highcharts[type || 'Chart'](
          chartId,
          this.getStaticOptions(e.target.value)
        );
    }
    // this.getStaticOptions(e.target.value);

  // Render method.
  render() {
    const { chartId } = this.state;
    return (
      <div className="card">
        <select onChange={this.handleChart.bind(this)}>
          <option value="line">line</option>
          <option value="column">column</option>
          <option value="pie">pie</option>
          <option value="bar">bar</option>
        </select>
        <div id={chartId}  />
      </div>

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
