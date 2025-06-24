import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const image = 'buildcharts/buildcharts:latest'
    await exec.exec('docker', ['pull', image])
    core.saveState('image', image)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
