#!/bin/bash

STACK_NAME="hotel-app-backend"
PROFILE="csc-demo-mavi"
REGION="us-east-2"

aws cloudformation deploy \
  --template-file backend.yml \
  --stack-name $STACK_NAME \
  --capabilities CAPABILITY_IAM \
  --profile $PROFILE \
  --region $REGION \
  --parameter-overrides \
    HotelName="AWS Hotel" \
    Environment="dev"

echo "Stack deployment initiated. Check status with:"
echo "aws cloudformation describe-stacks --stack-name $STACK_NAME --profile $PROFILE --region $REGION"
