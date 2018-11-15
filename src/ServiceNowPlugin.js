import { FlexPlugin } from 'flex-plugin';
import React from 'react';

export default class ServiceNowPlugin extends FlexPlugin {
  name = 'ServiceNowPlugin';

  init(flex, manager) {
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      if (task) {
        console.log("=-=-=-=-=-=-=-=-=-");
        console.log(task);
        const serviceNowDomain = typeof task.attributes.serviceNowDomain !== undefined ? task.attributes.serviceNowDomain : "";
        const serviceNowParameters = typeof task.attributes.serviceNowParameters !== undefined ? task.attributes.serviceNowDomain : "";
        return (task && typeof serviceNowDomain !== undefined && typeof serviceNowParameters !== undefined) ? `${serviceNowDomain}/cti.do?${serviceNowParameters}` : "about:blank";
      } else {
        return "about:blank";
      }
    }
  }
}
