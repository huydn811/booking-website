import React, { Component } from "react";
import "./pagedashboard.scss";
class PageDashBoard extends Component {
    render(){
        return(
            <div className="dashboard">
                <div className="main-content" style={{minHeight: "260px"}}>
                    <section className="section">
                        <div className="section-header">
                            <h1>Dashboard</h1>
                        </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="card card-statistic-1">
                                <div className="card-icon bg-primary">
                                    <i className="far fa-user"></i>
                                </div>
                                <div className="card-wrap">
                                    <div className="card-header">
                                        <h4>Total Tour</h4>
                                    </div>
                                    <div className="card-body">10</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-danger">
                            <i className="far fa-newspaper"></i>
                            </div>
                            <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total Employee</h4>
                            </div>
                            <div className="card-body">
                                42
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-warning">
                            <i className="far fa-file"></i>
                            </div>
                            <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total User</h4>
                            </div>
                            <div className="card-body">
                                1,201
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-success">
                            <i className="fas fa-circle"></i>
                            </div>
                            <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total Transport</h4>
                            </div>
                            <div className="card-body">
                                47
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                <h4>Statistics</h4>
                                <div className="card-header-action">
                                    <div className="btn-group">
                                    <a href="#" className="btn btn-primary">Week</a>
                                    <a href="#" className="btn">Month</a>
                                    </div>
                                </div>
                                </div>
                                <div className="card-body">
                                <canvas id="myChart" height="182"></canvas>
                                <div className="statistic-details mt-sm-4" style={{display : "flex", justifyContent:"space-around"}}>
                                    <div className="statistic-details-item">
                                    <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up"></i></span> 7%</span>
                                    <div className="detail-value">$243</div>
                                    <div className="detail-name">Today's Sales</div>
                                    </div>
                                    <div className="statistic-details-item">
                                    <span className="text-muted"><span className="text-danger"><i className="fas fa-caret-down"></i></span> 23%</span>
                                    <div className="detail-value">$2,902</div>
                                    <div className="detail-name">This Week's Sales</div>
                                    </div>
                                    <div className="statistic-details-item">
                                    <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up"></i></span>9%</span>
                                    <div className="detail-value">$12,821</div>
                                    <div className="detail-name">This Month's Sales</div>
                                    </div>
                                    <div className="statistic-details-item">
                                    <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up"></i></span> 19%</span>
                                    <div className="detail-value">$92,142</div>
                                    <div className="detail-name">This Year's Sales</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="card">
                                    <div className="card-header">
                                    <h4>This Week Stats</h4>
                                    <div className="card-header-action">
                                        <div className="dropdown">
                                        <a href="#" className="dropdown-toggle btn btn-primary" data-toggle="dropdown">Filter</a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item has-icon"><i className="far fa-circle"></i> Electronic</a>
                                            <a href="#" className="dropdown-item has-icon"><i className="far fa-circle"></i> T-shirt</a>
                                            <a href="#" className="dropdown-item has-icon"><i className="far fa-circle"></i> Hat</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item">View All</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="card-body">
                                    <div className="summary">
                                        <div className="summary-info">
                                        <h4>$1,053</h4>
                                        <div className="text-muted">Sold 3 items on 2 customers</div>
                                        <div className="d-block mt-2">
                                            <a href="#">View All</a>
                                        </div>
                                        </div>
                                        <div className="summary-item">
                                        <h6>Item List <span className="text-muted">(3 Items)</span></h6>
                                        <ul className="list-unstyled list-unstyled-border">
                                            <li className="media">
                                                <a href="#">
                                                    <img className="mr-3 rounded" width="50" src="../../../../img/121241321_670001800616075_329923169218267049_o.jpg" alt="product" />
                                                </a>
                                                <div className="media-body">
                                                    <div className="media-right">$405</div>
                                                    <div className="media-title"><a href="#">PlayStation 9</a></div>
                                                    <div className="text-muted text-small">by <a href="#">Hasan Basri</a> <div className="bullet"></div> Sunday</div>
                                                </div>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default PageDashBoard;