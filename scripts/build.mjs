import {cp,rm,mkdir} from 'node:fs/promises';
const entries=['index.html','support','privacy','terms','assets','config.js'];await rm('dist',{recursive:true,force:true});await mkdir('dist');for(const entry of entries)await cp(entry,`dist/${entry}`,{recursive:true});console.log('Built static site in dist/');
