import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { actAddTourReq } from "../../../../actions/actTour";
import "./pageaddtour.scss";
class PageAddTour extends Component {
    constructor(props){
        super(props);
        this.state = {
            frmTour : {
                tourID  : "",
                tourName : "",
                // avatarTour : `${this.fileInput.current.files[0].name}`,
                startAddress : "",
                startDate : "", 
                endDate : "",
                priceTour : "",
                qtyPeople : "",
                descriptionTour : "",
                detailTour : "",
                imgBase : "" 
            }
        }
        this.fileInput = React.createRef();
    }

    inputOnChange = (e) => {
        this.setState({
            frmTour : {
                ...this.state.frmTour,
                [e.target.name] : e.target.value,
            }
        })
    }
    handleOnclickButtonChooseFile = async (e) => { //convert img to base 64 string
        var input = e.currentTarget;
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = () => {
                var imgTour = document.getElementById("imgTour");
                imgTour.src = reader.result;
                this.setState({
                    frmTour : {
                        ...this.state.frmTour, 
                        imgBase : reader.result
                    }
                })
            }
            await reader.readAsDataURL(input.files[0]); // convert to base64 string
        }else {
            return null;
        }
        console.log(this.state, '[this.state]');
    }

    onSave = (e) => {
        e.preventDefault();
        var tour = this.state.frmTour;
        console.log(tour, '[tour]');
        var {history} = this.props; 
        var thisProps = this.props;
        let myPromise = new Promise(function(myResolve, myReject) {
            thisProps.onAddTour(tour);
            myResolve(
                "aaaaaaaaaa"
            ); // when successful
            myReject(
                "bbbbbbbb"
            );  // when error
        });

        myPromise.then(()=>{
            history.push("/admint/all-tour")
        })
    }

    
    render (){
        return(
            <div className="pageaddtour">
                <div className="form">
                    <Container>
                        <legend>Add Tour</legend>
                        <Form className="form_" encType="multipart/form-data" onSubmit = { this.onSave } >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text"
                                    name="tourID" 
                                    placeholder="Tour ID"
                                    value = { this.state.frmTour.tourID}
                                    onChange ={ this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Control 
                                    type="text"
                                    name="tourName" 
                                    placeholder="Name Tour" 
                                    value = { this.state.frmTour.tourName }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    name="startAddress"
                                    placeholder="Start Address" 
                                    value = {this.state.frmTour.startAddress}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Start Date" 
                                    name="startDate" 
                                    value = {this.state.frmTour.startDate}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="End Date" 
                                    name="endDate" 
                                    value = {this.state.frmTour.endDate}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Price Tour" 
                                    name="priceTour" 
                                    value = {this.state.frmTour.priceTour}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Quantity People" 
                                    name="qtyPeople" 
                                    value = { this.state.frmTour.qtyPeople }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <textarea rows="5" cols="95"
                                    type="text" 
                                    placeholder="Description Tour" 
                                    name="descriptionTour" 
                                    value = { this.state.frmTour.descriptionTour }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <textarea rows="5" cols="95" 
                                    type="text" 
                                    placeholder="Detail Tour" 
                                    name="detailTour" 
                                    value = { this.state.frmTour.detailTour }
                                    onChange = { this.inputOnChange } 
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input 
                                    type="file" 
                                    name="avatarTour"
                                    value = { this.state.frmTour.avatarTour }
                                    onChange = { this.handleOnclickButtonChooseFile }
                                    ref={this.fileInput} 
                                /><br/>
                                <div className = "img_tour">
                                    <img id="imgTour" src=""/>
                                </div>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Create Tour
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = ( dispatch , props) => {
    return {
        onAddTour : (tour) => {
            dispatch(actAddTourReq(tour));
        }
    }
}

export default connect(null,mapDispatchToProps) (PageAddTour);