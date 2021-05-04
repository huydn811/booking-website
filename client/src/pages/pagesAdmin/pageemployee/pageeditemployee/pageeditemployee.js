import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { actFetchEmployeeIDReq, actUpdateEmployeeReq } from '../../../../actions/actEmployees';
import employees from '../../../../reducers/employee';
import './pageeditemployee.scss';

class PageEditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt_employeeID: '',
      txt_nameEmployee: '',
      avatarEmployee: '',
      txt_dayOfBirthEmployee: '',
      txt_genderEmployee: '',
      txt_addressEmployee: '',
      txt_emailEmployee: '',
      numberPhoneEmployee: '',
    };
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const { employeeID } = match.params;
      this.props.onEditEmployee(employeeID);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      const { itemEditing } = nextProps;
      this.setState({
        txt_employeeID: itemEditing.employeeID,
        txt_nameEmployee: itemEditing.nameEmployee,
        avatarEmployee: itemEditing.avatarEmployee,
        txt_dayOfBirthEmployee: itemEditing.dayOfBirthEmployee,
        txt_genderEmployee: itemEditing.genderEmployee,
        txt_addressEmployee: itemEditing.addressEmployee,
        txt_emailEmployee: itemEditing.emailEmployee,
        numberPhoneEmployee: itemEditing.numberPhoneEmployee,
      });
    }
  }

    handleInputOnChange = (e) => {
      const { target } = e;
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    }

    handleOnclickButtonChooseFile = async (e) => { // convert img to base 64 string
      const input = e.currentTarget;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          const imgTour = document.getElementById('imgTour');
          imgTour.src = reader.result;
          this.setState({
            frmTour: {
              ...this.state.frmTour,
              imgBase: reader.result,
            },
          });
        };
        await reader.readAsDataURL(input.files[0]); // convert to base64 string
      } else {
        return null;
      }
    }

    onSubmitFormEditEmployee = (e) => {
      e.preventDefault();
      const { history } = this.props;
      const { match } = this.props;
      const { employeeID } = match.params;
      const {
        txt_employeeID,
        txt_nameEmployee,
        txt_dayOfBirthEmployee,
        avatarEmployee,
        txt_genderEmployee,
        txt_addressEmployee,
        txt_emailEmployee,
        numberPhoneEmployee,
      } = this.state;
      const employee = {
        _id: employeeID,
        employeeID: txt_employeeID,
        nameEmployee: txt_nameEmployee,
        emailEmployee: txt_emailEmployee,
        roleEmployee: '',
        avatarEmployee: `${this.fileInput.current.files[0].name}`,
        dayOfBirthEmployee: txt_dayOfBirthEmployee,
        genderEmployee: txt_genderEmployee,
        addressEmployee: txt_addressEmployee,
        numberPhoneEmployee,
      };
      const thisPropsEditEmployee = this.props;
      const myPromisEditEmployee = new Promise((myResolve, myReject) => {
        thisPropsEditEmployee.onUpdateEmployee(employee);
        myResolve(
          'aaaaaaa',
        );
        myReject(
          'bbbbbbbbbb',
        );
      });
      myPromisEditEmployee.then(() => {
        history.push('/admin/all-employee');
      });
    }

    render() {
      const {
        txt_employeeID,
        txt_nameEmployee,
        txt_dayOfBirthEmployee,
        avatarEmployee,
        txt_genderEmployee,
        txt_addressEmployee,
        txt_emailEmployee,
        numberPhoneEmployee,
      } = this.state;
      return (
        <div className="pageEditemployee">
          <div className="form">
            <Container>
              <legend>Edit Employee</legend>
              <Form className="form_" onSubmit={this.onSubmitFormEditEmployee}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Employee ID"
                    name="txt_employeeID"
                    value={txt_employeeID}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name Employee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name Employee"
                    name="txt_nameEmployee"
                    value={txt_nameEmployee}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Date Of Birth"
                    name="txt_dayOfBirthEmployee"
                    value={txt_dayOfBirthEmployee}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Gender"
                    name="txt_genderEmployee"
                    value={txt_genderEmployee}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Address Employee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="txt_addressEmployee"
                    value={txt_addressEmployee}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Employee</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="txt_emailEmployee"
                    value={txt_emailEmployee}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Number Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Number Phone"
                    name="numberPhoneEmployee"
                    value={numberPhoneEmployee}
                    onChange={this.handleInputOnChange}
                  />
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <input
                    type="file"
                    name="avatarTour"
                                    // value = { avatarEmployee }
                    onChange={this.handleOnclickButtonChooseFile}
                    ref={this.fileInput}
                  />
                  <br />
                  <div className="img_tour">
                    <img id="imgTour" src="" />
                  </div>
                  <Form.Text className="text-muted" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Edit Employee
                </Button>
              </Form>
            </Container>
          </div>
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  itemEditing: state.itemEditing,
});

const mapDisPatchToProps = (dispatch, props) => ({
  onEditEmployee: (id) => {
    dispatch(actFetchEmployeeIDReq(id));
  },
  onUpdateEmployee: (employee) => {
    dispatch(actUpdateEmployeeReq(employee));
  },
});
export default connect(mapStateToProps, mapDisPatchToProps)(PageEditEmployee);
