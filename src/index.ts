import { exec } from 'child_process';

console.log('Hello, world!');

export const execCmd = (command: string): Promise<string> => {
    console.log(command);

    return new Promise((resolve, reject) => {
        exec(command, { env: process.env }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else if (stderr) {
                reject(new Error(stderr));
            } else {
                resolve(stdout);
            }
        });
    });
};
