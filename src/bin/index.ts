/**
 * Comand line executor `yarn script [command]`
 */
import fillTopAuthors from '../prisma/fill/fillTopAuthors';
import fillEvergreen from '../prisma/fill/fillEvergreen';
import fillEditors from '../prisma/fill/fillEditors';
import recreateRoles from '../prisma/fill/recreateRoles';
import fillExpandable from '../prisma/fill/fillExpandable';
import fillFilters from '../prisma/fill/fillFilters';
import fillAppearances from '../prisma/fill/fillAppearances';
import fillClicksPosition from '../prisma/fill/fillClicksPosition';
import fillCountries from '../prisma/fill/fillCountries';
import fillDevices from '../prisma/fill/fillDevices';
import fillPages from '../prisma/fill/fillPages';
import fillQueries from '../prisma/fill/fillQueries';
import fillTags from '../prisma/fill/fillTags';

const command = process.argv[2];

/**
 * Fill data in database from data directory
 */
async function fill() {
  await fillTopAuthors();
  await fillEvergreen();
  await fillEditors();
  await fillExpandable();
  await fillFilters();
  await fillAppearances();
  await fillClicksPosition();
  await fillCountries();
  await fillDevices();
  await fillPages();
  await fillQueries();
  await fillTags();
}

(async () => {
  switch (command) {
    case 'fill':
      await fill();
      break;
    case 'roles':
      await recreateRoles();
      break;
    case 'all':
      await fill();
      await recreateRoles();
      break;
    default:
      console.info(`Unknow parameter '${command}'`);
      console.info('Supported parameters: [roles, fill, all]');
  }
})();
