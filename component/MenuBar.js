import React, { Component } from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.svg'
import Head from 'next/head.js';
import { Navbar, Dropdown, Button, Link, Text, useTheme, Card, Spacer, Radio, } from "@nextui-org/react";
//import record from '../ethereum/record';
//import web3 from '../ethereum/web3';


//Header that is used in all pages


export default function App() {

  const {isDark} = useTheme();


  const colors = ["primary", "secondary", "success", "warning", "error"];
  
  return (
        <>
        <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    
        <Navbar isBordered={isDark} variant="sticky">
        <Navbar.Brand>
        <Image
        src={Logo}
         alt="Healthblock"
         width={40}
         height={40}

        />
          <Text b color="inherit" hideIn="xL">
            HealthBlock
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
        >
       
          <Navbar.Link isActive href="/home">Home</Navbar.Link>
          <Navbar.Link href="/dashboard"> Dashboard </Navbar.Link>
          <Navbar.Link href="/list">Records List</Navbar.Link>
          
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                Doctor
            </Dropdown.Button>
            </Navbar.Item>
           
          
            <Dropdown.Menu

             //Drop down for doctor 
            
             aria-label="Doctor"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="View Profile"
                showFullDescription
                description="Profile for the Doctor"

              >
                <Link href="./register-doctor"> Create Profile </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="Edit Profile"
                showFullDescription
                description="Edit information"

              >
                <Link href="./edit-doctor"> Edit Profile </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="Make Appointment"
                showFullDescription
                description="Create an Appointment"
             
              >
                
                <Link href="./make-appointment"> Make Appointment </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="Update Appointment"
                showFullDescription
                description="Update an Appointment"
              
              >
                  <Link href="./edit-appointment"> Update Appointment </Link>
              </Dropdown.Item>
           
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                Patient
            </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="Patient"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="View Profile"
                showFullDescription
                description="Profile for the Patient"

              >
                 <Link href="./register-patient"> Create Patient </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="Edit Profile"
                showFullDescription
                description="Edit information"

              >
                <Link href="./edit-patient"> Edit Profile </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="Allow Acces"
                showFullDescription
                description="Allow a doctor to view your biodata"
              
             
              >
                <Link href="./approve-doctor"> Allow Access </Link>
              </Dropdown.Item>
              <Dropdown.Item
                key="Revoke Acces"
                showFullDescription
                description="Remove access of a doctor to view your biodata"
              
              >
                  <Link href="./revoke-doctor"> Revoke Access </Link>
              </Dropdown.Item>
           
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>

        

      </Navbar>
      </>
  );
}

