import execa from 'execa';
import test from 'ava';

test('show help output', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Add collaborators to Github repos/);
});

test('show version', async t => {
	t.is(await execa.stdout('./cli.js', ['--version']), require('./package').version);
});
