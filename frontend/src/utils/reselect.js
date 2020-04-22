import { createSelectorCreator, defaultMemoize } from "reselect";
import isEqual from "lodash/fp/isEqual";

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);
