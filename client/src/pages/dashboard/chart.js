import {Component} from 'react';
import {Line} from 'react-chartjs-2';
class Chart extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4>Statistics</h4>
                    <div className="card-header-action">
                        <div className="btn-group">
                            {/* <a href="#" className="btn btn-primary">
                                Week
                            </a> */}
                            <a href="#" className="btn">
                                Year
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <Line
                        data={{
                            labels: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                            datasets: [
                                {
                                    label: 'Tour in Year',
                                    data: [
                                        12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,
                                    ],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)',
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        height={400}
                        width={600}
                    />
                </div>
            </div>
        );
    }
}
export default Chart;
