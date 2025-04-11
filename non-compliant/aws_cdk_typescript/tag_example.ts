import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class TagExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a default VPC
    const vpc = new ec2.Vpc(this, 'MyVPC');

    // Create an EC2 instance
    const instance = new ec2.Instance(this, 'MyEC2Instance', {
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: ec2.MachineImage.latestAmazonLinux(),
    });
  }
}
