import React, { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from "react-redux"; 
import { actDeleteTourReq, actFetchToursReq } from "../../../../actions/actTour";
import "./pagealltour.scss";
class AllTourPage extends Component {
    constructor (props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllTour();
    }

    handleDeleteTour = (id) => {
        this.props.onDeleteTour(id);
    }

    showListTour = (tours) => {
        var result = null;
        if(tours.length > 0) {
            result = tours.map((tour,index)=>{
                if(tour !== undefined){
                    return(
                        <tr key= {index}>
                            <td>{tour.tourName}</td>
                            <td>{tour.startAddress}</td>
                            <td>{tour.startDate}</td>
                            <td>{tour.endDate}</td>
                            <td>{tour.priceTour}</td>
                            <td>{tour.qtyPeople}</td>
                            <td className="td-action">
                                <Button 
                                    variant="danger" 
                                    onClick={ () => this.handleDeleteTour(tour._id) }>
                                    Del
                                </Button>
                                <Link to={`/admint/edit-tour/${tour._id}`}>
                                    <Button>
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                        </tr>   
                    )
                }
            })
        }
        return result;
    }
    render () { 
        var { tours } = this.props;
        return(
            <div className="alltourpage">
                <Container>
                    <div className="table-all-tour">
                        <legend>All Tour</legend>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name Tour</th>
                                <th>Start Address</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Price Tour (VND)</th>
                                <th>QTY People</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showListTour(tours)}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => { //get all data from store
    return {
        tours : state.tour
    }
}

const mapDisPatchToProps = ( dispatch, props ) => {   //save data to the store
    return {
        fetchAllTour : () =>{ 
            dispatch(actFetchToursReq());
        },
        onDeleteTour : (id) => {
            dispatch(actDeleteTourReq(id));
        }
    }
}
export default connect(mapStateToProps, mapDisPatchToProps) (AllTourPage);