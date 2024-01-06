import { StringifiedSet } from './StringifiedSet.js';

const dirs = {
  north: [0, -1, '^'],
  west: [-1, 0, '<'],
  south: [0, +1, 'v'],
  east: [+1, 0, '>'],
};

export function simulate(map, beamStart) {
  const energized = new StringifiedSet();
  const visited = new StringifiedSet();

  const beams = [beamStart];

  while (beams.length) {
    const beam = beams.shift();
    const [incX, incY] = dirs[beam.dir];

    beam.x += incX;
    beam.y += incY;

    const tile = map[beam.y]?.[beam.x];

    if (!tile || visited.has(beam)) {
      continue;
    }

    visited.add(beam);
    energized.add([beam.x, beam.y]);

    switch (tile) {
      case '/':
        if (beam.dir === 'east') {
          beam.dir = 'north';
        } else if (beam.dir === 'west') {
          beam.dir = 'south';
        } else if (beam.dir === 'south') {
          beam.dir = 'west';
        } else if (beam.dir === 'north') {
          beam.dir = 'east';
        }
        break;

      case '\\':
        if (beam.dir === 'east') {
          beam.dir = 'south';
        } else if (beam.dir === 'west') {
          beam.dir = 'north';
        } else if (beam.dir === 'south') {
          beam.dir = 'east';
        } else if (beam.dir === 'north') {
          beam.dir = 'west';
        }
        break;

      case '|':
        if (beam.dir === 'east' || beam.dir === 'west') {
          beam.dir = 'north';
          beams.push({ x: beam.x, y: beam.y, dir: 'south' });
        }
        break;

      case '-':
        if (beam.dir === 'north' || beam.dir === 'south') {
          beam.dir = 'west';
          beams.push({ x: beam.x, y: beam.y, dir: 'east' });
        }
        break;

      default:
        break;
    }

    beams.push(beam);
  }

  return energized;
}
