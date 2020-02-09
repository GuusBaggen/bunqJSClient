"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttachmentContent_1 = require("./AttachmentContent");
const AttachmentPublic_1 = require("./AttachmentPublic");
const Avatar_1 = require("./Avatar");
const BillingContractSubscription_1 = require("./BillingContractSubscription");
const BunqMeTabs_1 = require("./BunqMeTabs");
const Card_1 = require("./Card");
const CardBatch_1 = require("./CardBatch");
const CardCvc2_1 = require("./CardCvc2");
const CardDebit_1 = require("./CardDebit");
const CardName_1 = require("./CardName");
const CredentialPasswordIp_1 = require("./CredentialPasswordIp");
const CustomerStatementExport_1 = require("./CustomerStatementExport");
const CustomerStatementExportContent_1 = require("./CustomerStatementExportContent");
const DeviceRegistration_1 = require("./DeviceRegistration");
const DraftPayment_1 = require("./DraftPayment");
const Event_1 = require("./Event");
const Installation_1 = require("./Installation");
const Invoice_1 = require("./Invoice");
const Ip_1 = require("./Ip");
const MasterCardAction_1 = require("./MasterCardAction");
const MonetaryAccount_1 = require("./MonetaryAccount");
const MonetaryAccountBank_1 = require("./MonetaryAccountBank");
const MonetaryAccountJoint_1 = require("./MonetaryAccountJoint");
const MonetaryAccountSavings_1 = require("./MonetaryAccountSavings");
const NoteAttachment_1 = require("./NoteAttachment");
const NoteText_1 = require("./NoteText");
const Payment_1 = require("./Payment");
const PaymentBatch_1 = require("./PaymentBatch");
const RequestInquiry_1 = require("./RequestInquiry");
const RequestInquiryBatch_1 = require("./RequestInquiryBatch");
const RequestResponse_1 = require("./RequestResponse");
const SandboxUser_1 = require("./SandboxUser");
const Schedule_1 = require("./Schedule");
const SchedulePayment_1 = require("./SchedulePayment");
const SchedulePaymentBatch_1 = require("./SchedulePaymentBatch");
const SessionServer_1 = require("./SessionServer");
const ShareInviteMonetaryAccountInquiry_1 = require("./ShareInviteMonetaryAccountInquiry");
const ShareInviteMonetaryAccountResponse_1 = require("./ShareInviteMonetaryAccountResponse");
const User_1 = require("./User");
const UserCompany_1 = require("./UserCompany");
const UserPerson_1 = require("./UserPerson");
exports.default = bunqJSClient => ({
    attachmentContent: new AttachmentContent_1.default(bunqJSClient.ApiAdapter),
    attachmentPublic: new AttachmentPublic_1.default(bunqJSClient.ApiAdapter),
    avatar: new Avatar_1.default(bunqJSClient.ApiAdapter),
    billingContractSubscription: new BillingContractSubscription_1.default(bunqJSClient.ApiAdapter),
    bunqMeTabs: new BunqMeTabs_1.default(bunqJSClient.ApiAdapter),
    card: new Card_1.default(bunqJSClient.ApiAdapter),
    cardBatch: new CardBatch_1.default(bunqJSClient.ApiAdapter),
    cardCvc2: new CardCvc2_1.default(bunqJSClient.ApiAdapter),
    cardDebit: new CardDebit_1.default(bunqJSClient.ApiAdapter),
    cardName: new CardName_1.default(bunqJSClient.ApiAdapter),
    credentialPasswordIp: new CredentialPasswordIp_1.default(bunqJSClient.ApiAdapter),
    customerStatementExport: new CustomerStatementExport_1.default(bunqJSClient.ApiAdapter),
    customerStatementExportContent: new CustomerStatementExportContent_1.default(bunqJSClient.ApiAdapter),
    deviceRegistration: new DeviceRegistration_1.default(bunqJSClient.ApiAdapter),
    draftPayment: new DraftPayment_1.default(bunqJSClient.ApiAdapter),
    event: new Event_1.default(bunqJSClient.ApiAdapter),
    installation: new Installation_1.default(bunqJSClient.ApiAdapter),
    invoice: new Invoice_1.default(bunqJSClient.ApiAdapter),
    ip: new Ip_1.default(bunqJSClient.ApiAdapter),
    masterCardAction: new MasterCardAction_1.default(bunqJSClient.ApiAdapter),
    monetaryAccount: new MonetaryAccount_1.default(bunqJSClient.ApiAdapter),
    monetaryAccountBank: new MonetaryAccountBank_1.default(bunqJSClient.ApiAdapter),
    monetaryAccountJoint: new MonetaryAccountJoint_1.default(bunqJSClient.ApiAdapter),
    monetaryAccountSavings: new MonetaryAccountSavings_1.default(bunqJSClient.ApiAdapter),
    noteAttachment: new NoteAttachment_1.default(bunqJSClient.ApiAdapter),
    noteText: new NoteText_1.default(bunqJSClient.ApiAdapter),
    payment: new Payment_1.default(bunqJSClient.ApiAdapter),
    paymentBatch: new PaymentBatch_1.default(bunqJSClient.ApiAdapter),
    requestInquiry: new RequestInquiry_1.default(bunqJSClient.ApiAdapter),
    requestInquiryBatch: new RequestInquiryBatch_1.default(bunqJSClient.ApiAdapter),
    requestResponse: new RequestResponse_1.default(bunqJSClient.ApiAdapter),
    sandboxUser: new SandboxUser_1.default(bunqJSClient.ApiAdapter),
    schedule: new Schedule_1.default(bunqJSClient.ApiAdapter),
    schedulePayment: new SchedulePayment_1.default(bunqJSClient.ApiAdapter),
    schedulePaymentBatch: new SchedulePaymentBatch_1.default(bunqJSClient.ApiAdapter),
    sessionServer: new SessionServer_1.default(bunqJSClient.ApiAdapter),
    shareInviteMonetaryAccountInquiry: new ShareInviteMonetaryAccountInquiry_1.default(bunqJSClient.ApiAdapter),
    shareInviteMonetaryAccountResponse: new ShareInviteMonetaryAccountResponse_1.default(bunqJSClient.ApiAdapter),
    user: new User_1.default(bunqJSClient.ApiAdapter),
    userCompany: new UserCompany_1.default(bunqJSClient.ApiAdapter),
    userPerson: new UserPerson_1.default(bunqJSClient.ApiAdapter)
});
