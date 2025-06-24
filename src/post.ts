import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const image = core.getState('image')
    if (image) {
      await exec.exec('docker', ['rmi', image])
    }
  } catch (error) {
    if (error instanceof Error) core.warning(error.message)
  }
}

run()
