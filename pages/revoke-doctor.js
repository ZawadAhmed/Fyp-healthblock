import React, { Component } from 'react';
import { Segment, Input, Header, Message, Button, Form } from 'semantic-ui-react';
import Layout from '../component/Layout';
//import record from '../ethereum/record';
import Web3 from 'web3';

class RevokeDoctor extends Component {
    state = {
        doctorAddr: '',
        loading: '',
        errorMessage: '' 
    };

    onSubmit = async event => {
        event.preventDefault();

        this.setState({loading: true, errorMessage: ''});
        
        if(window.ethereum) {
            try {
            const accounts = await window.ethereum.request(({ method: "eth_requestAccounts", }));  
            const web3 = new Web3(window.ethereum);
            const contractAddress = '0xdB6C8cc860769cF22499A9be9Ada69440bA464df';
            const contractABI = [{"inputs":[],"name":"Record","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"RevokePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"appointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"appointmentList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"doctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"doctorList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"editDetails","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"editDoctor","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointmentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAppointmentPerPatient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAppointments","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoctors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatients","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPermissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"givePermission","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"patientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"patientList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"permissionGrantedCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointment","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchAppointmentDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctor","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchDoctorDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientDemographic","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchPatientMedical","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"searchRecordDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"setAppointment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"},{"internalType":"string","name":"_height","type":"string"},{"internalType":"string","name":"_weight","type":"string"},{"internalType":"string","name":"_bloodgroup","type":"string"},{"internalType":"string","name":"_allergies","type":"string"},{"internalType":"string","name":"_medication","type":"string"}],"name":"setDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_ic","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_dob","type":"string"}],"name":"setDoctor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_time","type":"string"},{"internalType":"string","name":"_diagnosis","type":"string"},{"internalType":"string","name":"_prescription","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"string","name":"_status","type":"string"}],"name":"updateAppointment","outputs":[],"stateMutability":"view","type":"function"}];

            const contract = new web3.eth.Contract(contractABI, contractAddress); 
            
            
            // calling the contract abi && address  -- ERROR 
            console.log(contract);
            await contract.methods.RevokePermission(this.state.doctorAddr)
            .send({ gas: '3000000', from: accounts[0] });

            alert("Permission Revoked Successfully!");
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, doctorAddr: ''});
    }
    }
    render() {
        return (
            <Layout>
                <Segment>
                    <Header
                            as='h2'
                            content='Revoke Access'
                            subheader='Revoke permission for doctor or patient to view records'
                    ></Header>
                    <Input 
                        fluid
                        placeholder = "Doctor's Ethereum Address"
                        value= {this.state.doctorAddr}
                        onChange= {event => 
                            this.setState({ doctorAddr: event.target.value })}  
                    /><br/>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Message error header="Oops!" content={this.state.errorMessage}/>
                        <Button primary loading={this.state.loading}>Revoke</Button>
                    </Form>
                </Segment>
            </Layout>
        );
    }
}

export default RevokeDoctor;