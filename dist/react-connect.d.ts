/// <reference types="react" />
import * as connectJs from "@stripe/connect-js";
import { ConnectElementTagName } from "@stripe/connect-js";
declare const ConnectPayments: () => JSX.Element;
declare const ConnectPayouts: () => JSX.Element;
declare const ConnectPaymentDetails: ({ chargeId, onClose, visible }: {
    chargeId: string;
    onClose: () => void;
    visible?: boolean | undefined;
}) => JSX.Element | null;
declare const ConnectAccountOnboarding: ({ onExit, recipientTermsOfServiceUrl, fullTermsOfServiceUrl, privacyPolicyUrl, skipTermsOfServiceCollection }: {
    onExit: () => void;
    recipientTermsOfServiceUrl?: string | undefined;
    fullTermsOfServiceUrl?: string | undefined;
    privacyPolicyUrl?: string | undefined;
    skipTermsOfServiceCollection?: boolean | undefined;
}) => JSX.Element | null;
type ConnectComponentsPayload = {
    connectInstance: connectJs.StripeConnectInstance;
};
declare const ConnectComponentsProvider: ({ connectInstance, children }: {
    connectInstance: connectJs.StripeConnectInstance;
    children: any;
}) => JSX.Element;
declare const useConnectComponents: () => ConnectComponentsPayload;
declare const useCreateComponent: (tagName: ConnectElementTagName) => {
    wrapper: JSX.Element;
    component: HTMLElement | null;
};
declare const useAttachAttribute: (component: HTMLElement | null, attribute: string, value: string | boolean | undefined) => void;
declare enum ConnectElementEventNames {
    exit = "exit",
    close = "close",
    instantPayoutCreated = "instantpayoutcreated"
}
declare const useAttachEvent: (component: HTMLElement | null, eventName: ConnectElementEventNames, listener: () => void) => void;
export { ConnectPayments, ConnectPayouts, ConnectPaymentDetails, ConnectAccountOnboarding, ConnectComponentsProvider, useConnectComponents, useCreateComponent, useAttachAttribute, ConnectElementEventNames, useAttachEvent };
