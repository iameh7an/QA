class deal {
    name='العليان Ltd'
    name_1='آل محمد بن علي بن جماز PLC'
    Deal_stage="Cancelled"
    Payment_Status="Payment processing"
    Deal_Quotation="BB-000070"
    Deal_status_INREV="In Review"
    Deal_status_REJ="Rejected"
    Deal_details=["BB-000070",'In Review','Quotation received','ABC','+966574845121']
    Date_filter=["2023-12-1","2024-12-31"]

    Client_details=["BB-000069","آل محمد بن علي بن جماز PLC","+966582221868","5118011032"]

    client_details_deal_detailPage=["BB-000002","شركة مستقبل الحديد للتجارة","SAR 50,000","SAR 77,450"]
    Supplier_Details=["Valo hoye jao masud.... v.02.","+966599023111"]
    Delivery_Details=["yjghj","Rakib Rakib","+966578897897"]

    getDealStage = () => this.Deal_stage;
    getPaymentStatus=()=>this.Payment_Status;

    

}

export default deal