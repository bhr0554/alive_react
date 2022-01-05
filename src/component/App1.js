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
            ,question: this.props.ctg[0].q
        }

        this.clickYes = this.clickYes.bind(this);
        this.clickNo = this.clickNo.bind(this);
    }

    clickYes() {
        const ctg = this.props.ctg;

        //this.setState({step : this.state.step++});
        this.state.step++;
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
            default :
                this.setState({question : '결제해 드리겠습니다.'});
                break;
        }
    }

    clickNo() {
        const ctg = this.props.ctg;
        let step = this.state.step;

        switch (step) {
            case 1 :
                //this.setState({sltCtg1: this.state.sltCtg1++});
                this.state.sltCtg1++;
                if(ctg.length <= this.state.sltCtg1) {
                    this.state.sltCtg1 = 0;
                }
                this.setState({question : ctg[this.state.sltCtg1].q});
                break;
            case 2 :
                //this.setState({sltCtg2: this.state.sltCtg2++});
                this.state.sltCtg2++
                if(ctg[this.state.sltCtg1].a.length <= this.state.sltCtg2) {
                    this.state.sltCtg2 = 0;
                }

                this.setState({question : ctg[this.state.sltCtg1].a[this.state.sltCtg2].q});
                break;
            case 3 :
                //this.setState({sltAcc: this.state.sltAcc++});
                this.state.sltAcc++;
                if(ctg[this.state.sltCtg1].a[this.state.sltCtg2].a.length <= this.state.sltAcc) {
                    this.state.sltAcc = 0;
                }

                this.setState({question : ctg[this.state.sltCtg1].a[this.state.sltCtg2].a[this.state.sltAcc].q});
                break;
        }
    }

    render() {
        let buttonYes, buttonNo;
        if(this.state.step < 4) {
            buttonYes = <button value="예" onClick={this.clickYes}>예</button>;
            buttonNo = <button value="아니오" onClick={this.clickNo}>아니오</button>;
        }

        return(
            <>
                <span>{this.state.question}</span>
                {buttonYes}
                {buttonNo}
            </>
        )
    }
}

export default App1;