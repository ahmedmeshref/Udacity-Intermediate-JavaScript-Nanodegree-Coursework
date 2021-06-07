// // Directions: Rewrite the imperative code below as Object-Oriented 

// let status = 'active'
// let warp = 2
// let type = 'Dilithium Crystal'
// let status_report = 'Captain, '

// if (status === 'active' && warp <= 4) {
//     status_report += 'the engines are active and we could be going faster.'
// } else if (status === 'active' && warp > 4) {
//     status_report += 'the engines are active and we are going ' + warp + '.'
// } else if (status === 'down') {
//     status_report += 'the engines are down.'
// } else {
//     status_report += 'the comms are down and we can`t reach engineering.'
// }

// console.log(status_report)


// OOP version
class Report {
    constructor(type, recipient) {
        this.status = 'active';
        this.warp = 2;
        this.type = type;
        this.recipient = recipient ? recipient : 'Captain';
    }

    create() {
        let status_report = this.recipient + ', ';
        if (this.status === 'active' && this.warp <= 4) {
            status_report += 'the engines are active and we could be going faster.'
        } else if (this.status === 'active' && this.warp > 4) {
            status_report += 'the engines are active and we are going ' + warp + '.'
        } else if (this.status === 'down') {
            status_report += 'the engines are down.'
        } else {
            status_report += 'the comms are down and we can`t reach engineering.'
        }
        return status_report;
    }

    set set_status(status){
        this.status = status;
    }

    set set_wrap(wrap){
        this.wrap = wrap;
    }
}

let newReport = new Report('Dilithium Crystal', 'Chief');
console.log(newReport.create())
