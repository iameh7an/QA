class deal {
    name='العليان Ltd'
    name_1='آل محمد بن علي بن جماز PLC'
    Deal_stage="Cancelled"
    Payment_Status="Payment processing"
    Deal_Quotation="BB-000070"
    Deal_status_INREV="In Review"
    Deal_status_REJ="Rejected"
    Deal_details=["BB-000070",'In Review','Quotation received','ABC','+966574845121']

    getDealStage = () => this.Deal_stage;
    getPaymentStatus=()=>this.Payment_Status;

}

export default deal