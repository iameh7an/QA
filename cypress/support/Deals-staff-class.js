class deal {
    name='العليان Ltd'
    name_1='آل محمد بن علي بن جماز PLC'
    Deal_stage="Cancelled"
    Payment_Status="Payment processing"
    Deal_Quotation="BB-000070"
    
    getDealStage = () => this.Deal_stage;
    getPaymentStatus=()=>this.Payment_Status;
}

export default deal