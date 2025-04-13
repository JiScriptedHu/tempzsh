const Fiddle = require('@electron/fiddle-core')
const { workingspace } = require('./workingFolder');

async function run() {
    try {
        const fiddlePath = workingspace();

        const runner = await Fiddle.Runner.create();

        const result = await runner.run('C:/Users/hp/AppData/Local/fiddle-core/Data/electron/current', fiddlePath)

        console.log(result);
    } catch (err) {
        console.error('Error running Fiddle:', err);
    }
}

module.exports = {
    run: run,
}