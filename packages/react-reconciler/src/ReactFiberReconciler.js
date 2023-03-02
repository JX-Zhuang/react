/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export * from './ReactFiberReconciler.old';


// The entry file imports either the old or new version of the reconciler.
// During build and testing, this indirection is always shimmed with the actual
// modules, otherwise both reconcilers would be initialized. So this is really
// only here for Flow purposes.

// import {
//   createContainer as createContainer_old,
//   updateContainer as updateContainer_old,
//   batchedEventUpdates as batchedEventUpdates_old,
//   batchedUpdates as batchedUpdates_old,
//   unbatchedUpdates as unbatchedUpdates_old,
//   deferredUpdates as deferredUpdates_old,
//   discreteUpdates as discreteUpdates_old,
//   flushDiscreteUpdates as flushDiscreteUpdates_old,
//   flushControlled as flushControlled_old,
//   flushSync as flushSync_old,
//   flushPassiveEffects as flushPassiveEffects_old,
//   IsThisRendererActing as IsThisRendererActing_old,
//   getPublicRootInstance as getPublicRootInstance_old,
//   attemptSynchronousHydration as attemptSynchronousHydration_old,
//   attemptUserBlockingHydration as attemptUserBlockingHydration_old,
//   attemptContinuousHydration as attemptContinuousHydration_old,
//   attemptHydrationAtCurrentPriority as attemptHydrationAtCurrentPriority_old,
//   findHostInstance as findHostInstance_old,
//   findHostInstanceWithWarning as findHostInstanceWithWarning_old,
//   findHostInstanceWithNoPortals as findHostInstanceWithNoPortals_old,
//   shouldSuspend as shouldSuspend_old,
//   injectIntoDevTools as injectIntoDevTools_old,
//   act as act_old,
//   createPortal as createPortal_old,
//   createComponentSelector as createComponentSelector_old,
//   createHasPsuedoClassSelector as createHasPsuedoClassSelector_old,
//   createRoleSelector as createRoleSelector_old,
//   createTestNameSelector as createTestNameSelector_old,
//   createTextSelector as createTextSelector_old,
//   getFindAllNodesFailureDescription as getFindAllNodesFailureDescription_old,
//   findAllNodes as findAllNodes_old,
//   findBoundingRects as findBoundingRects_old,
//   focusWithin as focusWithin_old,
//   observeVisibleRects as observeVisibleRects_old,
//   registerMutableSourceForHydration as registerMutableSourceForHydration_old,
//   runWithPriority as runWithPriority_old,
//   getCurrentUpdateLanePriority as getCurrentUpdateLanePriority_old,
// } from './ReactFiberReconciler.old';
// export const createContainer = createContainer_old;
// export const updateContainer = updateContainer_old;
// export const batchedEventUpdates = batchedEventUpdates_old;
// export const batchedUpdates = batchedUpdates_old;
// export const unbatchedUpdates = unbatchedUpdates_old;
// export const deferredUpdates = deferredUpdates_old;
// export const discreteUpdates = discreteUpdates_old;
// export const flushDiscreteUpdates = flushDiscreteUpdates_old;
// export const flushControlled = flushControlled_old;
// export const flushSync = flushSync_old;
// export const flushPassiveEffects = flushPassiveEffects_old;
// export const IsThisRendererActing = IsThisRendererActing_old;
// export const getPublicRootInstance = getPublicRootInstance_old;
// export const attemptSynchronousHydration = attemptSynchronousHydration_old;
// export const attemptUserBlockingHydration = attemptUserBlockingHydration_old;
// export const attemptContinuousHydration = attemptContinuousHydration_old;
// export const attemptHydrationAtCurrentPriority = attemptHydrationAtCurrentPriority_old;
// export const getCurrentUpdateLanePriority = getCurrentUpdateLanePriority_old;
// export const findHostInstance = findHostInstance_old;
// export const findHostInstanceWithWarning = findHostInstanceWithWarning_old;
// export const findHostInstanceWithNoPortals = findHostInstanceWithNoPortals_old;
// export const shouldSuspend = shouldSuspend_old;
// export const injectIntoDevTools = injectIntoDevTools_old;
// export const act = act_old;
// export const createPortal = createPortal_old;
// export const createComponentSelector = createComponentSelector_old;

// //TODO: "psuedo" is spelled "pseudo"
// export const createHasPsuedoClassSelector = createHasPsuedoClassSelector_old;
// export const createRoleSelector = createRoleSelector_old;
// export const createTextSelector = createTextSelector_old;
// export const createTestNameSelector = createTestNameSelector_old;
// export const getFindAllNodesFailureDescription = getFindAllNodesFailureDescription_old;
// export const findAllNodes = findAllNodes_old;
// export const findBoundingRects = findBoundingRects_old;
// export const focusWithin = focusWithin_old;
// export const observeVisibleRects = observeVisibleRects_old;
// export const registerMutableSourceForHydration = registerMutableSourceForHydration_old;
// export const runWithPriority = runWithPriority_old;
