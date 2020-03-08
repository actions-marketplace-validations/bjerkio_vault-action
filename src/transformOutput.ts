/* eslint @typescript-eslint/no-explicit-any: "off" */
import { setOutput, debug } from '@actions/core';

export const transformOutput = (data: any, name?: string): void => {
  if (typeof data === 'object') {
    for (const key of Object.keys(data)) {
      transformOutput(data[key], name ? `${name}_${key}` : key);
    }
  } else {
    /**
     * @todo Add so that environment variables are exported
     * @body Currently it only setOutputs and debugs all outputs
     */
    setOutput(name || 'secret', data);
    debug(`✔ ${name} => outputs.${name}`);
  }
};
