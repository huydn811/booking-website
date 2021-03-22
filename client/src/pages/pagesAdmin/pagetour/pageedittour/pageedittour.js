import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { actEditTourReq, actGetTourByIDReq } from "../../../../actions/actTour";
import "./pageedittour.scss";
class PageAddTour extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        this.fileInput = React.createRef();
    }

    inputOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
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
                    ...this.state, 
                    imgBase : reader.result
                })
            }
            await reader.readAsDataURL(input.files[0]); // convert to base64 string
        }else {
            return null;
        }
    }
    
    componentDidMount(){
        let { match } = this.props;
        if(match) {
            let tourID = match.params.tourID;
            this.props.onEditingTour(tourID);
        }
    }
    

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing ) {
            let  { itemEditing } = nextProps;
            this.setState({
                tourID : itemEditing.tourID,
                tourName : itemEditing.tourName,
                avatarTour : itemEditing.avatarTour,
                startAddress : itemEditing.startAddress,
                startDate : itemEditing.startDate,
                endDate : itemEditing.endDate,
                priceTour : itemEditing.priceTour,
                qtyPeople :itemEditing.qtyPeople,
                descriptionTour : itemEditing.descriptionTour,
                detailTour : itemEditing.detailTour ,
            })
        }
    }
    
    onEditTour = (e) => {
        var  { match } = this.props;
        var tourID = match.params.tourID;
        e.preventDefault();
        var tour = {
            _id : tourID,
            ...this.state,
        };
        var { history } = this.props;
        let myPromisEditTour = new Promise((myResolve, myReject)=>{
            this.props.onUpdateTour(tour);
            myResolve(
                "aaaaaaa"
            );
            myReject(
                "bbbbbbbbbb"
            )
        })
        myPromisEditTour.then(()=> {
            history.push("/admint/all-tour");
        })
    }

    render (){
        var {tourID , 
            tourName ,
            avatarTour,
            startAddress,
            startDate,
            endDate,
            priceTour,
            qtyPeople,
            descriptionTour,
            detailTour
        } = this.state;
        console.log(this.state, '[this.state]');
        return(
            <div className="pageaddtour">
                <div className="form">
                    <Container>
                        <legend>Edit Tour</legend>
                        <Form className="form_" onSubmit = { this.onEditTour }>
                            <Form.Label>Tour ID</Form.Label>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                    type="text"
                                    name="tourID" 
                                    placeholder="Tour ID" 
                                    value = { tourID }
                                    onChange ={ this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name Tour</Form.Label>
                            <Form.Control 
                                    type="text"
                                    name="tourName" 
                                    placeholder="Name Tour" 
                                    value = { tourName }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Start Address</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="startAddress"
                                    placeholder="Start Address" 
                                    value = {startAddress}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Start Date</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Start Date" 
                                    name="startDate" 
                                    value = {startDate}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>End Date</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="End Date" 
                                    name="endDate" 
                                    value = {endDate}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price Tour</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Price Tour" 
                                    name="priceTour" 
                                    value = {priceTour}
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quantity People</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Quantity People" 
                                    name="qtyPeople" 
                                    value = { qtyPeople }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description Tour</Form.Label>
                                <textarea rows="5" cols="95" 
                                    type="text" 
                                    placeholder="Description Tour" 
                                    name="descriptionTour" 
                                    value = { descriptionTour }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Detail Tour</Form.Label>
                                <textarea rows="5" cols="95"
                                    type="text" 
                                    placeholder="Detail Tour" 
                                    name="detailTour" 
                                    value = { detailTour }
                                    onChange = { this.inputOnChange }
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <input 
                                    type="file" 
                                    name="avatarTour"
                                    // value = { avatarTour }
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
                                Edit Tour
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDisPatchToProps = (dispatch, props) => {
    return {
        onUpdateTour : (tour) => {
            dispatch(actEditTourReq(tour))
        },
        onEditingTour : (id) => {
            dispatch(actGetTourByIDReq(id))
        }
    }
}

export default connect(mapStateToProps,mapDisPatchToProps) (PageAddTour);