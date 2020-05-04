#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { MainStack } from '../lib/stacks';

const app = new cdk.App();

new MainStack(app, 'HabitualCdkStack');

app.synth();