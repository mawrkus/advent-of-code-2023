import { findNextPositions } from './findNextPositions.js';

export function visitMap(map, start) {
  const queue = [start];

  const visitedSet = new Set();

  const markAsVisited = (pos) => visitedSet.add(String(pos));
  const wasVisited = (pos) => visitedSet.has(String(pos));

  // breadth-first
  while (queue.length) {
    const pos = queue.shift();

    markAsVisited(pos);

    for (const nextPos of findNextPositions(pos, map)) {
      if (!wasVisited(nextPos)) {
        queue.push(nextPos);
      }
    }
  }

  return { visitedSet, wasVisited };
}
