import { Actions } from "@twilio/flex-ui";

Actions.replaceAction("AcceptTask", (payload, original) => {
  const externalScreenPop = typeof payload.task.attributes.externalScreenPop !== undefined ? payload.task.attributes.externalScreenPop : "";

  if (externalScreenPop === "true") {
    const serviceNowDomain = typeof payload.task.attributes.serviceNowDomain !== undefined ? payload.task.attributes.serviceNowDomain : "";
    const serviceNowParameters = typeof payload.task.attributes.serviceNowParameters !== undefined ? payload.task.attributes.serviceNowDomain : "";

    if (serviceNowDomain !== undefined && serviceNowParameters !== undefined) {
      window.open(`${serviceNowDomain}/cti.do?${serviceNowParameters}`, '_blank');
    }

    original(payload);
  } else {
    original(payload);
  }
});
