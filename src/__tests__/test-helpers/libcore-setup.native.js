/* eslint-disable no-console */
import { listen } from "@ledgerhq/logs";
import "./setup";
import "../../load/tokens/ethereum/erc20";
import "./implement-react-native-libcore";

jest.setTimeout(180000);

export const setup = testName => {
  global._JEST_SETUP(testName);
};

// eslint-disable-next-line no-unused-vars
listen(({ id, date, type, message, ...rest }) => {
  console.log(type + (message ? ": " + message : ""));
});
