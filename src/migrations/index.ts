import * as migration_20260326_152050 from './20260326_152050';
import * as migration_20260406_cleanup from './20260406_cleanup';

export const migrations = [
  {
    up: migration_20260326_152050.up,
    down: migration_20260326_152050.down,
    name: '20260326_152050'
  },
  {
    up: migration_20260406_cleanup.up,
    down: migration_20260406_cleanup.down,
    name: '20260406_cleanup',
  },
];
