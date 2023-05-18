import React from 'react';
import Head from 'next/head';
import { Container, Header, Icon, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import MenuBar from './MenuBar';

//Layout properly the Header at the top of every page and then the content come afterwards

const Layout = (props) => {
    return (
        <>
            <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 360}}
            >
            <MenuBar/>
            
            <br/>
            <br/>
                <Icon size='huge' name='hospital'/>
                <Header as='h2' color='blue' style={{ fontSize:'3em', fontWeight:'normal'}} content='Blockchain Medical Records'/>
                <Header as='h3' style={{ fontSize:'1.5em', fontWeight:'normal'}} content='Ensure that your records are safe and sound'/>
            </Segment>
            
            <br/>
            <Container>
                {props.children}
            </Container>
            
       
        </>
    );
};

export default Layout

/*
<Footer/> 
*/
