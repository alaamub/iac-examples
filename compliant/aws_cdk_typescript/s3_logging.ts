import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class S3LoggingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the central logging bucket
    const centralLoggingBucket = new s3.Bucket(this, 'CentralLoggingBucket', {
      bucketName: 'central-logging-bucket',
    });

    // Create the source bucket with server access logging enabled
    const sourceBucket = new s3.Bucket(this, 'SourceBucket', {
      bucketName: 'source-bucket',
      serverAccessLogsBucket: centralLoggingBucket,
      serverAccessLogsPrefix: 'source-bucket-logs/',
    });
  }
}
