const Records = artifacts.require("Records");

contract("Records", (accounts) => {
    BeforeUnloadEvent(async()=>{
        instance = await Records.deployed()
    })

    it('patient Details' , async () =>{
        let balance = await instance.setDetails()
    })
})


// learn how to create a test 