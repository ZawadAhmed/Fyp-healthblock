import React from 'react';
import { Container, Header, Icon, Segment } from 'react-bootstrap';
import Head from 'next/head';
import Menu from './Menu';


//Layout properly the Header at the top of every page and then the content come afterwards

export default props => {
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Head>
  
        <Segment inverted textAlign="center" style={{ minHeight: 340 }}>
          <MenuBar />
          <Icon size="huge" name="hospital" />
          <Header
            as="h2"
            color="blue"
            style={{ fontSize: '3em', fontWeight: 'normal' }}
            content="Blockchain Medical Records"
          />
          <Header
            as="h3"
            style={{ fontSize: '1.5em', fontWeight: 'normal' }}
            content="Ensure that your records are safe and sound"
          />
        </Segment>
  
        <Container>{props.children}</Container>
      </>
    );
  };