import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';
import {ConnectElementEventNames, useAttachEvent} from './utils/useAttachEvent';

export const ConnectAccountOnboarding = ({
  onExit,
  recipientTermsOfServiceUrl,
  fullTermsOfServiceUrl,
  privacyPolicyUrl,
  skipTermsOfServiceCollection,
}: {
  onExit: () => void;
  recipientTermsOfServiceUrl?: string;
  fullTermsOfServiceUrl?: string;
  privacyPolicyUrl?: string;
  skipTermsOfServiceCollection?: boolean;
}): JSX.Element | null => {
  const {wrapper, component: onboarding} =
    useCreateComponent('account-onboarding');

  useAttachAttribute(
    onboarding,
    'recipient-terms-of-service-url',
    recipientTermsOfServiceUrl
  );
  useAttachAttribute(
    onboarding,
    'full-terms-of-service-url',
    fullTermsOfServiceUrl
  );

  useAttachAttribute(onboarding, 'privacy-policy-url', privacyPolicyUrl);

  useAttachAttribute(
    onboarding,
    'skip-terms-of-service-collection',
    skipTermsOfServiceCollection
  );

  useAttachEvent(onboarding, ConnectElementEventNames.exit, onExit);

  return wrapper;
};
