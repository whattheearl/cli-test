const hello = require('./modules/index');
const program = require('commander');
program.version('0.0.1');

program
  .command('g c [component]')
  .action(function (component) {
    console.log('this is the component', component);
  });

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function (env, options) {
    const mode = options.setup_mode || "normal";
    env = env || 'all';
    console.log('setup for %s env(s) with %s mode', env, mode);
  });

program
  .command('install [name]', 'install one or more packages')
  .command('search [query]', 'search with optional query')
  .command('update', 'update installed packages', { executableFile: 'myUpdateSubCommand' })
  .command('list', 'list packages installed', { isDefault: true })
  .parse(process.argv);

program.parse(process.argv);
