import * as cdk from '@aws-cdk/core';

import { WidgetService } from '../services/WidgetService';

export class MainStack extends cdk.Stack {

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new WidgetService(this, 'Widgets');
  }
}
