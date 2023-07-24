const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFile = `
export const environment = {
    GIPHY_KEY: '${ process.env['GIPHY_KEY'] }'
}
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath, envFile);
