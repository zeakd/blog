const path = require('path');
const fs = require('fs-extra');
const meow = require('meow');
const marked = require('marked');
const globby = require('globby');
const matter = require('gray-matter');
const nunjucks = require('nunjucks');
const pify = require('pify');

const htmlRender = pify(nunjucks.render);

const cliName = 'node renderer'
const cli = meow(`
  Usage
    ${cliName} src_glob ... dest_folder

  Example
    ${cliName} posts/ dist/
    ${cliName} posts/**/*.md dist/
    ${cliName} posts/**/*.md wiki/**/*.md dist/
`);

const input = cli.input || [];

if (input.length < 2) {
  process.exit(-1);
}

const cwd = process.cwd();
const src = input.slice(0, input.length - 1).map(s => path.resolve(cwd, s));
const dest = path.resolve(cwd, input[input.length - 1]);

async function render (src, dest) {
  const paths = await globby(src);

  paths.map(async p => {
    try {
      const file = await fs.readFile(p);
    } catch (err) {
      console.error('readfile', err)
    }

    const fileContent = file.toString();

    const {content, data: frontMatter} = matter(fileContent);
    
    const parsed = path.parse(p);

    const outDir = path.resolve(dest, path.relative(cwd, parsed.dir));
    const outBase = ['.md', '.markdown'].includes(parsed.ext) ?
      parsed.name + '.html' :
      parsed.base;

    const out = path.format({
      dir: outDir,
      base: outBase,
    });

    const rendered = marked(content);
    
    try {
      const output = await htmlRender(frontMatter._layout, { 
        page: {
          content: rendered,
        }
      });
      await fs.mkdirp(outDir);
      await fs.writeFile(out, output);
    } catch (err) {
      console.error(err);
    }
  });
}

render(src, dest);