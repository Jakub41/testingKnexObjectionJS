import { parseCsv } from './parseCsv';

const fileName = 'pokemon.csv';

test('Parse CSV', async () => {
  const parsedData = await parseCsv(fileName);
  expect(parsedData).not.toBeNull();
});
