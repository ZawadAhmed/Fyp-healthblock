import React, { Component } from 'react';
import { Divider, Form, Input, Button, Segment, Message, Select} from 'semantic-ui-react';
import Web3 from 'web3';
import Layout from '../component/Layout';
import record from '../ethereum/record';


const genderOptions = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
    { key: 'o', text: 'Other', value: 'Other' },
]

class RegisterDoctor extends Component {
    state = {
        ic: '',
        name: '',
        phone: '',
        gender: '',
        dob: '',
        loading: false,
        errorMessage: ''
    };

    handleGender = (e, { value }) => this.setState({ gender: value })


    onSubmit = async event => {
        event.preventDefault();

        const { ic, name, phone, gender, dob } = this.state;

        this.setState({loading: true, errorMessage: ''});

        if(window.ethereum) {
            try {
            const accounts = await window.ethereum.request(({ method: "eth_requestAccounts", }));  
            const web3 = new Web3(window.ethereum);
            const contractAddress = '0xdB6C8cc860769cF22499A9be9Ada69440bA464df';
            const contractABI = [{"inputs":[],"name":"Record","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"RevokePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"appointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"appointmentList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"doctorList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"editDetails","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"editDoctor","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAppointmentPerPatient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointments","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatients","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPermissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"givePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"patientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"patientList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"permissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointment","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointmentDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctor","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctorDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientDemographic","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientMedical","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchRecordDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"setAppointment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"setDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"setDoctor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"updateAppointment","outputs":[],"stateMutability":"view","type":"function"}];

            const contract = new web3.eth.Contract(contractABI, contractAddress); 
            
            console.log(contract);
            
            await contract.methods.setDoctor(
                ic, name, phone, gender, dob
            ).send({ from: accounts[0] });

            alert("Doctor account created successfully!");
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
            alert("This Doctor account already exists");
        }

        this.setState({ loading: false, ic: '', name: '', phone: '', gender: '', dob: ''});
        }
    }
    render() {
        return (
            <Layout>
                <Segment padded><h1>Register New Doctor</h1></Segment>
                <Segment>
                <h2 style={{ marginTop: '20px', marginBottom: '30px'}}>General Information</h2>
                <Divider clearing />
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>IC</label>
                            <Input
                                placeholder = 'Eg. 001234010234'                
                                value= {this.state.ic}
                                onChange= {event => 
                                    this.setState({ ic: event.target.value })}                           
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Full Name</label>
                            <Input
                                placeholder = 'Eg. John Smith'                        
                                value= {this.state.name}
                                onChange= {event => 
                                    this.setState({ name: event.target.value })}                           
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Phone</label>
                            <Input
                                placeholder = 'Eg. 0123456789'
                                value= {this.state.phone}
                                onChange= {event => 
                                    this.setState({ phone: event.target.value })}  
                            />
                        </Form.Field>
                    </Form.Group>
                    <br/>              
                    <Form.Group widths='equal'>
                        <Form.Field 
                            label='Gender' 
                            control={Select} 
                            options={genderOptions} 
                            onChange={this.handleGender}
                        />

                        <Form.Field>
                            <label>Date of Birth</label>
                            <Input 
                                placeholder = 'Eg. 01/01/1997'
                                value= {this.state.dob}
                                onChange= {event => 
                                    this.setState({ dob: event.target.value })}  
                            />
                        </Form.Field>
                    </Form.Group>                   
                  
                    <br/>
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
                </Segment>
            </Layout>
        );
    }
}

export default RegisterDoctor;