const ans = require('../db/api_call')
/* 
    gST = given start time
    gET = given end time
    nST = new start time
    nET = new end time
*/
let conflict = async (req) => {
    let givenDate = req.body.data[0].dateTime;
    let givenOnlyDate = givenDate.split("T")[0];
    let startDate = new Date(givenDate);
    let duration = parseInt(req.body.data[0].duration)
    let endDate = new Date(startDate.getTime() + duration*60000);
    let gST = startDate.getTime();
    let gET = endDate.getTime();



    try {
        const res = await ans('peek' )
        let isConflict = true;
        for (let i = 0; i < res.message.length; i++) {
            console.log(res.message[i].data[0])

            let subArray = res.message[i].data[0];
            let newDate = subArray.dateTime;
            let onlyDate = newDate.split("T")[0];

            console.log(onlyDate);
            let nST = new Date(newDate);
            let nDur = parseInt(subArray.duration)
            let nET = new Date(nST.getTime() + nDur*60000);
            console.log(nST, nET)
            console.log(gST, gET)
            nET = nET.getTime()
            nST = nST.getTime();

            if(nST === gST && nET === gET) {
                isConflict = false;
            }

            // if dates are the same
            if (givenOnlyDate === onlyDate ) {
                // left-side overlap
                console.log("In loop")
                if (nST >= gST && nST <= gET) {
                    console.log(1)
                    isConflict = false
                }

                // inside overlap
                if (nST <= gST && nET >= gET) {
                    console.log(2)
                    isConflict = false
                }

                // outside overlap
                if (nST >= gST && gET >= nET) {
                    console.log(3, " ", nST, gST)
                    isConflict = false
                }

                // right-side overlap
                if (nST <= gST && gST <= nET ) {
                    console.log(4, " ", nST, gST)
                    isConflict = false
                }

            }

        }
        return isConflict;
    } catch (err) {
        console.log(err)
        return false
    }  

}

module.exports = conflict