import { FlexPlugin } from 'flex-plugin';
import './CustomActions';

export default class ServiceNowPlugin extends FlexPlugin {
  name = 'ServiceNowPlugin';

  init(flex, manager) {
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      if (task) {
        const externalScreenPop = typeof task.attributes.externalScreenPop !== undefined ? task.attributes.externalScreenPop : "";

        if (externalScreenPop === "true") {
          return "about:blank";
        }

        const serviceNowDomain = typeof task.attributes.serviceNowDomain !== undefined ? task.attributes.serviceNowDomain : "";
        const serviceNowParameters = typeof task.attributes.serviceNowParameters !== undefined ? task.attributes.serviceNowParameters : "";

        return (task && serviceNowDomain !== undefined && serviceNowParameters !== undefined) ? `${serviceNowDomain}/cti.do?${serviceNowParameters}` : "about:blank";
      } else {
        return "about:blank";
      }
    }
  }
}
