#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { MainStack } from './stacks/MainStack';

const app = new cdk.App();

new MainStack(app, 'HabitualCdkStack');

app.synth();