const Bundler = require('parcel-bundler');
const Tinypost = require('tinypost');

const files = 'glazed/**/*.html'

async function dev() {
  const tinypost = new Tinypost('posts/**/*.md', {
    watch: true,
    outDir: './unglazed/'
  });
  await tinypost.bundle();
  const bundler = new Bundler(files, {});
  const bundle = await bundler.bundle();
}

dev();