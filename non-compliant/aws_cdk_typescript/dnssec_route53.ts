import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as cr from 'aws-cdk-lib/custom-resources';

export class Route53DNSSECStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the public hosted zone
    const hostedZone = new route53.PublicHostedZone(this, 'MyHostedZone', {
      zoneName: 'example.com',
    });
  }
}
