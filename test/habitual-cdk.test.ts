import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HabitualCdk from '../lib/MainStack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HabitualCdk.MainStack(app, 'TestHabitualStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
