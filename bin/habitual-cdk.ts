#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';

import { MainStack } from '../lib/MainStack';

const app = new cdk.App();

new MainStack(app, 'HabitualCdkStack');
