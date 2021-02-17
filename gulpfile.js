const { watch } = require('gulp');
const { spawn } = require('child_process');

/**
 * Run codegen command
 * @param {*} cb 
 */
function codegen(cb) {
  setTimeout(() => {
    const com = spawn('yarn', ['codegen']);
    com.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    com.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    com.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }, 3000);
  cb();
}

/**
 * Run generate command
 * @param {*} cb 
 */
function generate(cb) {
  setTimeout(() => {
    const com = spawn('yarn', ['generate']);
    com.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    com.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    com.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }, 3000);
  cb();
}

exports.default = function() {
  /**
   *  Watch changed on src/graphql/Schema.ts file,
   *  and run codegen command
   */
  watch('src/graphql/Schema.ts', codegen);
  watch('src/prisma/schema.prisma', generate);
};