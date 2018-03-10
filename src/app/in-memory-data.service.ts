import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [
      { id: 1,
        label: 'my-linq',
        title: 'My LINQ',
        info_item1: 16,
        info_item1_text: 'Room temperature',
        info_item2: 88,
        info_item2_text: '??',
        info_item3: 30,
        info_item3_text: 'Outside',
        message: 'Hi'
      },
      { id: 2,
        label: 'atrium',
        title: 'Atrium',
        info_item1: 6,
        info_item1_text: 'People in building',
        info_item2: 1,
        info_item2_text: 'Sustainability position',
        info_item3: 5,
        info_item3_text: 'Planned activities',
        message: 'Pim is also watching Gilmore Girls right now.'
      },
      { id: 3,
        label: 'building',
        title: 'Building',
        info_item1: 25,
        info_item1_text: 'Building',
        info_item2: 5,
        info_item2_text: 'Free spaces',
        info_item3: 88,
        info_item3_text: '??',
        message: 'In a week, the window cleaners will drop by. To clean the windows. Surprise.'
      },
    ];
    return {data};
  }
}
