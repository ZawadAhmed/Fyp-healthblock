# HealthBlock 
## A blockchain based solution for patient health record Management

This project focuses on ensuring the safety of patient healthcare records, targeting patients and doctors as the primary users. Patients will have the ability to upload their reports, which will be transformed into smart contracts. Doctors, with proper access, can then view the patients' comprehensive medical history through these smart contracts

### Project Objective 
1. Implementing Blockchain Technology for patient data management.
2. Developing a patient-centric Blockchain system that grants patients greater access   and control over their personal information.
3. Enhancing system security to minimize vulnerability to hacking.
4. Reducing healthcare costs for both medical caregivers and patients by minimizing redundant medical tests and enabling remote data access for authorized entities.




## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Step 1:
First, install all the dependencies 

Go to the project root directory

use in your command prompt or powershell to install all the packages.  
```bash
npm i 
#or 
npm install 
```

Besure to have all the required dependencies installed, please check the image attached to the project that highlights all the packages used for this project. 

### Step 2
Second cd to ethereum folder and run the following code in your console:
```bash
 node compile.js
 node deploy.js 
```
 these two commands will compile the smartcontract and deploy it to the testnetwork 
 Update the code by Pasting the contract deployed address that you receive after deployment. 


### Step 3
Lastly, go back to the root folder and run the server.

to run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



