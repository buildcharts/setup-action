## About

GitHub Action to set up [BuildCharts](https://github.com/eddietisma/buildcharts).

The action pulls the `buildcharts` Docker image for use in later workflow steps
and removes it when the job finishes.

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
