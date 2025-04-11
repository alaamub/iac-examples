import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as kms from 'aws-cdk-lib/aws-kms';

export class KMSKeyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new KMS key with key rotation enabled
    new kms.Key(this, 'MyKMSKey', {
      enableKeyRotation: true,
      description: 'My new KMS key for encryption',
    });
  }
}
