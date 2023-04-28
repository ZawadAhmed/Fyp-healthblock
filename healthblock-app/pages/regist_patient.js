import React, { Component } from 'react';
import Layout from '../component/Layout';
import Head from 'next/head';
import { Button, Divider, Form, Input, Message, Select } from 'react-bootstrap';

//import record from '../ethereum/record';
//import web3 from '../ethereum/web3';
//import { Router } from '../routes';

import { useState } from 'react';


// Allergy, Emergency name, Emergency contact removed 

export default function NewRecord() {
  const [ic, setIC] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bloodgroup, setBloodGroup] = useState('');
  const [medication, setMedication] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    // Add logic to create a new record here...

    setLoading(false);
  };

  const handleGender = (_, { value }) => {
    setGender(value);
  };

  const PatientRecord = () => {
    return(
    <>
      <Head>
        <title>Create New Record</title>
      </Head>
      <Container>
        <h1>Create New Record</h1>
      </Container>

      <Container>
                <h2 style={{ marginTop: '10px', marginBottom: '30px' }}>General Information</h2>
                <Divider clearing />
                <Form onSubmit={onSubmit} error={!!errorMessage}>
                <Form.Group widths="equal">
                    <Form.Field>
                    <label>IC</label>
                    <Input
                        placeholder="Eg. 001234010234"
                        value={ic}
                        onChange={(event) => setIC(event.target.value)}
                    />
                    </Form.Field>

                    <Form.Field>
                    <label>Full Name</label>
                    <Input
                        placeholder="Eg. John Smith"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    </Form.Field>
                </Form.Group>
                </Form>

        </Container>    
    );
    
};
 
export default ResponsiveNavbar;

