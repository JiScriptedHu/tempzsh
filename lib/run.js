const Fiddle = require('@electron/fiddle-core')

async function run() {
    const runner = await Fiddle.Runner.create();

    const result = await runner.run('C:/Users/hp/AppData/Local/fiddle-core/Data/electron/current', 'D:/Mess/SUMproject/samplefiddle')

    console.log(result);
}

run();

module.exports = {
    run: run,
}