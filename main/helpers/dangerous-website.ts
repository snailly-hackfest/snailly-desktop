import { app } from 'electron';
import { readFileSync, writeFileSync } from 'fs';
import axios from 'axios';
import path from 'path';

export async function initializingDangerousWebsite() {
  const isProd: boolean = process.env.NODE_ENV === 'production'
  const list_website_file_path = path.join(
    app.getAppPath(), isProd ? '../../' : '',
    'bin',
    'snaily_proxy',
    'list_website.txt'
  );

  const list_website_to_read = readFileSync(list_website_file_path, 'utf8');
  // check is empty
  const list_website = list_website_to_read.split(/\r?\n/);
  const update_date = list_website[0];

  const current_date = new Date().toISOString().split('T')[0];

  if (current_date !== update_date) {
    try {
      console.log('updating...');
      const response = await axios.get(
        'https://snailly-api.fajarbuana.my.id/classified-url/dangerous-website'
      );
      const data = response.data;
      const data_list_website = data.data.map((item) =>
        item.url.replace(/\n/g, '')
      );
      const list_website_to_write = `${current_date}\n${data_list_website.join(
        '\n'
      )}`;
      writeFileSync(list_website_file_path, list_website_to_write, 'utf8');
    } catch (error) {
      console.error(error);
    } finally {
      console.log('done');
    }
  }
}

export async function writeDangerousWebsite(websites: string[]) {
  try {
    const isProd: boolean = process.env.NODE_ENV === 'production'
    const list_website_file_path = path.join(
      app.getAppPath(), isProd ? '../../' : '',
      'bin',
      'snaily_proxy',
      'list_website.txt'
    );
  
    const list_website_to_read = readFileSync(list_website_file_path, 'utf8');
    const list_website = list_website_to_read.split(/\r?\n/);
    const data_list_website = websites.map((item) => item.replace(/\n/g, ''));
    const list_website_to_write = `${data_list_website.join(
      '\n'
    )}`;
    console.log(list_website_to_write)
    writeFileSync(list_website_file_path, list_website_to_write, 'utf8');
  } catch(error) {
    console.log(error)
  } finally {
    console.log('done')
  }

}
