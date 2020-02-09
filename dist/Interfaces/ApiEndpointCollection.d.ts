import AttachmentContent from "../Api/AttachmentContent";
import AttachmentPublic from "../Api/AttachmentPublic";
import Avatar from "../Api/Avatar";
import BillingContractSubscription from "../Api/BillingContractSubscription";
import BunqMeTabs from "../Api/BunqMeTabs";
import Card from "../Api/Card";
import CardBatch from "../Api/CardBatch";
import CardCvc2 from "../Api/CardCvc2";
import CardDebit from "../Api/CardDebit";
import CardName from "../Api/CardName";
import CredentialPasswordIp from "../Api/CredentialPasswordIp";
import CustomerStatementExport from "../Api/CustomerStatementExport";
import CustomerStatementExportContent from "../Api/CustomerStatementExportContent";
import DeviceRegistration from "../Api/DeviceRegistration";
import DraftPayment from "../Api/DraftPayment";
import Event from "../Api/Event";
import Installation from "../Api/Installation";
import Invoice from "../Api/Invoice";
import Ip from "../Api/Ip";
import MasterCardAction from "../Api/MasterCardAction";
import MonetaryAccount from "../Api/MonetaryAccount";
import MonetaryAccountBank from "../Api/MonetaryAccountBank";
import MonetaryAccountJoint from "../Api/MonetaryAccountJoint";
import MonetaryAccountSavings from "../Api/MonetaryAccountSavings";
import NoteAttachment from "../Api/NoteAttachment";
import NoteText from "../Api/NoteText";
import Payment from "../Api/Payment";
import PaymentBatch from "../Api/PaymentBatch";
import RequestInquiry from "../Api/RequestInquiry";
import RequestInquiryBatch from "../Api/RequestInquiryBatch";
import RequestResponse from "../Api/RequestResponse";
import SandboxUser from "../Api/SandboxUser";
import Schedule from "../Api/Schedule";
import SchedulePayment from "../Api/SchedulePayment";
import SchedulePaymentBatch from "../Api/SchedulePaymentBatch";
import SessionServer from "../Api/SessionServer";
import ShareInviteMonetaryAccountInquiry from "../Api/ShareInviteMonetaryAccountInquiry";
import ShareInviteMonetaryAccountResponse from "../Api/ShareInviteMonetaryAccountResponse";
import User from "../Api/User";
import UserCompany from "../Api/UserCompany";
import UserPerson from "../Api/UserPerson";
export default interface ApiEndpointCollection {
    attachmentContent: AttachmentContent;
    attachmentPublic: AttachmentPublic;
    avatar: Avatar;
    billingContractSubscription: BillingContractSubscription;
    bunqMeTabs: BunqMeTabs;
    card: Card;
    cardBatch: CardBatch;
    cardCvc2: CardCvc2;
    cardDebit: CardDebit;
    cardName: CardName;
    credentialPasswordIp: CredentialPasswordIp;
    customerStatementExport: CustomerStatementExport;
    customerStatementExportContent: CustomerStatementExportContent;
    deviceRegistration: DeviceRegistration;
    draftPayment: DraftPayment;
    event: Event;
    installation: Installation;
    invoice: Invoice;
    ip: Ip;
    masterCardAction: MasterCardAction;
    monetaryAccount: MonetaryAccount;
    monetaryAccountBank: MonetaryAccountBank;
    monetaryAccountJoint: MonetaryAccountJoint;
    monetaryAccountSavings: MonetaryAccountSavings;
    noteAttachment: NoteAttachment;
    noteText: NoteText;
    payment: Payment;
    paymentBatch: PaymentBatch;
    requestInquiry: RequestInquiry;
    requestInquiryBatch: RequestInquiryBatch;
    requestResponse: RequestResponse;
    sandboxUser: SandboxUser;
    schedule: Schedule;
    schedulePayment: SchedulePayment;
    schedulePaymentBatch: SchedulePaymentBatch;
    sessionServer: SessionServer;
    shareInviteMonetaryAccountInquiry: ShareInviteMonetaryAccountInquiry;
    shareInviteMonetaryAccountResponse: ShareInviteMonetaryAccountResponse;
    user: User;
    userCompany: UserCompany;
    userPerson: UserPerson;
}
