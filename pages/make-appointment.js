import React, { Component } from 'react';
import { Divider, Form, Input, Button, Segment, Message, Select } from 'semantic-ui-react';
import Layout from '../component/Layout';
import Web3 from 'web3';
//import record from '../ethereum/record';


const statusOptions = [
    { key: 'p', text: 'Pending', value: 'Pending' },
    { key: 'c', text: 'Complete', value: 'Complete' }
]

class MakeAppointment extends Component {
    state = {
        patientaddr: '',
        date: '',
        time: '',
        prescription: '',
        description: '',
        diagnosis: '',
        status: '',
        errorMessage: ''
    };

    handleStatus = (e, { value }) => this.setState({ status: value })

    onSubmit = async event => {
        event.preventDefault();

        const { patientaddr, date, time, diagnosis, prescription, description, status } = this.state;

        this.setState({loading: true, errorMessage: ''});

        if(window.ethereum) {
            try {
            const accounts = await window.ethereum.request(({ method: "eth_requestAccounts", }));  
            const web3 = new Web3(window.ethereum);
            const contractAddress = '0xdB6C8cc860769cF22499A9be9Ada69440bA464df';
            const contractABI = [{"inputs":[],"name":"Record","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"RevokePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"appointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"appointmentList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"doctorList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"editDetails","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"editDoctor","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAppointmentPerPatient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointments","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatients","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPermissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"givePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"patientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"patientList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"permissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointment","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointmentDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctor","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctorDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientDemographic","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientMedical","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchRecordDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"setAppointment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"setDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"setDoctor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"updateAppointment","outputs":[],"stateMutability":"view","type":"function"}];

            const contract = new web3.eth.Contract(contractABI, contractAddress); 
            
            console.log(contract);
            
            await contract.methods.setAppointment(
                patientaddr, date, time, diagnosis, prescription, description, status
            ).send({ gas: '3000000', from: accounts[0] });

            alert("Appointment created successfully!");
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
            alert("An error has occured");
        }

            this.setState({ loading: false, patientaddr: '', date: '', time: '', prescription: '', description: '', diagnosis: '', status: ''});
        }
    }

    render() {
        return (
            <Layout>
                <Segment padded><h1>Make Appointment</h1></Segment>
                <Segment>
                <h2 style={{ marginTop: '20px', marginBottom: '30px'}}>Appointment Information</h2>
                <Divider clearing />
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Patient's Ethereum Address</label>
                            <Input
                                placeholder = 'Eg. 0xF6973b46412ff52c1BfDB783D29e5218620Be542'                
                                value= {this.state.patientaddr}
                                onChange= {event => 
                                    this.setState({ patientaddr: event.target.value })}                           
                            />
                        </Form.Field>

                    </Form.Group>

                    <br/> 
                    <Form.Group widths='equal'>
                    <Form.Field>
                            <label>Date</label>
                            <Input
                                placeholder = 'Eg. 10/10/2022'                        
                                value= {this.state.date}
                                onChange= {event => 
                                    this.setState({ date: event.target.value })}                           
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Time</label>
                            <Input
                                placeholder = 'Eg. 10:30am'
                                value= {this.state.time}
                                onChange= {event => 
                                    this.setState({ time: event.target.value })}  
                            />
                        </Form.Field>
                    
                        <Form.Field 
                            label='Status' 
                            control={Select} 
                            options={statusOptions} 
                            onChange={this.handleStatus}
                        />
                    </Form.Group> 

                    <br/>
                    <h2 style={{ marginTop: '20px', marginBottom: '30px'}}>Medical Information</h2>
                    <Divider clearing />             
                    <Form.TextArea
                            label='Prescription'
                            placeholder = 'Eg. Amoxicillin 500mg'
                            value= {this.state.prescription}
                            onChange= {event => 
                                this.setState({ prescription: event.target.value })} 
                    />
                    
                    <br/>
                    <Form.TextArea
                                label='Diagnosis'
                                placeholder = 'Eg. Skin Infection'
                                value= {this.state.diagnosis}
                                onChange= {event => 
                                    this.setState({ diagnosis: event.target.value })}  
                    />             
                    <br/>
                    <Form.TextArea
                                label='Notes'
                                placeholder = 'Eg. Still requires further observation'
                                value= {this.state.description}
                                onChange= {event => 
                                    this.setState({ description: event.target.value })}  
                    />      

                    <br/>
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
                </Segment>
            </Layout>
        );
    }
}

export default MakeAppointment;