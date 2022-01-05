import React from "react";

// 예 = 그대로 & 아니오 = 다음 ** 다음누른 게 마지막일 경우 0번째로 reset
class App1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step : 1
            ,sltCtg1 : 0
            ,sltCtg2 : 0
            ,sltAcc : 0
            ,question: ''
        }

        this.clickYes = this.clickYes.bind(this);
        this.clickNo = this.clickNo.bind(this);
    }

    clickYes() {
        const ctg = this.props.ctg;

        let step = this.state.step;
        switch (step) {
            case 1 :
                this.setState({question : ctg[this.state.sltCtg1].q});
                break;
            case 2 :
                this.setState({question : ctg[this.state.sltCtg1].a[this.state.sltCtg2].q});
                break;
            case 3 :
                this.setState({question : ctg[this.state.sltCtg1].a[this.state.sltCtg2].a[this.state.sltAcc].q});
                break;
        }

        console.log('clickYes : ' + this.state.step);
        this.setState({step : this.state.step++});
        console.log('clickYes--- : ' + this.state.step);
    }

    clickNo() {
        const ctg = this.props.ctg;

        let step = this.state.step;
        console.log('clickNo clickNo ----- ' + this.state.step);

        console.log('sltCtg1 전 ', this.state.sltCtg1);
        switch (step) {
            case 1 :
                this.setState({sltCtg1: this.state.sltCtg1++});
                console.log('ctg.length ', ctg.length);
                console.log('sltCtg1 후 ', this.state.sltCtg1);
                if(ctg.length <= this.state.sltCtg1) {
                    console.log('if 1');
                    this.state.sltCtg1 = 0;
                }
                console.log('clickNo 1  question : ', ctg[this.state.sltCtg1].q)
                this.setState({question : ctg[this.state.sltCtg1].q});
                break;
            case 2 :
                this.setState({sltCtg2: this.state.sltCtg2++});
                if(ctg[this.state.sltCtg1].a.length <= this.state.sltCtg2) {
                    console.log('if 2');
                    this.state.sltCtg2 = 0;
                }

                console.log('clickNo 2 question : ', this.state.question);
                this.setState({question : ctg[this.state.sltCtg1].a[this.state.sltCtg2].q});
                console.log('clickNo 2 question : ', this.state.question);
                break;
            case 3 :
                this.setState({sltAcc: this.state.sltAcc++});
                if(ctg[this.state.sltCtg1].a[this.state.sltCtg2].a.length <= this.state.sltAcc) {
                    console.log('if 3');
                    this.state.sltAcc = 0;
                }

                console.log('clickNo 3 question : ', this.state.question);
                this.setState({question : ctg[this.state.sltCtg1].a[this.state.sltCtg2].a[this.state.sltAcc].q});
                console.log('clickNo 3 question : ', this.state.question);
                break;
        }
    }

    render() {
        return(
            <>
                <span>{this.state.question}</span>
                <button value="예" onClick={this.clickYes}>예</button>
                <button value="아니오" onClick={this.clickNo}>아니오</button>
            </>
        )
    }
}

export default App1;