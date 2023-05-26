import React, { Component } from 'react';
import { Divider, Form, Input, Button, Segment, Message, Select} from 'semantic-ui-react';
import Web3 from 'web3';
import Layout from '../component/Layout';
import { Router } from '../routes';

const options = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
    { key: 'o', text: 'Other', value: 'Other' },
]

const allergyOptions = [
    { key: 'm', text: 'Medical', value: 'Medical' },
    { key: 'e', text: 'Environmental', value: 'Environmental' },
    { key: 'o', text: 'Others', value: 'Others' },
]

class RegisterPatient extends Component {
    state = {
        ic: '',
        name: '',
        phone: '',
        gender: '',
        dob: '',
        height: '',
        weight: '',
        bloodgroup: '',
        allergies: '',
        medication: '',
        loading: false,
        errorMessage: ''
    };

    handleGender = (e, { value }) => this.setState({ gender: value })

    handleAllergies = (e, { value }) => this.setState({ allergies: value })

    onSubmit = async event => {
        event.preventDefault();

        const { ic, name, phone, gender, dob, height, weight, bloodgroup, allergies, medication, } = this.state;

        this.setState({loading: true, errorMessage: ''});
       
    
        
        //sweetAlert2 -- look into 

        if(window.ethereum) {
            try {
            const accounts = await window.ethereum.request(({ method: "eth_requestAccounts", }));  
            const web3 = new Web3(window.ethereum);
            const contractAddress = '0xdB6C8cc860769cF22499A9be9Ada69440bA464df';
            const contractABI = [{"inputs":[],"name":"Record","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"RevokePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"appointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"appointmentList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"doctorList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"editDetails","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"editDoctor","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAppointmentPerPatient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointments","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatients","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPermissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"givePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"patientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"patientList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"permissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointment","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointmentDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctor","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctorDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientDemographic","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientMedical","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchRecordDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"setAppointment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"setDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"setDoctor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"updateAppointment","outputs":[],"stateMutability":"view","type":"function"}];

            const contract = new web3.eth.Contract(contractABI, contractAddress); 
            
            
            // calling the contract abi && address  -- ERROR 
            console.log(contract);
            await contract.methods.setDetails(
                ic, name, phone, gender, dob, height, weight,  bloodgroup, allergies, medication
            ).send({ from: accounts[0] });

            alert("Account created successfully!");
            
            // router heeelp
            Router.pushRoute('/list'); 
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
            alert("Account already exists");
        }

        this.setState({ loading: false, ic: '', name: '', phone: '', gender: '', dob: '', height: '', weight: '',  bloodgroup: '', allergies: '', medication: ''});
    }
    }

    render() {
        return (
            <Layout>
                <Segment padded><h1>Create New Record</h1></Segment>
                <Segment>
                <h2 style={{ marginTop: '10px', marginBottom: '30px'}}>General Information</h2>
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
                                options={options} 
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

                        <Form.Field>
                            <label>Height</label>
                            <Input 
                                placeholder = 'Eg. 183'
                                label={{ basic: true, content: 'cm' }}
                                labelPosition='right'
                                value= {this.state.height}
                                onChange= {event => 
                                    this.setState({ height: event.target.value })}  
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Weight</label>
                            <Input 
                                placeholder = 'Eg. 65'
                                label={{ basic: true, content: 'kg' }}
                                labelPosition='right'
                                value= {this.state.weight}
                                onChange= {event => 
                                    this.setState({ weight: event.target.value })}  
                            />
                        </Form.Field>
                    </Form.Group>                   
                   
                    <br/>
              
                    <br/>
                    <h2 style={{ marginTop: '20px', marginBottom: '30px'}}>Medical History</h2>
                    <Divider clearing />                    
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Blood Group</label>
                            <Input 
                                placeholder = 'Eg. A-'
                                value= {this.state.bloodgroup}
                                onChange= {event => 
                                    this.setState({ bloodgroup: event.target.value })}  
                            />
                        </Form.Field>

                        <Form.Field 
                                label='Allergies' 
                                control={Select} 
                                options={allergyOptions} 
                                onChange={this.handleAllergies}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group widths='equal'>
                        <Form.TextArea
                                label='Current Medications'
                                placeholder = 'Eg. Antidepressants'
                                value= {this.state.medication}
                                onChange= {event => 
                                    this.setState({ medication: event.target.value })}  
                        />
                    </Form.Group>

                    <br/>
                
                    <br/>
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
                </Segment>
            </Layout>
        );
    }
        
}


export default RegisterPatient;