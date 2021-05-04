import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { actAddTourReq } from "../../../../actions/actTour";
import { Formik } from 'formik';
import * as  Yup from 'yup';
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
    }

    onSave = (e) => {
        e.preventDefault();
        var tour = this.state.frmTour;
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
                        <Formik
                            initialValues = {{
                                tourID : "",
                                tourName : "",
                                startAddress : "",
                                startDate : "",
                                endDate : "",
                                priceTour : "",
                                qtyPeople : "",
                                descriptionTour : "",
                                detailTour : "",
                            }}
                            validationSchema={
                                Yup.object().shape({
                                tourID: Yup.string().required(),
                                tourName: Yup.string().required(),
                                startAddress: Yup.string().required(),
                                startDate: Yup.date().required(),
                                endDate: Yup.date().required(),
                                priceTour: Yup.number().required(),
                                qtyPeople: Yup.number().required(),
                                descriptionTour: Yup.string().required(),
                                detailTour: Yup.string().required(),
                            })}
                            onSubmit = {
                                (values) => {
                                    console.log(values)
                                }
                            }
                        >{({errors, values, handleChange, handleSubmit})=>(
                            <Form className="form_" encType="multipart/form-data" onSubmit = { handleSubmit } >
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="text"
                                        name="tourID" 
                                        placeholder="Tour ID"
                                        value = { values.tourID}
                                        onChange ={ handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.tourID}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                        type="text"
                                        name="tourName" 
                                        placeholder="Name Tour" 
                                        value = { values.tourName }
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.tourName}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="text" 
                                        name="startAddress"
                                        placeholder="Start Address" 
                                        value = {values.startAddress}
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.startAddress}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Start Date" 
                                        name="startDate" 
                                        value = {values.startDate}
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.startDate}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="End Date" 
                                        name="endDate" 
                                        value = {values.endDate}
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.endDate}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="number" 
                                        placeholder="Price Tour" 
                                        name="priceTour" 
                                        value = {values.priceTour}
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.priceTour}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="number" 
                                        placeholder="Quantity People" 
                                        name="qtyPeople" 
                                        value = { values.qtyPeople }
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.qtyPeople}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <textarea rows="5" cols="95"
                                        type="text" 
                                        placeholder="Description Tour" 
                                        name="descriptionTour" 
                                        value = { values.descriptionTour }
                                        onChange = { handleChange }
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.descriptionTour}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <textarea rows="5" cols="95" 
                                        type="text" 
                                        placeholder="Detail Tour" 
                                        name="detailTour" 
                                        value = { values.detailTour }
                                        onChange = { handleChange } 
                                    />
                                     <Form.Text className="text-muted">
                                        {errors.detailTour}
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
                        )}
                        </Formik>
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