## About

GitHub Action to set up [BuildCharts](https://github.com/eddietisma/buildcharts).

This action pulls the `buildcharts` Docker image that can be used in the following steps of your workflow.

## Usage

```yaml
name: ci

on:
  push:

jobs:
  buildx:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up BuildCharts
        uses: buildcharts/setup-action@v1
```